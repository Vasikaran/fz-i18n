'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _utils = require('../utils');

var _FormatText = require('./FormatText');

var _FormatText2 = _interopRequireDefault(_FormatText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimeDiffFormat = function (_React$Component) {
  _inherits(DateTimeDiffFormat, _React$Component);

  function DateTimeDiffFormat(props) {
    _classCallCheck(this, DateTimeDiffFormat);

    var _this = _possibleConstructorReturn(this, (DateTimeDiffFormat.__proto__ || Object.getPrototypeOf(DateTimeDiffFormat)).call(this, props));

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

      var fromDateObj = (0, _momentTimezone2.default)(from).tz(fromTimeZone);
      var toDateObj = (0, _momentTimezone2.default)(to).tz(toTimeZone);
      var suffix = this.getSuffix(fromDateObj, toDateObj);
      var diff = _momentTimezone2.default.duration(Math.abs(toDateObj.diff(fromDateObj)));
      var yearRemaingdays;
      if (toDateObj.isBefore(fromDateObj)) {
        var tempTo = (0, _momentTimezone2.default)(to).tz(toTimeZone).add(diff.get('y'), 'years');
        yearRemaingdays = Math.abs(tempTo.diff(fromDateObj, 'days'));
      } else {
        var tempFrom = (0, _momentTimezone2.default)(fromDateObj).tz(fromTimeZone).add(diff.get('y'), 'years');
        yearRemaingdays = Math.abs(tempFrom.diff(toDateObj, 'days'));
      }
      var withInAWeak = (0, _utils.isWithinAWeek)(fromDateObj, toDateObj);

      var diffObj = {
        h: diff.get('h'),
        m: diff.get('m'),
        s: diff.get('s'),
        M: diff.get('M'),
        y: diff.get('y'),
        d: diff.get('d'),
        hh: (0, _utils.pad)(diff.get('h'), 2),
        mm: (0, _utils.pad)(diff.get('m'), 2),
        ss: (0, _utils.pad)(diff.get('s'), 2),
        MM: (0, _utils.pad)(diff.get('M'), 2),
        yy: (0, _utils.pad)(diff.get('y'), 2),
        dd: (0, _utils.pad)(diff.get('d'), 2),
        days: yearRemaingdays,
        yDays: (0, _utils.pad)(yearRemaingdays, 2),
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
          values = (0, _utils.getValues)(_value.params, diffObj);
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
        if ((0, _utils.isYesterday)(toDateObj, fromDateObj)) {
          if (typeof yesterday == 'function') {
            var value = yesterday(diffObj1);
            key = value.key;
            values = (0, _utils.getValues)(value.params, diffObj);
          } else if ((typeof yesterday === 'undefined' ? 'undefined' : _typeof(yesterday)) == 'object') {
            key = yesterday.key;
            values = (0, _utils.getValues)(yesterday.params, diffObj);
          } else if (typeof yesterday == 'string') {
            text = toDateObj.format(yesterday);
          }
        } else if ((0, _utils.isToday)(toDateObj, fromDateObj)) {
          if (typeof today == 'function') {
            var value = today(diffObj1);
            key = value.key;
            values = (0, _utils.getValues)(value.params, diffObj);
          } else if ((typeof today === 'undefined' ? 'undefined' : _typeof(today)) == 'object') {
            key = today.key;
            values = (0, _utils.getValues)(today.params, diffObj);
            isSuffixEnable = true;
          } else if (typeof today == 'string') {
            text = toDateObj.format(today);
          }
        } else if ((0, _utils.isTomorrow)(toDateObj, fromDateObj)) {
          if (typeof tomorrow == 'function') {
            var value = tomorrow(diffObj1);
            key = value.key;
            text = (0, _utils.getValues)(value.params, diffObj);
          } else if ((typeof tomorrow === 'undefined' ? 'undefined' : _typeof(tomorrow)) == 'object') {
            key = tomorrow.key;
            values = (0, _utils.getValues)(tomorrow.params, diffObj);
          } else if (typeof tomorrow == 'string') {
            text = toDateObj.format(tomorrow);
          }
        } else {
          var value = others(diffObj1);
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
            key = value.key;
            values = (0, _utils.getValues)(value.params, diffObj);
            isSuffixEnable = true;
          } else if (typeof value == 'string') {
            text = toDateObj.format(value);
          }
        }
      }
      return text ? _react2.default.createElement(
        'span',
        { className: className, 'data-title': title },
        text
      ) : _react2.default.createElement(_FormatText2.default, {
        i18NKey: isSuffixEnable && suffix != '' ? key + '.' + suffix : key,
        values: values,
        className: className,
        'data-title': title
      });
    }
  }]);

  return DateTimeDiffFormat;
}(_react2.default.Component);

exports.default = DateTimeDiffFormat;

DateTimeDiffFormat.propTypes = {
  from: _propTypes2.default.string,
  fromTimeZone: _propTypes2.default.string,
  to: _propTypes2.default.string,
  toTimeZone: _propTypes2.default.string,
  ago: _propTypes2.default.string,
  later: _propTypes2.default.string,
  format: _propTypes2.default.func,
  tommorrow: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func]),
  yesterday: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func]),
  today: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func]),
  others: _propTypes2.default.func,
  title: _propTypes2.default.string
};