import HOCI18N from '..//HOCI18N';
import I18NProvider from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';

var Test = function Test(props) {
  return React.createElement(
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
    Test = HOCI18N(["placeHolder"])(Test);
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { key1: "vimal1" } },
      React.createElement(Test, { placeHolder: 'key1' })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should display i18n key", function () {
    Test = HOCI18N(["placeHolder"])(Test);
    var ele = renderer.create(React.createElement(Test, { placeHolder: 'key1' }));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});