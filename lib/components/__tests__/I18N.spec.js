'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _I18N = require('../I18N');

var _I18N2 = _interopRequireDefault(_I18N);

var _I18NProvider = require('../I18NProvider');

var _I18NProvider2 = _interopRequireDefault(_I18NProvider);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  i18NKey: "key1"
};
describe('I18N component', function () {
  it("Should display i18n value as html", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { key1: "vimal1<b>vimal</b>" } },
      _react2.default.createElement(_I18N2.default, _extends({}, defaultProps, { isHtml: true }))
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display i18n value", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { key1: "vimal1<b>vimal</b>" } },
      _react2.default.createElement(_I18N2.default, defaultProps)
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});