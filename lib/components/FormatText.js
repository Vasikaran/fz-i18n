'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _I18N = require('./I18N');

var _I18N2 = _interopRequireDefault(_I18N);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormatText = function (_React$Component) {
	_inherits(FormatText, _React$Component);

	function FormatText() {
		_classCallCheck(this, FormatText);

		return _possibleConstructorReturn(this, (FormatText.__proto__ || Object.getPrototypeOf(FormatText)).apply(this, arguments));
	}

	_createClass(FormatText, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_I18N2.default, this.props);
		}
	}]);

	return FormatText;
}(_react2.default.Component);

exports.default = FormatText;

FormatText.propTypes = {
	i18NKey: _react.PropTypes.string.isRequired,
	values: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array])
};