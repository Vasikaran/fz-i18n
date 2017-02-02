import UserTimeDiffFormat from '../UserTimeDiffFormat';
import I18NProvider from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';
var temp=Date;
describe('UserTimeDiffFormat component', () => {
  beforeAll(()=>{
    Date=function(a){
        if (a) {
          return new temp(a);
        }
        return new temp("2016-10-25T05:55:28.000Z")
    }
    Date.UTC=temp.UTC;
  })
  afterAll(()=>{
    Date=temp;
  })
  it("Should display today key - user", ()=> { 

   var ele=renderer.create(
    <I18NProvider i18n={{today:"today",yesterday:"yesterday"}} timeZone="Asia/Kolkata">
      <UserTimeDiffFormat to="2016-10-25T05:55:28.000Z"
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
  it("Should display today later - user", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{today:"today",yesterday:"yesterday","today.later":"{0}:{1}:{2} later"}}  timeZone="Asia/Kolkata">
      <UserTimeDiffFormat to="2016-10-25T05:55:29.000Z"
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
   it("Should display today ago - user", ()=> {
    Date=function(a){
        if (a) {
          return new temp(a);
        }
        return new temp("2016-10-25T05:55:28.000Z")
    }
    Date.UTC=temp.UTC;
   var ele=renderer.create(
    <I18NProvider i18n={{today:"today",yesterday:"yesterday","today.later":"{0}:{1}:{2} later","today.ago":"{0}:{1}:{2} ago"}}  timeZone="Asia/Kolkata">
      <UserTimeDiffFormat to="2016-10-25T05:55:27.000Z" 
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