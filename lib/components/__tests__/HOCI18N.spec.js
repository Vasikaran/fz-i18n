'use strict';

var _HOCI18N = require('..//HOCI18N');

var _HOCI18N2 = _interopRequireDefault(_HOCI18N);

var _I18NProvider = require('../I18NProvider');

var _I18NProvider2 = _interopRequireDefault(_I18NProvider);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Test = function Test(props) {
  return _react2.default.createElement(
    'div',
    null,
    'test',
    props.placeHolder
  );
};

var defaultProps = {
  i18NKey: "key1<b>vimal</b>"
};

describe('I18N component', function () {

  it("Should display i18n value", function () {
    Test = (0, _HOCI18N2.default)(["placeHolder"])(Test);
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { key1: "vimal1" } },
      _react2.default.createElement(Test, { placeHolder: 'key1' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display i18n key", function () {
    Test = (0, _HOCI18N2.default)(["placeHolder"])(Test);
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(Test, { placeHolder: 'key1' }));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});