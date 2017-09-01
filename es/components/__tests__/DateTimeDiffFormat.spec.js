import DateTimeDiffFormat from '../DateTimeDiffFormat';
import I18NProvider from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';

describe('DateTimeDiffFormat component', function () {
  it('Should display today key', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      React.createElement(DateTimeDiffFormat, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
        to: '2016-10-25T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref) {
          var years = _ref.years,
              days = _ref.days,
              hours = _ref.hours,
              minutes = _ref.minutes;

          if (days > 7) {
            return 'DD-MM-YYYY';
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
  it('Should display today1', function () {
    var toDates = ['2016-10-24T05:55:28.000Z', '2016-10-24T03:55:28.000Z', '2016-10-23T08:55:28.000Z', '2016-10-23T08:55:27.000Z', '2016-10-25T05:55:28.000Z', '2016-10-25T05:55:27.000Z', '2016-10-25T05:55:29.000Z', '2016-10-25T05:54:28.000Z', '2016-10-25T05:53:28.000Z'];
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          today: 'today',
          yesterday: 'yesterday',
          now: 'noooow',
          'support.1day.ago': '1day ago',
          'support.1day.nhours.ago': 'one day {0} hours ago',
          'support.1min.ago': '1min ago',
          'support.nmins.ago': '{0} mins ago'
        }
      },
      React.createElement(
        'div',
        null,
        toDates.map(function (to) {
          return React.createElement(DateTimeDiffFormat, {
            from: '2016-10-25T05:55:28.000Z',
            fromTimeZone: 'Asia/Kolkata',
            to: to,
            toTimeZone: 'Asia/Kolkata',
            format: function format(_ref2, pattern) {
              var years = _ref2.years,
                  days = _ref2.days,
                  months = _ref2.months,
                  hours = _ref2.hours;

              switch (pattern) {
                case '000000':
                case '000001':
                case '000002':
                  return {
                    key: 'now'
                  };
                  break;
                case '000010':
                  return {
                    key: 'support.1min'
                  };
                  break;
                case '000020':
                  return {
                    key: 'support.nmins',
                    params: ['m']
                  };
                  break;
                case '001000':
                  return {
                    key: 'support.1day'
                  };
                  break;
                case '001200':
                case '001201':
                  return {
                    key: 'support.1day.nhours',
                    params: ['h']
                  };
                  break;
              }
            },
            ago: 'ago',
            later: 'later'
          });
        })
      )
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today later', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later'
        }
      },
      React.createElement(DateTimeDiffFormat, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
        to: '2016-10-25T05:55:29.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref3) {
          var years = _ref3.years,
              days = _ref3.days,
              hours = _ref3.hours,
              minutes = _ref3.minutes;

          if (days > 7) {
            return 'DD-MM-YYYY';
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
  it('Should display today ago', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later',
          'today.ago': '{0}:{1}:{2} ago'
        }
      },
      React.createElement(DateTimeDiffFormat, {
        from: '2016-10-25T05:55:30.000Z',
        fromTimeZone: 'Asia/Kolkata',
        to: '2016-10-25T05:55:29.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref4) {
          var years = _ref4.years,
              days = _ref4.days,
              hours = _ref4.hours,
              minutes = _ref4.minutes;

          if (days > 7) {
            return 'DD-MM-YYYY';
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
  fit('Should display years and days', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          'nyear.ndays.ago': '{0} years {1} days ago',
          yesterday: 'yesterday'
        }
      },
      React.createElement(DateTimeDiffFormat, {
        from: '2017-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
        to: '2015-08-25T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        format: function format(_ref5, pattern) {
          var years = _ref5.years,
              days = _ref5.days,
              months = _ref5.months,
              hours = _ref5.hours;

          if (years > 1) {
            return {
              key: 'nyear.ndays',
              params: ['y', 'days']
            };
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  fit('Should display years and days1', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          'nyear.ndays.later': '{0} years {1} days later',
          yesterday: 'yesterday'
        }
      },
      React.createElement(DateTimeDiffFormat, {
        from: '2015-08-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
        to: '2017-10-25T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        format: function format(_ref6, pattern) {
          var years = _ref6.years,
              days = _ref6.days,
              months = _ref6.months,
              hours = _ref6.hours;

          if (years > 1) {
            return {
              key: 'nyear.ndays',
              params: ['y', 'days']
            };
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