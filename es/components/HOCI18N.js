import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { replaceI18NValuesWithRegex, unescapeUnicode } from '../utils';
export default (function () {
  var i18NKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function (Component) {
    var HOCI18N = function (_React$Component) {
      _inherits(HOCI18N, _React$Component);

      function HOCI18N(props) {
        _classCallCheck(this, HOCI18N);

        var _this = _possibleConstructorReturn(this, (HOCI18N.__proto__ || _Object$getPrototypeOf(HOCI18N)).call(this, props));

        _this.getI18NValue = _this.getI18NValue.bind(_this);
        return _this;
      }

      _createClass(HOCI18N, [{
        key: 'getI18NValue',
        value: function getI18NValue(key) {
          var i18n = this.context.i18n;

          if (typeof i18n === 'undefined') {
            return key;
          }
          var i18nStr = i18n[key];
          if (i18nStr === undefined) {
            return key;
          }
          return unescapeUnicode(i18nStr);
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
          return React.createElement(Component, _extends({}, this.props, i18nProps));
        }
      }]);

      return HOCI18N;
    }(React.Component);

    HOCI18N.contextTypes = {
      i18n: PropTypes.object
    };
    return HOCI18N;
  };
});