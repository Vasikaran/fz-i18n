import I18NProvider,{i18nUtils} from '../../src/components/I18NProvider';
import I18N from '../../src/components/I18N';
import React from 'react';
import renderer from 'react-test-renderer';

describe('I18NProvider component', () => {
  it("Should display i18n value using i18n utils function without I18NProvider", ()=> { 
    expect(i18nUtils.getI18NValue("key1")).toBe("key1");
  })

  it("Should display i18n value", ()=> { 
    var ele=renderer.create(
      <I18NProvider i18n={{key1:"vimal"}} timeZone="Asia/Calcutta">
        <I18N i18NKey="key1"/>
      </I18NProvider>
    );
    var tree=ele.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it("Should display key not available case", ()=> { 
    var ele=renderer.create(
      <I18NProvider i18n={{key1:"vimal"}} timeZone="Asia/Calcutta">
        <I18N i18NKey="key2"/>
      </I18NProvider>
    );
    var tree=ele.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it("Should display i18n value using i18n utils function", ()=> { 
     var ele=renderer.create(
      <I18NProvider i18n={{key1:"vimal"}}>
        <div>test</div>
      </I18NProvider>
    );
    expect(i18nUtils.getI18NValue("key1")).toBe("vimal");
  })

  it("Should display user date format using i18n utils function", ()=> { 
    var ele=renderer.create(
      <I18NProvider i18n={{key1:"vimal"}} timeZone="Asia/Calcutta">
        <div>test</div>
      </I18NProvider>
    );
    expect(i18nUtils.userDateFormat("2016-12-27T08:36:03.837Z",{
    	today:"DD-MM-YYYY[today]",
    	tomorrow:"DD-MM-YYYY[tomorrow]",
    	yesterday:"DD-MM-YYYY-[yesterday]",
    	others:()=>"DD-MM-YYYY-[others]",
    },
    "","",true
    )).toBe("27-12-2016-others ");
    
  })
 
})
