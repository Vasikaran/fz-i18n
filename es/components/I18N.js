import _Object$assign from 'babel-runtime/core-js/object/assign';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PropTypes, Children } from 'react';
import { replaceI18NValuesWithRegex, unescapeUnicode } from '../utils';

var I18N = function (_React$Component) {
	_inherits(I18N, _React$Component);

	function I18N(props) {
		_classCallCheck(this, I18N);

		var _this = _possibleConstructorReturn(this, (I18N.__proto__ || _Object$getPrototypeOf(I18N)).call(this, props));

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

			var props = _Object$keys(this.props).reduce(function (result, nextKey) {
				if (nextKey != "i18NKey" && nextKey != "tag" && nextKey != "values" && nextKey != "isHtml") result[nextKey] = _this2.props[nextKey];
				return result;
			}, {});
			//const child=this.getI18NValue();
			if (this.props.isHtml) {
				var dangerouslySetInnerHTML = {
					__html: this.getI18NValue()
				};

				return React.createElement(this.props.tag, _Object$assign(props, { dangerouslySetInnerHTML: dangerouslySetInnerHTML }));
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