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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimeDiffFormat = function (_React$Component) {
    _inherits(DateTimeDiffFormat, _React$Component);

    function DateTimeDiffFormat(props) {
        _classCallCheck(this, DateTimeDiffFormat);

        var _this = _possibleConstructorReturn(this, (DateTimeDiffFormat.__proto__ || Object.getPrototypeOf(DateTimeDiffFormat)).call(this, props));

        _this.getValues = _this.getValues.bind(_this);
        _this.getSuffix = _this.getSuffix.bind(_this);
        return _this;
    }

    _createClass(DateTimeDiffFormat, [{
        key: 'getSuffix',
        value: function getSuffix(fromDateObj, toDateObj) {
            var suffix = void 0;
            if (toDateObj.isBefore(fromDateObj)) {
                suffix = this.props.later || '';
            } else if (toDateObj.isAfter(fromDateObj)) {
                suffix = this.props.ago || '';
            } else {
                suffix = '';
            }
            return suffix;
        }
    }, {
        key: 'getValues',
        value: function getValues() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var diff = arguments[1];

            return params.map(function (param) {
                return diff[param];
            });
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
                others = _props.others;

            var fromDateObj = (0, _momentTimezone2.default)(from).tz(fromTimeZone);
            var toDateObj = (0, _momentTimezone2.default)(to).tz(toTimeZone);
            var suffix = this.getSuffix(fromDateObj, toDateObj);
            var diff = _momentTimezone2.default.duration(Math.abs(toDateObj.diff(fromDateObj)));
            var diffObj = {
                hh: pad(diff.get('h'), 2),
                mm: pad(diff.get('m'), 2),
                ss: pad(diff.get('s'), 2),
                MM: pad(diff.get('M'), 2),
                yy: pad(diff.get('y'), 2),
                dd: pad(diff.get('d'), 2)
            };
            var diffObj1 = {
                hours: diff.get('h'),
                minutes: diff.get('m'),
                seconds: diff.get('s'),
                Months: diff.get('M'),
                years: diff.get('y'),
                days: diff.get('d')
            };
            var daysDiff = toDateObj.diff(fromDateObj, 'days');

            var key = "";
            var values = [];
            var isSuffixEnable = false;
            if (daysDiff < -1) {
                var value = others(diffObj1);
                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                    key = value.key;
                    values = this.getValues(value.params, diffObj);
                    isSuffixEnable = true;
                } else if (typeof value == 'string') {
                    key = toDateObj.format(value);
                }
            } else if (daysDiff < 0) {
                if ((typeof yesterday === 'undefined' ? 'undefined' : _typeof(yesterday)) == 'object') {
                    key = yesterday.key;
                    values = this.getValues(yesterday.params, diffObj);
                } else if (typeof yesterday == 'string') {
                    key = toDateObj.format(yesterday);
                }
            } else if (daysDiff < 1) {
                if ((typeof today === 'undefined' ? 'undefined' : _typeof(today)) == 'object') {
                    key = today.key;
                    values = this.getValues(today.params, diffObj);
                    isSuffixEnable = true;
                } else if (typeof today == 'string') {
                    key = toDateObj.format(today);
                }
            } else if (daysDiff < 2) {
                key = tomorrow.key;
                values = this.getValues(tomorrow.params, diffObj);
            } else {
                var value = others(diffObj1);
                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                    key = value.key;
                    values = this.getValues(value.params, diffObj);
                    isSuffixEnable = true;
                } else if (typeof value == 'string') {
                    key = toDateObj.format(value);
                }
            }

            return _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(FormatText, { i18NKey: key, values: values }),
                ' ',
                isSuffixEnable && _react2.default.createElement(FormatText, { i18NKey: suffix })
            );
        }
    }]);

    return DateTimeDiffFormat;
}(_react2.default.Component);

exports.default = DateTimeDiffFormat;