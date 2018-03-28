'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormatText = require('./FormatText');

var _FormatText2 = _interopRequireDefault(_FormatText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluralFormat = function (_React$Component) {
  _inherits(PluralFormat, _React$Component);

  function PluralFormat() {
    _classCallCheck(this, PluralFormat);

    return _possibleConstructorReturn(this, (PluralFormat.__proto__ || Object.getPrototypeOf(PluralFormat)).apply(this, arguments));
  }

  _createClass(PluralFormat, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          one = _props.one,
          many = _props.many,
          zero = _props.zero,
          value = _props.value;

      var key = '',
          values = '';
      if (value > 1) {
        key = many;
      } else if (value == 1) {
        key = one;
      } else if (value == 0) {
        key = zero;
      }
      values = '' + value;

      return _react2.default.createElement(_FormatText2.default, _extends({}, this.props, {
        i18NKey: key,
        values: values,
        one: null,
        many: null,
        zero: null
      }));
    }
  }]);

  return PluralFormat;
}(_react2.default.Component);

exports.default = PluralFormat;

PluralFormat.propTypes = {
  one: _propTypes2.default.string,
  many: _propTypes2.default.string,
  zero: _propTypes2.default.string,
  value: _propTypes2.default.number,
  tag: _propTypes2.default.string
};