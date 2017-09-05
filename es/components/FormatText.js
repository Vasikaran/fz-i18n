import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import I18N from './I18N';

var FormatText = function (_React$Component) {
  _inherits(FormatText, _React$Component);

  function FormatText() {
    _classCallCheck(this, FormatText);

    return _possibleConstructorReturn(this, (FormatText.__proto__ || _Object$getPrototypeOf(FormatText)).apply(this, arguments));
  }

  _createClass(FormatText, [{
    key: 'render',
    value: function render() {
      return React.createElement(I18N, this.props);
    }
  }]);

  return FormatText;
}(React.Component);

export default FormatText;

FormatText.propTypes = {
  i18NKey: PropTypes.string.isRequired,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isHtml: PropTypes.bool
};