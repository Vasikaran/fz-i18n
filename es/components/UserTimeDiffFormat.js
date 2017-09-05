import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PropTypes, Component } from 'react';
import DateTimeDiffFormat from './DateTimeDiffFormat';

var UserTimeDiffFormat = function (_Component) {
	_inherits(UserTimeDiffFormat, _Component);

	function UserTimeDiffFormat() {
		_classCallCheck(this, UserTimeDiffFormat);

		return _possibleConstructorReturn(this, (UserTimeDiffFormat.__proto__ || _Object$getPrototypeOf(UserTimeDiffFormat)).apply(this, arguments));
	}

	_createClass(UserTimeDiffFormat, [{
		key: 'render',
		value: function render() {
			var currentTime = new Date();
			var currentTimeUTCString = currentTime.toUTCString();
			var timeZoneString = this.context.timeZone;
			var _props = this.props,
			    to = _props.to,
			    today = _props.today,
			    yesterday = _props.yesterday,
			    tomorrow = _props.tomorrow,
			    others = _props.others,
			    ago = _props.ago,
			    later = _props.later,
			    format = _props.format;

			return React.createElement(DateTimeDiffFormat, { from: currentTimeUTCString, fromTimeZone: timeZoneString, to: to,
				toTimeZone: timeZoneString, today: today, yesterday: yesterday, tomorrow: tomorrow,
				others: others, ago: ago, later: later, format: format });
		}
	}]);

	return UserTimeDiffFormat;
}(Component);

export default UserTimeDiffFormat;

UserTimeDiffFormat.contextTypes = {
	timeZone: PropTypes.string
};