var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PropTypes, Component } from 'react';
import DateTimeDiffFormat from './DateTimeDiffFormat';

var UserTimeDiffFormat = function (_Component) {
	_inherits(UserTimeDiffFormat, _Component);

	function UserTimeDiffFormat() {
		_classCallCheck(this, UserTimeDiffFormat);

		return _possibleConstructorReturn(this, (UserTimeDiffFormat.__proto__ || Object.getPrototypeOf(UserTimeDiffFormat)).apply(this, arguments));
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