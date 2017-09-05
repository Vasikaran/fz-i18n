import _extends from 'babel-runtime/helpers/extends';
import I18N from '../I18N';
import I18NProvider from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';

var defaultProps = {
  i18NKey: "key1"
};
describe('I18N component', function () {
  it("Should display i18n value as html", function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { key1: "vimal1<b>vimal</b>" } },
      React.createElement(I18N, _extends({}, defaultProps, { isHtml: true }))
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display i18n value", function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { key1: "vimal1<b>vimal</b>" } },
      React.createElement(I18N, defaultProps)
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});