import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import FormatText from './FormatText';

var PluralFormat = function (_React$Component) {
  _inherits(PluralFormat, _React$Component);

  function PluralFormat() {
    _classCallCheck(this, PluralFormat);

    return _possibleConstructorReturn(this, (PluralFormat.__proto__ || _Object$getPrototypeOf(PluralFormat)).apply(this, arguments));
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

      return React.createElement(FormatText, _extends({}, this.props, {
        i18NKey: key,
        values: values,
        one: null,
        many: null,
        zero: null
      }));
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