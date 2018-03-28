import _typeof from 'babel-runtime/helpers/typeof';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { pad, getSuffix, getValues, isToday, isYesterday, isTomorrow, isWithinAWeek } from '../utils';
import FormatText from './FormatText';

var DateTimeDiffFormat = function (_React$Component) {
  _inherits(DateTimeDiffFormat, _React$Component);

  function DateTimeDiffFormat(props) {
    _classCallCheck(this, DateTimeDiffFormat);

    var _this = _possibleConstructorReturn(this, (DateTimeDiffFormat.__proto__ || _Object$getPrototypeOf(DateTimeDiffFormat)).call(this, props));

    _this.getSuffix = _this.getSuffix.bind(_this);
    return _this;
  }

  _createClass(DateTimeDiffFormat, [{
    key: 'getSuffix',
    value: function getSuffix(fromDateObj, toDateObj) {
      var suffix = void 0;
      if (toDateObj.isBefore(fromDateObj)) {
        suffix = this.props.ago || '';
      } else if (toDateObj.isAfter(fromDateObj)) {
        suffix = this.props.later || '';
      } else {
        suffix = '';
      }
      return suffix;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          from = _props.from,
          fromTimeZone = _props.fromTimeZone,
          to = _props.to,
          toTimeZone = _props.toTimeZone,
          today = _props.today,
          yesterday = _props.yesterday,
          tomorrow = _props.tomorrow,
          others = _props.others,
          format = _props.format,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title;

      var fromDateObj = moment(from).tz(fromTimeZone);
      var toDateObj = moment(to).tz(toTimeZone);
      var suffix = this.getSuffix(fromDateObj, toDateObj);
      var diff = moment.duration(Math.abs(toDateObj.diff(fromDateObj)));
      var yearRemaingdays;
      if (toDateObj.isBefore(fromDateObj)) {
        var tempTo = moment(to).tz(toTimeZone).add(diff.get('y'), 'years');
        yearRemaingdays = Math.abs(tempTo.diff(fromDateObj, 'days'));
      } else {
        var tempFrom = moment(fromDateObj).tz(fromTimeZone).add(diff.get('y'), 'years');
        yearRemaingdays = Math.abs(tempFrom.diff(toDateObj, 'days'));
      }
      var withInAWeak = isWithinAWeek(fromDateObj, toDateObj);

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
        var years = void 0,
            months = void 0,
            days = void 0,
            hours = void 0,
            minutes = void 0,
            seconds = void 0;
        years = diffObj1.years > 1 ? '2' : diffObj1.years;
        //  months = diffObj1.months > 1 ? '2' : diffObj1.months;
        //days = diffObj1.days > 1 ? '2' : diffObj1.days;
        days = yearRemaingdays > 1 ? '2' : yearRemaingdays;
        hours = diffObj1.hours > 1 ? '2' : diffObj1.hours;
        minutes = diffObj1.minutes > 1 ? '2' : diffObj1.minutes;
        //seconds = diffObj1.seconds > 1 ? '2' : diffObj1.seconds;
        // let pattern = '' + years + months + days + hours + minutes + seconds;
        var count = 0;
        var pattern = [years, days, hours, minutes].reduce(function (res, next) {
          if (count == 2) {
            res = res + '0';
          } else if (next != 0) {
            count++;
            res = res + next;
          }
          return res;
        }, '');
        //let pattern = '' + years + days + hours + minutes;
        var _value = format(diffObj1, pattern);
        if (_value && (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) == 'object') {
          key = _value.key;
          values = getValues(_value.params, diffObj);
          if (pattern.indexOf('00000') == 0) {
            //suffix ignore for second hook
            isSuffixEnable = false;
          } else {
            isSuffixEnable = true;
          }
        } else if (typeof _value == 'string') {
          text = toDateObj.format(_value);
        }
      } else {
        if (isYesterday(toDateObj, fromDateObj)) {
          if (typeof yesterday == 'function') {
            var value = yesterday(diffObj1);
            key = value.key;
            values = getValues(value.params, diffObj);
          } else if ((typeof yesterday === 'undefined' ? 'undefined' : _typeof(yesterday)) == 'object') {
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
          } else if ((typeof today === 'undefined' ? 'undefined' : _typeof(today)) == 'object') {
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
          } else if ((typeof tomorrow === 'undefined' ? 'undefined' : _typeof(tomorrow)) == 'object') {
            key = tomorrow.key;
            values = getValues(tomorrow.params, diffObj);
          } else if (typeof tomorrow == 'string') {
            text = toDateObj.format(tomorrow);
          }
        } else {
          var value = others(diffObj1);
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
            key = value.key;
            values = getValues(value.params, diffObj);
            isSuffixEnable = true;
          } else if (typeof value == 'string') {
            text = toDateObj.format(value);
          }
        }
      }
      return text ? React.createElement(
        'span',
        { className: className, 'data-title': title },
        text
      ) : React.createElement(FormatText, {
        i18NKey: isSuffixEnable && suffix != '' ? key + '.' + suffix : key,
        values: values,
        className: className,
        'data-title': title
      });
    }
  }]);

  return DateTimeDiffFormat;
}(React.Component);

export default DateTimeDiffFormat;

DateTimeDiffFormat.propTypes = {
  from: PropTypes.string,
  fromTimeZone: PropTypes.string,
  to: PropTypes.string,
  toTimeZone: PropTypes.string,
  ago: PropTypes.string,
  later: PropTypes.string,
  format: PropTypes.func,
  tommorrow: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  yesterday: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  today: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  others: PropTypes.func,
  title: PropTypes.string
};