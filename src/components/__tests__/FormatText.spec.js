import FormatText from '../FormatText';
import I18NProvider from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';

describe('FormatText component', () => {
  it("Should display i18n value as html", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{key1:"vimal1<b>vimal</b>"}}>
      <FormatText i18NKey="key1" isHtml={true}/>
    </I18NProvider>
  );
    var tree=ele.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it("Should display i18n value", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{key1:"vimal1<b>vimal</b>"}}>
      <FormatText i18NKey="key1" />
    </I18NProvider>
  );
    var tree=ele.toJSON();
    expect(tree).toMatchSnapshot();
  })
 
})