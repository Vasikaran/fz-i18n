import React, { Children } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import {
  pad,
  getSuffix,
  getValues,
  isToday,
  isYesterday,
  isTomorrow,
  isWithinAWeek
} from '../utils';
import FormatText from './FormatText';

export default class DateTimeDiffFormat extends React.Component {
  constructor(props) {
    super(props);
    this.getSuffix = this.getSuffix.bind(this);
  }
  getSuffix(fromDateObj, toDateObj) {
    let suffix;
    if (toDateObj.isBefore(fromDateObj)) {
      suffix = this.props.ago || '';
    } else if (toDateObj.isAfter(fromDateObj)) {
      suffix = this.props.later || '';
    } else {
      suffix = '';
    }
    return suffix;
  }

  render() {
    const {
      from,
      fromTimeZone,
      to,
      toTimeZone,
      today,
      yesterday,
      tomorrow,
      others,
      format,
      className = null,
      title = null
    } = this.props;
    let fromDateObj = moment(from).tz(fromTimeZone);
    let toDateObj = moment(to).tz(toTimeZone);
    let suffix = this.getSuffix(fromDateObj, toDateObj);
    let diff = moment.duration(Math.abs(toDateObj.diff(fromDateObj)));
    var yearRemaingdays;
    if (toDateObj.isBefore(fromDateObj)) {
      var tempTo = moment(to)
        .tz(toTimeZone)
        .add(diff.get('y'), 'years');
      yearRemaingdays = Math.abs(tempTo.diff(fromDateObj, 'days'));
    } else {
      var tempFrom = moment(fromDateObj)
        .tz(fromTimeZone)
        .add(diff.get('y'), 'years');
      yearRemaingdays = Math.abs(tempFrom.diff(toDateObj, 'days'));
    }
    let withInAWeak = isWithinAWeek(fromDateObj, toDateObj);

    var diffObj = {
      h: diff.get('h'),
      m: diff.get('m'),
      s: diff.get('s'),
      M: diff.get('M'),
      y: diff.get('y'),
      d: diff.get('d'),
      hh: pad(diff.get('h'), 2),
      mm: pad(diff.get('m'), 2),
      ss: pad(diff.get('s'), 2),
      MM: pad(diff.get('M'), 2),
      yy: pad(diff.get('y'), 2),
      dd: pad(diff.get('d'), 2),
      days: yearRemaingdays,
      yDays: pad(yearRemaingdays, 2),
      isWithInAWeek: withInAWeak,
      suffix: suffix
    };
    var diffObj1 = {
      hours: diff.get('h'),
      minutes: diff.get('m'),
      seconds: diff.get('s'),
      months: diff.get('M'),
      years: diff.get('y'),
      days: diff.get('d'),
      yDays: yearRemaingdays,
      isWithInAWeek: withInAWeak,
      suffix: suffix
    };
    //var daysDiff = toDateObj.diff(fromDateObj, 'days', true);
    var key = '';
    var values = [];
    var text = null;
    var isSuffixEnable = false;
    if (format) {
      let years, months, days, hours, minutes, seconds;
      years = diffObj1.years > 1 ? '2' : diffObj1.years;
      //  months = diffObj1.months > 1 ? '2' : diffObj1.months;
      //days = diffObj1.days > 1 ? '2' : diffObj1.days;
      days = yearRemaingdays > 1 ? '2' : yearRemaingdays;
      hours = diffObj1.hours > 1 ? '2' : diffObj1.hours;
      minutes = diffObj1.minutes > 1 ? '2' : diffObj1.minutes;
      //seconds = diffObj1.seconds > 1 ? '2' : diffObj1.seconds;
      // let pattern = '' + years + months + days + hours + minutes + seconds;
      let count = 0;
      let pattern = [years, days, hours, minutes].reduce((res, next) => {
        if (count == 2) {
          res = res + '0';
        } else if (next != 0) {
          count++;
          res = res + next;
        } else {
          res = res + next;
        }
        return res;
      }, '');
      //let pattern = '' + years + days + hours + minutes;
      let value = format(diffObj1, pattern);
      if (value && typeof value == 'object') {
        key = value.key;
        values = getValues(value.params, diffObj);
        if (pattern.indexOf('0000') == 0) {
          //suffix ignore for second hook
          isSuffixEnable = false;
        } else {
          isSuffixEnable = true;
        }
      } else if (typeof value == 'string') {
        text = toDateObj.format(value);
      }
    } else {
      if (isYesterday(toDateObj, fromDateObj)) {
        if (typeof yesterday == 'function') {
          var value = yesterday(diffObj1);
          key = value.key;
          values = getValues(value.params, diffObj);
        } else if (typeof yesterday == 'object') {
          key = yesterday.key;
          values = getValues(yesterday.params, diffObj);
        } else if (typeof yesterday == 'string') {
          text = toDateObj.format(yesterday);
        }
      } else if (isToday(toDateObj, fromDateObj)) {
        if (typeof today == 'function') {
          var value = today(diffObj1);
          key = value.key;
          values = getValues(value.params, diffObj);
        } else if (typeof today == 'object') {
          key = today.key;
          values = getValues(today.params, diffObj);
          isSuffixEnable = true;
        } else if (typeof today == 'string') {
          text = toDateObj.format(today);
        }
      } else if (isTomorrow(toDateObj, fromDateObj)) {
        if (typeof tomorrow == 'function') {
          var value = tomorrow(diffObj1);
          key = value.key;
          text = getValues(value.params, diffObj);
        } else if (typeof tomorrow == 'object') {
          key = tomorrow.key;
          values = getValues(tomorrow.params, diffObj);
        } else if (typeof tomorrow == 'string') {
          text = toDateObj.format(tomorrow);
        }
      } else {
        var value = others(diffObj1);
        if (typeof value == 'object') {
          key = value.key;
          values = getValues(value.params, diffObj);
          isSuffixEnable = true;
        } else if (typeof value == 'string') {
          text = toDateObj.format(value);
        }
      }
    }
    return text ? (
      <span className={className} data-title={title}>
        {text}
      </span>
    ) : (
      <FormatText
        i18NKey={isSuffixEnable && suffix != '' ? key + '.' + suffix : key}
        values={values}
        className={className}
        data-title={title}
      />
    );
  }
}
DateTimeDiffFormat.propTypes = {
  from: PropTypes.string,
  fromTimeZone: PropTypes.string,
  to: PropTypes.string,
  toTimeZone: PropTypes.string,
  ago: PropTypes.string,
  later: PropTypes.string,
  format: PropTypes.func,
  tommorrow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  yesterday: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  today: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  others: PropTypes.func,
  title: PropTypes.string
};
