'use strict';

var _UserTimeDiffFormat = require('../UserTimeDiffFormat');

var _UserTimeDiffFormat2 = _interopRequireDefault(_UserTimeDiffFormat);

var _I18NProvider = require('../I18NProvider');

var _I18NProvider2 = _interopRequireDefault(_I18NProvider);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var temp = Date;
describe('UserTimeDiffFormat component', function () {
  beforeAll(function () {
    Date = function Date(a) {
      if (a) {
        return new temp(a);
      }
      return new temp("2016-10-25T05:55:28.000Z");
    };
    Date.UTC = temp.UTC;
  });
  afterAll(function () {
    Date = temp;
  });
  it("Should display today key - user", function () {

    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: "today", yesterday: "yesterday" }, timeZone: 'Asia/Kolkata' },
      _react2.default.createElement(_UserTimeDiffFormat2.default, { to: '2016-10-25T05:55:28.000Z',
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
  it("Should display today later - user", function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: "today", yesterday: "yesterday", "today.later": "{0}:{1}:{2} later" }, timeZone: 'Asia/Kolkata' },
      _react2.default.createElement(_UserTimeDiffFormat2.default, { to: '2016-10-25T05:55:29.000Z',
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
  it("Should display today ago - user", function () {
    Date = function Date(a) {
      if (a) {
        return new temp(a);
      }
      return new temp("2016-10-25T05:55:28.000Z");
    };
    Date.UTC = temp.UTC;
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: "today", yesterday: "yesterday", "today.later": "{0}:{1}:{2} later", "today.ago": "{0}:{1}:{2} ago" }, timeZone: 'Asia/Kolkata' },
      _react2.default.createElement(_UserTimeDiffFormat2.default, { to: '2016-10-25T05:55:27.000Z',
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