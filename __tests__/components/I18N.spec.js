import I18N from '../../src/components/I18N';
import I18NProvider from '../../src/components/I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';

const defaultProps ={
	i18NKey:"key1"
} 
describe('I18N component', () => {
  it("Should display i18n value", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{key1:"vimal1"}}>
      <I18N {...defaultProps}/>
    </I18NProvider>
  );
    var tree=ele.toJSON();
    expect(tree).toMatchSnapshot();
  	
  })
 
})