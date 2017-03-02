import React, { PropTypes, Component } from 'react';
import DateTimeDiffFormat from './DateTimeDiffFormat';

export default class UserTimeDiffFormat extends Component{
	render(){
		var currentTime =  new Date();
		var currentTimeUTCString = currentTime.toUTCString();
		var timeZoneString = this.context.timeZone;
		var { to,today,yesterday,tomorrow,others,ago,later, format } = this.props;
		return <DateTimeDiffFormat from={currentTimeUTCString} fromTimeZone={timeZoneString} to={to} 
		toTimeZone={timeZoneString} today={today} yesterday={yesterday} tomorrow={tomorrow} 
		others={others} ago={ago} later={later} format={format}/>
	}
}
UserTimeDiffFormat.contextTypes = {
  timeZone: PropTypes.string
}