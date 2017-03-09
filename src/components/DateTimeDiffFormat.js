import React,{PropTypes, Children} from 'react';
import moment from "moment-timezone";
import { pad, getSuffix, getValues  } from '../utils';
import FormatText from './FormatText';

export default class DateTimeDiffFormat extends React.Component{
    constructor(props){
        super(props);
        this.getSuffix = this.getSuffix.bind(this)
    }
    getSuffix(fromDateObj, toDateObj){
        let suffix;
        if(toDateObj.isBefore(fromDateObj)){
            suffix=this.props.ago || ''
        }else if(toDateObj.isAfter(fromDateObj)){
            suffix=this.props.later || ''
        }else{
            suffix=''
        }
        return suffix;
    }
    render(){
        const { from, fromTimeZone, to, toTimeZone,today,yesterday,tomorrow,others, format } = this.props;
        let fromDateObj = moment(from).tz(fromTimeZone);
        let toDateObj = moment(to).tz(toTimeZone);
        let suffix = this.getSuffix(fromDateObj,toDateObj);
        let diff = moment.duration(Math.abs(toDateObj.diff(fromDateObj)));
        var days;
        if(toDateObj.isBefore(fromDateObj)){
            var tempTo=moment(to).tz(toTimeZone).add(diff.get('y'),'years');
            days=Math.abs(tempTo.diff(fromDateObj,'days'));
        }else{
            var tempFrom=moment(fromDateObj).tz(fromTimeZone).add(diff.get('y'),'years');
            days=toDateObj.diff(tempFrom,'days');
        }
        
        var diffObj = {
            h:diff.get('h'),
            m:diff.get('m'),
            s:diff.get('s'),
            M:diff.get('M'),
            y:diff.get('y'),
            d:diff.get('d'),
            hh:pad(diff.get('h'),2),
            mm:pad(diff.get('m'),2),
            ss:pad(diff.get('s'),2),
            MM:pad(diff.get('M'),2),
            yy:pad(diff.get('y'),2),
            dd:pad(diff.get('d'),2),
            days:days
        }
        var diffObj1 = {
            hours:diff.get('h'),
            minutes:diff.get('m'),
            seconds:diff.get('s'),
            months:diff.get('M'),
            years:diff.get('y'),
            days:diff.get('d'),
        }
        var daysDiff = toDateObj.diff(fromDateObj, 'days');
        var key="";
        var values=[];
        var text=null;
        var isSuffixEnable=false;
        if(format){
            let years,months,days,hours,minutes,seconds;
            years = (diffObj1.years > 1) ? "2" : diffObj1.years;
            months = (diffObj1.months > 1) ? "2" : diffObj1.months;
            days = (diffObj1.days > 1) ? "2" : diffObj1.days;
            hours = (diffObj1.hours > 1) ? "2" : diffObj1.hours;
            minutes = (diffObj1.minutes > 1) ? "2" : diffObj1.minutes;
            seconds = (diffObj1.seconds > 1) ? "2" : diffObj1.seconds;
            let pattern=""+years+months+days+hours+minutes+seconds
            let value = format(diffObj1,pattern);
            if(value && typeof value == 'object'){
                key=value.key;
                values=getValues(value.params,diffObj);
                if(pattern.indexOf("00000")==0){//suffix ignore for second hook
                    isSuffixEnable=false;    
                }
                else{
                    isSuffixEnable=true;
                }   
            }else if(typeof value == 'string'){
                text=toDateObj.format(value);
            }
        }
        else{
        if(daysDiff < -1){
            var value = others(diffObj1)
            if(typeof value == 'object'){
                key=value.key;
                values=getValues(value.params,diffObj);
                isSuffixEnable=true;
            }else if(typeof value == 'string'){
                text=toDateObj.format(value);
            }

        }else if(daysDiff < 0){
            if(typeof yesterday == 'function'){
                var value=yesterday(diffObj1);
                key=value.key;
                values=getValues(value.params,diffObj);
            }
            else if(typeof yesterday == 'object'){
                key=yesterday.key;
                values=getValues(yesterday.params,diffObj);
            }else if(typeof yesterday == 'string'){
                text=toDateObj.format(yesterday);
            }

        }else if(daysDiff < 1){
            if(typeof today == 'function'){
                var value=today(diffObj1);
                key=value.key;
                values=getValues(value.params,diffObj);
            }
            else if(typeof today == 'object'){
                key=today.key;
                values=getValues(today.params,diffObj);
                isSuffixEnable=true;
            }else if(typeof today == 'string'){
                text=toDateObj.format(today);
            }
            
        }else if(daysDiff < 2){
            if(typeof tomorrow == 'function'){
                var value=tomorrow(diffObj1);
                key=value.key;
                text=getValues(value.params,diffObj);
            }
            else if(typeof tomorrow == 'object'){
                key=tomorrow.key;
                values=getValues(tomorrow.params,diffObj);
            }
            else if(typeof tomorrow == 'string'){
                text=toDateObj.format(tomorrow);
            }
            
        } else {
            var value = others(diffObj1)
            if(typeof value == 'object'){
                key=value.key;
                values=getValues(value.params,diffObj);
                isSuffixEnable=true;
            }else if(typeof value == 'string'){
                text=toDateObj.format(value);
            }

        } 
       }
        return text? <span>{text}</span>:<FormatText i18NKey={ isSuffixEnable && suffix!=''? (key+"."+suffix):key} values={values}/>
    }
}
DateTimeDiffFormat.propTypes = {
    from:PropTypes.string,
    fromTimeZone:PropTypes.string,
    to:PropTypes.string,
    toTimeZone:PropTypes.string,
    ago:PropTypes.string,
    later:PropTypes.string,  
    format:PropTypes.func,
    tommorrow:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func
        ]),
    yesterday:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func
        ]),
    today:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func
        ]),
    others:PropTypes.func
}



/*1. Currently our client development is coupled with client(js) and server(jsp) code.
2. There is one build setup for server and client(ant). So server knows client build version. If we separate client and server build, we have to maintain and update client build version.   

In react, client development separated completely from server. So client and server code move into two repos. client build version maintain in redis. Server refer client build version from redis. (redis not persistence have to move db) 

*/

