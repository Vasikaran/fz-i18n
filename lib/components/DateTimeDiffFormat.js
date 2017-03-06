'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
                format = _props.format;

            var fromDateObj = (0, _momentTimezone2.default)(from).tz(fromTimeZone);
            var toDateObj = (0, _momentTimezone2.default)(to).tz(toTimeZone);
            var suffix = this.getSuffix(fromDateObj, toDateObj);
            var diff = _momentTimezone2.default.duration(Math.abs(toDateObj.diff(fromDateObj)));
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
                dd: (0, _utils.pad)(diff.get('d'), 2)
            };
            var diffObj1 = {
                hours: diff.get('h'),
                minutes: diff.get('m'),
                seconds: diff.get('s'),
                months: diff.get('M'),
                years: diff.get('y'),
                days: diff.get('d')
            };
            var daysDiff = toDateObj.diff(fromDateObj, 'days');
            var key = "";
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
                years = diffObj1.years > 1 ? "2" : diffObj1.years;
                months = diffObj1.months > 1 ? "2" : diffObj1.months;
                days = diffObj1.days > 1 ? "2" : diffObj1.days;
                hours = diffObj1.hours > 1 ? "2" : diffObj1.hours;
                minutes = diffObj1.minutes > 1 ? "2" : diffObj1.minutes;
                seconds = diffObj1.seconds > 1 ? "2" : diffObj1.seconds;
                var pattern = "" + years + months + days + hours + minutes + seconds;
                var _value = format(diffObj1, pattern);
                if (_value && (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) == 'object') {
                    key = _value.key;
                    values = (0, _utils.getValues)(_value.params, diffObj);
                    if (pattern.indexOf("00000") == 0) {
                        //suffix ignore for second hook
                        isSuffixEnable = false;
                    } else {
                        isSuffixEnable = true;
                    }
                } else if (typeof _value == 'string') {
                    text = toDateObj.format(_value);
                }
            } else {
                if (daysDiff < -1) {
                    var value = others(diffObj1);
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                        key = value.key;
                        values = (0, _utils.getValues)(value.params, diffObj);
                        isSuffixEnable = true;
                    } else if (typeof value == 'string') {
                        text = toDateObj.format(value);
                    }
                } else if (daysDiff < 0) {
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
                } else if (daysDiff < 1) {
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
                } else if (daysDiff < 2) {
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
                null,
                text
            ) : _react2.default.createElement(_FormatText2.default, { i18NKey: isSuffixEnable && suffix != '' ? key + "." + suffix : key, values: values });
        }
    }]);

    return DateTimeDiffFormat;
}(_react2.default.Component);

exports.default = DateTimeDiffFormat;

DateTimeDiffFormat.propTypes = {
    from: _react.PropTypes.string,
    fromTimeZone: _react.PropTypes.string,
    to: _react.PropTypes.string,
    toTimeZone: _react.PropTypes.string,
    ago: _react.PropTypes.string,
    later: _react.PropTypes.string,
    format: _react.PropTypes.func,
    tommorrow: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object, _react.PropTypes.func]),
    yesterday: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object, _react.PropTypes.func]),
    today: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object, _react.PropTypes.func]),
    others: _react.PropTypes.func
};

/*1. Currently our client development is coupled with client(js) and server(jsp) code.
2. There is one build setup for server and client(ant). So server knows client build version. If we separate client and server build, we have to maintain and update client build version.   

In react, client development separated completely from server. So client and server code move into two repos. client build version maintain in redis. Server refer client build version from redis. (redis not persistence have to move db) 

*/