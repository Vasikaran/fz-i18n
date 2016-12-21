import React,{PropTypes, Children} from 'react';
import moment from "moment-timezone";

export default class DateTimeDiffFormat extends React.Component{
    constructor(props){
        super(props)
        this.getValues = this.getValues.bind(this);
        this.getSuffix = this.getSuffix.bind(this);
    }
    getSuffix(fromDateObj, toDateObj){
        let suffix;
        if(toDateObj.isBefore(fromDateObj)){
            suffix=this.props.later || ''
        }else if(toDateObj.isAfter(fromDateObj)){
            suffix=this.props.ago || ''
        }else{
            suffix=''
        }
        return suffix;
    }
    getValues(params=[],diff){
        return params.map((param)=>{
            return diff[param];
        })
    }
    render(){
        const { from, fromTimeZone, to, toTimeZone,today,yesterday,tomorrow,others } = this.props;
        let fromDateObj = moment(from).tz(fromTimeZone);
        let toDateObj = moment(to).tz(toTimeZone);
        let suffix = this.getSuffix(fromDateObj,toDateObj);
        let diff = moment.duration(Math.abs(toDateObj.diff(fromDateObj)));
        var diffObj = {
            hh:pad(diff.get('h'),2),
            mm:pad(diff.get('m'),2),
            ss:pad(diff.get('s'),2),
            MM:pad(diff.get('M'),2),
            yy:pad(diff.get('y'),2),
            dd:pad(diff.get('d'),2),
        }
        var diffObj1 = {
            hours:diff.get('h'),
            minutes:diff.get('m'),
            seconds:diff.get('s'),
            Months:diff.get('M'),
            years:diff.get('y'),
            days:diff.get('d'),
        }
        var daysDiff = toDateObj.diff(fromDateObj, 'days');

        var key="";
        var values=[];
        var isSuffixEnable=false;
        if(daysDiff < -1){
            var value = others(diffObj1)
            if(typeof value == 'object'){
                key=value.key;
                values=this.getValues(value.params,diffObj);
                isSuffixEnable=true;
            }else if(typeof value == 'string'){
                key=toDateObj.format(value);
            }

        }else if(daysDiff < 0){
            if(typeof yesterday == 'object'){
                key=yesterday.key;
                values=this.getValues(yesterday.params,diffObj);
            }else if(typeof yesterday == 'string'){
                key=toDateObj.format(yesterday);
            }

        }else if(daysDiff < 1){
            if(typeof today == 'object'){
                key=today.key;
                values=this.getValues(today.params,diffObj);
                isSuffixEnable=true;
            }else if(typeof today == 'string'){
                key=toDateObj.format(today);
            }
            
        }else if(daysDiff < 2){
            key=tomorrow.key;
            values=this.getValues(tomorrow.params,diffObj);
        } else {
            var value = others(diffObj1)
            if(typeof value == 'object'){
                key=value.key;
                values=this.getValues(value.params,diffObj);
                isSuffixEnable=true;
            }else if(typeof value == 'string'){
                key=toDateObj.format(value);
            }

        } 
       
        return <span>
            <FormatText i18NKey={key} values={values}/>{' '} 
            {isSuffixEnable && <FormatText i18NKey={suffix}/>}
         </span>
    }
}