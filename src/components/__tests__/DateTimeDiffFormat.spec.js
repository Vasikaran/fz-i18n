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
  it("Should display today1", ()=> { 
    var toDates=[
      "2016-10-24T05:55:28.000Z",
      "2016-10-24T03:55:28.000Z",
      "2016-10-23T08:55:28.000Z",
      "2016-10-23T08:55:27.000Z",
      "2016-10-25T05:55:28.000Z",
      "2016-10-25T05:55:27.000Z",
      "2016-10-25T05:55:29.000Z",
      "2016-10-25T05:54:28.000Z",
      "2016-10-25T05:53:28.000Z",
    ]
   var ele=renderer.create(
    <I18NProvider i18n={{today:"today",yesterday:"yesterday",now:"noooow",
    "support.1day.ago":"1day ago","support.1day.nhours.ago":"one day {0} hours ago",
    "support.1min.ago":"1min ago","support.nmins.ago":"{0} mins ago"
  }}><div>
      {
      toDates.map((to)=>{
        return <DateTimeDiffFormat from="2016-10-25T05:55:28.000Z" fromTimeZone="Asia/Kolkata" to={to} toTimeZone="Asia/Kolkata" 
        format={({years,days,months,hours},pattern)=>{
          
          switch(pattern)
           {
            case "000000":
            case "000001":
            case "000002":
              return {
                key:"now"
              }
            break;
            case "000010":
              return {
                key:"support.1min"
              }
            break;
            case "000020":
              return {
                key:"support.nmins",
                params:["m"]
              }
            break;
            case "001000":
            return {
              key:"support.1day"
            }
            break;
            case "001200":
            case "001201":
            return {
              key:"support.1day.nhours",
              params:["h"]
            }
            break;
          }

        }}
        ago="ago"
        later="later"
        />  
      })
      
      }
      </div>
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
   fit("Should display years and days", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{"nyear.ndays.ago":"{0} years {1} days ago",yesterday:"yesterday"}}>
      <DateTimeDiffFormat from="2017-10-25T05:55:28.000Z" fromTimeZone="Asia/Kolkata" to="2015-08-25T05:55:28.000Z" toTimeZone="Asia/Kolkata" 
        format={({years,days,months,hours},pattern)=>{
          if(years>1)
          {
            return {
              key:"nyear.ndays",
              params:['y',"days"]
            }
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
 fit("Should display years and days1", ()=> { 
   var ele=renderer.create(
    <I18NProvider i18n={{"nyear.ndays.later":"{0} years {1} days later",yesterday:"yesterday"}}>
      <DateTimeDiffFormat from="2015-08-25T05:55:28.000Z" fromTimeZone="Asia/Kolkata" to="2017-10-25T05:55:28.000Z" toTimeZone="Asia/Kolkata" 
        format={({years,days,months,hours},pattern)=>{
          if(years>1)
          {
            return {
              key:"nyear.ndays",
              params:['y',"days"]
            }
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
