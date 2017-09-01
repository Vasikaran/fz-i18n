var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PropTypes } from 'react';
import FormatText from './FormatText';

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

			var key = "",
			    values = "";
			if (value > 1) {
				key = many;
			} else if (value == 1) {
				key = one;
			} else if (value == 0) {
				key = zero;
			}
			values = "" + value;

			return React.createElement(FormatText, _extends({}, this.props, { i18NKey: key, values: values, one: null, many: null, zero: null }));
		}
	}]);

	return PluralFormat;
}(React.Component);

export default PluralFormat;

PluralFormat.propTypes = {
	one: PropTypes.string,
	many: PropTypes.string,
	zero: PropTypes.string,
	value: PropTypes.number,
	tag: PropTypes.string
};