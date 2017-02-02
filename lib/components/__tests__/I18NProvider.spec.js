'use strict';

var _I18NProvider = require('../I18NProvider');

var _I18NProvider2 = _interopRequireDefault(_I18NProvider);

var _I18N = require('../I18N');

var _I18N2 = _interopRequireDefault(_I18N);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('I18NProvider component', function () {
  it("Should display i18n value using i18n utils function without I18NProvider", function () {
    expect(_I18NProvider.i18NProviderUtils.getI18NValue("key1")).toBe("key1");
  });

  it("Should display i18n value", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { key1: "vimal" }, timeZone: 'Asia/Calcutta' },
      _react2.default.createElement(_I18N2.default, { i18NKey: 'key1' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display key not available case", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { key1: "vimal" }, timeZone: 'Asia/Calcutta' },
      _react2.default.createElement(_I18N2.default, { i18NKey: 'key2' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display i18n value using i18n utils function", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { key1: "vimal" } },
      _react2.default.createElement(
        'div',
        null,
        'test'
      )
    ));
    expect(_I18NProvider.i18NProviderUtils.getI18NValue("key1")).toBe("vimal");
  });

  it("Should display user date format using i18n utils function", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { key1: "vimal" }, timeZone: 'Asia/Calcutta' },
      _react2.default.createElement(
        'div',
        null,
        'test'
      )
    ));
    expect(_I18NProvider.i18NProviderUtils.userDateFormat("2016-12-27T08:36:03.837Z", {
      today: "DD-MM-YYYY[today]",
      tomorrow: "DD-MM-YYYY[tomorrow]",
      yesterday: "DD-MM-YYYY-[yesterday]",

      others: function others() {
        return "DD-MM-YYYY-[others]";
      }
    }, "", "", true)).toBe("27-12-2016-others ");
  });
});
describe('ConnectI18NProvider component', function () {
  it("Should display ConnectI18NProvider", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider.ConnectI18NProvider,
      { store: (0, _reduxMockStore2.default)()({}), i18n: function i18n(state) {
          return { key1: "vimal" };
        }, timeZone: function timeZone(state) {
          return "Asia/Calcutta";
        } },
      _react2.default.createElement(_I18N2.default, { i18NKey: 'key1' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});