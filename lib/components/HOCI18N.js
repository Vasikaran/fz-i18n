'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function () {
	var i18NKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return function (Component) {
		var HOCI18N = function (_React$Component) {
			_inherits(HOCI18N, _React$Component);

			function HOCI18N(props) {
				_classCallCheck(this, HOCI18N);

				var _this = _possibleConstructorReturn(this, (HOCI18N.__proto__ || Object.getPrototypeOf(HOCI18N)).call(this, props));

				_this.getI18NValue = _this.getI18NValue.bind(_this);
				return _this;
			}

			_createClass(HOCI18N, [{
				key: 'getI18NValue',
				value: function getI18NValue(key) {
					var i18n = this.context.i18n;

					if (typeof i18n === "undefined") {
						return key;
					}
					var i18nStr = i18n[key];
					if (i18nStr === undefined) {
						return key;
					}
					return (0, _utils.unescapeUnicode)(i18nStr);
				}
			}, {
				key: 'render',
				value: function render() {
					var _this2 = this;

					var i18nProps = i18NKeys.reduce(function (result, key) {
						if (_this2.props[key]) {
							result[key] = _this2.getI18NValue(_this2.props[key]);
						}
						return result;
					}, {});
					return _react2.default.createElement(Component, _extends({}, this.props, i18nProps));
				}
			}]);

			return HOCI18N;
		}(_react2.default.Component);

		HOCI18N.contextTypes = {
			i18n: _react.PropTypes.object
		};
		return HOCI18N;
	};
};