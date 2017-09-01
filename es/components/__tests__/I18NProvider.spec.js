import I18NProvider, { i18NProviderUtils, ConnectI18NProvider } from '../I18NProvider';
import I18N from '../I18N';
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('I18NProvider component', function () {
  it("Should display i18n value using i18n utils function without I18NProvider", function () {
    expect(i18NProviderUtils.getI18NValue("key1")).toBe("key1");
  });

  it("Should display i18n value", function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { key1: "vimal" }, timeZone: 'Asia/Calcutta' },
      React.createElement(I18N, { i18NKey: 'key1' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display key not available case", function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { key1: "vimal" }, timeZone: 'Asia/Calcutta' },
      React.createElement(I18N, { i18NKey: 'key2' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display i18n value using i18n utils function", function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { key1: "vimal" } },
      React.createElement(
        'div',
        null,
        'test'
      )
    ));
    expect(i18NProviderUtils.getI18NValue("key1")).toBe("vimal");
  });

  it("Should display user date format using i18n utils function", function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { key1: "vimal" }, timeZone: 'Asia/Calcutta' },
      React.createElement(
        'div',
        null,
        'test'
      )
    ));
    expect(i18NProviderUtils.userDateFormat("2016-12-27T08:36:03.837Z", {
      today: "DD-MM-YYYY[today]",
      tomorrow: "DD-MM-YYYY[tomorrow]",
      yesterday: "DD-MM-YYYY-[yesterday]",

      others: function others() {
        return "DD-MM-YYYY-[others]";
      }
    }, "", "", true)).toBe("27-12-2016-others");
  });
});
describe('ConnectI18NProvider component', function () {
  it("Should display ConnectI18NProvider", function () {
    var ele = renderer.create(React.createElement(
      ConnectI18NProvider,
      { store: configureStore()({}), i18n: function i18n(state) {
          return { key1: "vimal" };
        }, timeZone: function timeZone(state) {
          return "Asia/Calcutta";
        } },
      React.createElement(I18N, { i18NKey: 'key1' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});