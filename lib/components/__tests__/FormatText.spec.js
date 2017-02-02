'use strict';

var _FormatText = require('../FormatText');

var _FormatText2 = _interopRequireDefault(_FormatText);

var _I18NProvider = require('../I18NProvider');

var _I18NProvider2 = _interopRequireDefault(_I18NProvider);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FormatText component', function () {
  it("Should display i18n value as html", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { key1: "vimal1<b>vimal</b>" } },
      _react2.default.createElement(_FormatText2.default, { i18NKey: 'key1', isHtml: true })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display i18n value", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { key1: "vimal1<b>vimal</b>" } },
      _react2.default.createElement(_FormatText2.default, { i18NKey: 'key1' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});