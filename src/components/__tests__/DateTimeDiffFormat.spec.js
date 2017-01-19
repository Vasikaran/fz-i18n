import DateTimeDiffFormat from '../DateTimeDiffFormat';
import I18NProvider from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';

describe('DateTimeDiffFormat component', () => {
  it("Should display today key", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{today:"today",yesterday:"yesterday"}}>
      <DateTimeDiffFormat from="2016-10-25T05:55:28.000Z" fromTimeZone="Asia/Kolkata" to="2016-10-25T05:55:28.000Z" toTimeZone="Asia/Kolkata" 
        today={{key:"today",params:["hh","mm","ss"]}}
        yesterday={{key:"yesterday",params:["hh","mm","ss"]}}
        tomorrow={{key:"tomorrow",params:["hh","mm","ss"]}}
        others={({years, days, hours, minutes})=>{
          if( days > 7){
            return "DD-MM-YYYY"
          }else{
            return getDateKeyWithParam(years, days, hours, minutes)
          }
        }}
        ago="ago"
        later="later"
        />
    </I18NProvider>
  );
    var tree=ele.toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("Should display today later", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{today:"today",yesterday:"yesterday","today.later":"{0}:{1}:{2} later"}}>
      <DateTimeDiffFormat from="2016-10-25T05:55:28.000Z" fromTimeZone="Asia/Kolkata" to="2016-10-25T05:55:29.000Z" toTimeZone="Asia/Kolkata" 
        today={{key:"today",params:["hh","mm","ss"]}}
        yesterday={{key:"yesterday",params:["hh","mm","ss"]}}
        tomorrow={{key:"tomorrow",params:["hh","mm","ss"]}}
        others={({years, days, hours, minutes})=>{
          if( days > 7){
            return "DD-MM-YYYY"
          }else{
            return getDateKeyWithParam(years, days, hours, minutes)
          }
        }}
        ago="ago"
        later="later"
        />
    </I18NProvider>
  );
    var tree=ele.toJSON();
    expect(tree).toMatchSnapshot();
  })
   it("Should display today ago", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{today:"today",yesterday:"yesterday","today.later":"{0}:{1}:{2} later","today.ago":"{0}:{1}:{2} ago"}}>
      <DateTimeDiffFormat from="2016-10-25T05:55:30.000Z" fromTimeZone="Asia/Kolkata" to="2016-10-25T05:55:29.000Z" toTimeZone="Asia/Kolkata" 
        today={{key:"today",params:["hh","mm","ss"]}}
        yesterday={{key:"yesterday",params:["hh","mm","ss"]}}
        tomorrow={{key:"tomorrow",params:["hh","mm","ss"]}}
        others={({years, days, hours, minutes})=>{
          if( days > 7){
            return "DD-MM-YYYY"
          }else{
            return getDateKeyWithParam(years, days, hours, minutes)
          }
        }}
        ago="ago"
        later="later"
        />
    </I18NProvider>
  );
    var tree=ele.toJSON();
    expect(tree).toMatchSnapshot();
  })
 
})