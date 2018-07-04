import React, { PropTypes, Component } from 'react';
import DateTimeDiffFormat from './DateTimeDiffFormat';

export default class UserTimeDiffFormat extends Component {
  render() {
    var currentTime = new Date();
    var currentTimeUTCString = currentTime.toISOString();
    var timeZoneString = this.context.timeZone;

    var {
      to,
      today,
      yesterday,
      tomorrow,
      others,
      ago,
      later,
      format,
      title,
      className
    } = this.props;
    return (
      <DateTimeDiffFormat
        from={currentTimeUTCString}
        fromTimeZone={timeZoneString}
        to={to}
        toTimeZone={timeZoneString}
        today={today}
        yesterday={yesterday}
        tomorrow={tomorrow}
        others={others}
        ago={ago}
        later={later}
        format={format}
        title={title}
        className={className}
      />
    );
  }
}
UserTimeDiffFormat.contextTypes = {
  timeZone: PropTypes.string
};
