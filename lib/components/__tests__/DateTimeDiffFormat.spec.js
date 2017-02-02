'use strict';

var _DateTimeDiffFormat = require('../DateTimeDiffFormat');

var _DateTimeDiffFormat2 = _interopRequireDefault(_DateTimeDiffFormat);

var _I18NProvider = require('../I18NProvider');

var _I18NProvider2 = _interopRequireDefault(_I18NProvider);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DateTimeDiffFormat component', function () {
  it("Should display today key", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: "today", yesterday: "yesterday" } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, { from: '2016-10-25T05:55:28.000Z', fromTimeZone: 'Asia/Kolkata', to: '2016-10-25T05:55:28.000Z', toTimeZone: 'Asia/Kolkata',
        today: { key: "today", params: ["hh", "mm", "ss"] },
        yesterday: { key: "yesterday", params: ["hh", "mm", "ss"] },
        tomorrow: { key: "tomorrow", params: ["hh", "mm", "ss"] },
        others: function others(_ref) {
          var years = _ref.years,
              days = _ref.days,
              hours = _ref.hours,
              minutes = _ref.minutes;

          if (days > 7) {
            return "DD-MM-YYYY";
          } else {
            return getDateKeyWithParam(years, days, hours, minutes);
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Should display today later", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: "today", yesterday: "yesterday", "today.later": "{0}:{1}:{2} later" } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, { from: '2016-10-25T05:55:28.000Z', fromTimeZone: 'Asia/Kolkata', to: '2016-10-25T05:55:29.000Z', toTimeZone: 'Asia/Kolkata',
        today: { key: "today", params: ["hh", "mm", "ss"] },
        yesterday: { key: "yesterday", params: ["hh", "mm", "ss"] },
        tomorrow: { key: "tomorrow", params: ["hh", "mm", "ss"] },
        others: function others(_ref2) {
          var years = _ref2.years,
              days = _ref2.days,
              hours = _ref2.hours,
              minutes = _ref2.minutes;

          if (days > 7) {
            return "DD-MM-YYYY";
          } else {
            return getDateKeyWithParam(years, days, hours, minutes);
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Should display today ago", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: "today", yesterday: "yesterday", "today.later": "{0}:{1}:{2} later", "today.ago": "{0}:{1}:{2} ago" } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, { from: '2016-10-25T05:55:30.000Z', fromTimeZone: 'Asia/Kolkata', to: '2016-10-25T05:55:29.000Z', toTimeZone: 'Asia/Kolkata',
        today: { key: "today", params: ["hh", "mm", "ss"] },
        yesterday: { key: "yesterday", params: ["hh", "mm", "ss"] },
        tomorrow: { key: "tomorrow", params: ["hh", "mm", "ss"] },
        others: function others(_ref3) {
          var years = _ref3.years,
              days = _ref3.days,
              hours = _ref3.hours,
              minutes = _ref3.minutes;

          if (days > 7) {
            return "DD-MM-YYYY";
          } else {
            return getDateKeyWithParam(years, days, hours, minutes);
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});