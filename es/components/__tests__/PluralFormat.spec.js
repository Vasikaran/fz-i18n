import PluralFormat from '../PluralFormat';
import I18NProvider from '../I18NProvider';
import FormatText from '../FormatText';
import React from 'react';
import renderer from 'react-test-renderer';

describe('PluralFormat component', function () {
  it("Should display i18n value as html", function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { key1: "vimal1<b>vimal</b>" } },
      React.createElement(FormatText, { i18NKey: 'key1', isHtml: true })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display i18n value", function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { key1: "vimal1<b>vimal</b>" } },
      React.createElement(FormatText, { i18NKey: 'key1' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});