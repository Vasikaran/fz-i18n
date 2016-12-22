# fz-i18n
# Components
1. I18NProvider
2. ConnectI18NProvider
3. I18N
4. FormatText
5. PluralFormat
6. DateTimeDiffFormat
7. UserTimeDiffFormat

# How to use
```
   <I18NProvider i18n={{key:"value"}} timeZone="Asia/kolkatta">
      <YourApp>
      </YourApp>
   </I18NProvider>
```
 
```
   <ConnectI18NProvider i18n={(state)=>{return state.i18nObj }} timeZone={(state)=>state.user.timeZone}
   onChange=((accept,reject)=>{call accept or reject})>
      <YourApp>
      </YourApp>
   </ConnectI18NProvider>
```

```
   <FormatText i18NKey="" values={[] | ""}/>
```

```
   <PluralFormat one="i18n key for singluar" many="i18n key for plural" zero="i18n key for zero" value={1}/>
```

```
   <DateTimeDiffFormat from="2016-10-25T05:55:28.000Z" fromTimeZone="Asia/Kolkata" to="2016-10-18T05:55:29.000Z" toTimeZone="Asia/Kolkata" 
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
```

```
  <UserTimeDiffFormat to="2016-12-19T05:55:29.000Z" today={{key:"today",params:["hh","mm","ss"]}}
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
```
