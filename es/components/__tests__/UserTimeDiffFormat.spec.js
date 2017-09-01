import UserTimeDiffFormat from '../UserTimeDiffFormat';
import I18NProvider from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';
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

    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { today: "today", yesterday: "yesterday" }, timeZone: 'Asia/Kolkata' },
      React.createElement(UserTimeDiffFormat, { to: '2016-10-25T05:55:28.000Z',
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
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { today: "today", yesterday: "yesterday", "today.later": "{0}:{1}:{2} later" }, timeZone: 'Asia/Kolkata' },
      React.createElement(UserTimeDiffFormat, { to: '2016-10-25T05:55:29.000Z',
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
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { today: "today", yesterday: "yesterday", "today.later": "{0}:{1}:{2} later", "today.ago": "{0}:{1}:{2} ago" }, timeZone: 'Asia/Kolkata' },
      React.createElement(UserTimeDiffFormat, { to: '2016-10-25T05:55:27.000Z',
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