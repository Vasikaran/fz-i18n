var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PropTypes, Children } from 'react';
import { replaceI18NValuesWithRegex, unescapeUnicode } from '../utils';

var I18N = function (_React$Component) {
	_inherits(I18N, _React$Component);

	function I18N(props) {
		_classCallCheck(this, I18N);

		var _this = _possibleConstructorReturn(this, (I18N.__proto__ || Object.getPrototypeOf(I18N)).call(this, props));

		_this.getI18NValue = _this.getI18NValue.bind(_this);
		_this.createElement = _this.createElement.bind(_this);
		return _this;
	}

	_createClass(I18N, [{
		key: 'getI18NValue',
		value: function getI18NValue() {
			var _props = this.props,
			    key = _props.i18NKey,
			    values = _props.values;
			var i18n = this.context.i18n;

			if (typeof i18n === "undefined") {
				return key;
			}
			var i18nStr = i18n[key];
			if (i18nStr === undefined) {
				return key;
			}
			i18nStr = replaceI18NValuesWithRegex(i18nStr, values);
			return unescapeUnicode(i18nStr);
		}
	}, {
		key: 'createElement',
		value: function createElement() {
			var _this2 = this;

			var props = Object.keys(this.props).reduce(function (result, nextKey) {
				if (nextKey != "i18NKey" && nextKey != "tag" && nextKey != "values" && nextKey != "isHtml") result[nextKey] = _this2.props[nextKey];
				return result;
			}, {});
			//const child=this.getI18NValue();
			if (this.props.isHtml) {
				var dangerouslySetInnerHTML = {
					__html: this.getI18NValue()
				};

				return React.createElement(this.props.tag, Object.assign(props, { dangerouslySetInnerHTML: dangerouslySetInnerHTML }));
			} else {
				return React.createElement(this.props.tag, props, this.getI18NValue());
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return this.createElement();
		}
	}]);

	return I18N;
}(React.Component);

export default I18N;

I18N.propTypes = {
	i18NKey: PropTypes.string.isRequired,
	values: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	tag: PropTypes.string,
	isHtml: PropTypes.bool
};
I18N.defaultProps = {
	tag: "span",
	isHtml: false
};
I18N.contextTypes = {
	i18n: PropTypes.object
};