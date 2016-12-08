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
     		dd:pad(diff.get('d'),2)
     	}
     	var daysDiff = toDateObj.diff(fromDateObj, 'days');
     	var dateTimeFormat;
     	if(daysDiff < -1){
     		dateTimeFormat = <span>less than one day</span>
     	}else if(daysDiff < 0){
     		dateTimeFormat = 
	     		<FormatText i18NKey={yesterday.key} values={this.getValues(yesterday.params,diffObj)}/>
     	}else if(daysDiff < 1){
     		dateTimeFormat = <span>
	     		<FormatText i18NKey={today.key} values={this.getValues(today.params,diffObj)}/>
	     		{' '}<FormatText i18NKey={suffix}/>
     		</span>
     	}else if(daysDiff < 2){
     		dateTimeFormat = <FormatText i18NKey={tomorrow.key} values={this.getValues(tomorrow.params,diffObj)}/>
     	} else {

     	} 
       
		return <span>{dateTimeFormat} </span>
	}
}