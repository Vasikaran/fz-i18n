import I18NProvider,{i18nUtils} from '../../src/components/I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';

const defaultProps ={
	i18NKey:"key1"
} 
try{
console.log("before",i18nUtils.userDateFormat("key1"))
}
catch(e){}
describe('I18NProvider component', () => {
  it.only("Should display i18n value using i18n utils function", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{key1:"vimal"}}>
      <div>test</div>
    </I18NProvider>
  );
    expect(i18nUtils.getI18NValue("key1")).toBe("vimal");
    
  })
   it.only("Should display user date format using i18n utils function", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{key1:"vimal"}} timeZone="Asia/Calcutta">
      <div>test</div>
    </I18NProvider>
  );
    expect(i18nUtils.userDateFormat("2016-12-27T08:36:03.837Z",{
    	today:"DD-MM-YYYY[today]",
    	tomorrow:"DD-MM-YYYY[tomorrow]",
    	yesterday:"DD-MM-YYYY-yesterday",
    	others:()=>"DD-MM-YYYY-others",
    },
    "ago","later",true
    )).toBe("27-12-2016today ago");
    
  })
 
})
