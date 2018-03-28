import UserTimeDiffFormat from '../UserTimeDiffFormat';
import I18NProvider, { i18NProviderUtils } from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';
var temp = Date;
describe('UserTimeDiffFormat component', function () {
  beforeAll(function () {
    Date = function Date(a) {
      if (a) {
        return new temp(a);
      }
      return new temp('2016-10-25T05:55:28.000Z');
    };
    Date.UTC = temp.UTC;
    Date.now = temp.now;
  });
  afterAll(function () {
    Date = temp;
  });
  it('Should display yesterday - with same time', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-24T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref) {
          var years = _ref.years,
              days = _ref.days,
              hours = _ref.hours,
              minutes = _ref.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display yesterday - less than 24 hour', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-24T06:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref2) {
          var years = _ref2.years,
              days = _ref2.days,
              hours = _ref2.hours,
              minutes = _ref2.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display yesterday - greater than 24 hour', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-24T04:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref3) {
          var years = _ref3.years,
              days = _ref3.days,
              hours = _ref3.hours,
              minutes = _ref3.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today key - same time', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-25T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref4) {
          var years = _ref4.years,
              days = _ref4.days,
              hours = _ref4.hours,
              minutes = _ref4.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should display today key - less than 24 hour', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-25T04:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref5) {
          var years = _ref5.years,
              days = _ref5.days,
              hours = _ref5.hours,
              minutes = _ref5.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today key -  greater than 24 hour', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-25T06:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref6) {
          var years = _ref6.years,
              days = _ref6.days,
              hours = _ref6.hours,
              minutes = _ref6.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display tomorrow key - same time', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-26T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref7) {
          var years = _ref7.years,
              days = _ref7.days,
              hours = _ref7.hours,
              minutes = _ref7.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display tomorrow key - less than 24 hour', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-26T04:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref8) {
          var years = _ref8.years,
              days = _ref8.days,
              hours = _ref8.hours,
              minutes = _ref8.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display tomorrow key -  greater than 24 hour', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-26T06:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref9) {
          var years = _ref9.years,
              days = _ref9.days,
              hours = _ref9.hours,
              minutes = _ref9.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other - same time', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-23T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref10) {
          var years = _ref10.years,
              days = _ref10.days,
              hours = _ref10.hours,
              minutes = _ref10.minutes,
              suffix = _ref10.suffix;

          if (days > 7) {
            return 'DD-MM-YYYY';
          } else {
            return '[less 7] DD-MM-YYYY';
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other - greater time', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-23T06:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref11) {
          var years = _ref11.years,
              days = _ref11.days,
              hours = _ref11.hours,
              minutes = _ref11.minutes,
              suffix = _ref11.suffix;

          if (days > 7) {
            return 'DD-MM-YYYY';
          } else {
            return '[less 7] DD-MM-YYYY';
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other - less time', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-23T04:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref12) {
          var years = _ref12.years,
              days = _ref12.days,
              hours = _ref12.hours,
              minutes = _ref12.minutes,
              suffix = _ref12.suffix;

          if (days > 7) {
            return 'DD-MM-YYYY';
          } else {
            return '[less 7] DD-MM-YYYY';
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other later- same time', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-27T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref13) {
          var years = _ref13.years,
              days = _ref13.days,
              hours = _ref13.hours,
              minutes = _ref13.minutes,
              suffix = _ref13.suffix,
              isWithInAWeek = _ref13.isWithInAWeek;

          if (days > 7) {
            return 'DD-MM-YYYY';
          } else {
            return '[less 7] DD-MM-YYYY';
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other later- less time', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-27T06:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref14) {
          var years = _ref14.years,
              days = _ref14.days,
              hours = _ref14.hours,
              minutes = _ref14.minutes,
              suffix = _ref14.suffix;

          if (days > 7) {
            return 'DD-MM-YYYY';
          } else {
            return '[less 7] DD-MM-YYYY';
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other later- less time', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-27T04:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref15) {
          var years = _ref15.years,
              days = _ref15.days,
              hours = _ref15.hours,
              minutes = _ref15.minutes,
              suffix = _ref15.suffix;

          if (days > 7) {
            return 'DD-MM-YYYY';
          } else {
            return '[less 7] DD-MM-YYYY';
          }
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display others', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-11-27T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref16) {
          var years = _ref16.years,
              days = _ref16.days,
              hours = _ref16.hours,
              minutes = _ref16.minutes,
              suffix = _ref16.suffix,
              isWithInAWeek = _ref16.isWithInAWeek;

          if (days > 7) {
            return 'DD-MM-YYYY';
          } else {
            return '[less 7] DD-MM-YYYY';
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
    var toDates = ['2016-10-24T05:55:28.000Z', '2016-10-24T06:55:28.000Z', '2016-10-24T04:55:28.000Z', '2016-10-25T05:55:28.000Z', '2016-10-25T04:55:28.000Z', '2016-10-25T06:55:28.000Z', '2016-10-26T05:55:28.000Z', '2016-10-26T04:55:28.000Z', '2016-10-26T06:55:28.000Z', '2016-10-23T05:55:28.000Z', '2016-10-23T04:55:28.000Z', '2016-10-23T06:55:28.000Z'];
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
        },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(
        'div',
        null,
        toDates.map(function (to, i) {
          return React.createElement(UserTimeDiffFormat, {
            key: i,
            to: to,
            toTimeZone: 'Asia/Kolkata',
            format: function format(_ref17, pattern) {
              var years = _ref17.years,
                  days = _ref17.days,
                  months = _ref17.months,
                  hours = _ref17.hours;

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
                case '001100':
                case '001200':
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
        },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-25T05:55:29.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref18) {
          var years = _ref18.years,
              days = _ref18.days,
              hours = _ref18.hours,
              minutes = _ref18.minutes;

          return 'DD-MM-YYYY';
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
        },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        from: '2016-10-25T05:55:30.000Z',
        to: '2016-10-25T05:55:29.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref19) {
          var years = _ref19.years,
              days = _ref19.days,
              hours = _ref19.hours,
              minutes = _ref19.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display years and days', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          'nyear.ndays.ago': '{0} years {1} days ago',
          yesterday: 'yesterday'
        },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        from: '2017-10-25T05:55:28.000Z',
        to: '2015-08-25T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        format: function format(_ref20, pattern) {
          var years = _ref20.years,
              days = _ref20.days,
              months = _ref20.months,
              hours = _ref20.hours;

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
  it('Should display years and days1', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          'nyear.ndays.later': '{0} years {1} days later',
          yesterday: 'yesterday'
        },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        from: '2015-08-25T05:55:28.000Z',
        to: '2017-10-25T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        format: function format(_ref21, pattern) {
          var years = _ref21.years,
              days = _ref21.days,
              months = _ref21.months,
              hours = _ref21.hours;

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
  it('Should display today key - user', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-25T05:55:28.000Z',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref22) {
          var years = _ref22.years,
              days = _ref22.days,
              hours = _ref22.hours,
              minutes = _ref22.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today later - user', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later'
        },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-25T05:55:29.000Z',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref23) {
          var years = _ref23.years,
              days = _ref23.days,
              hours = _ref23.hours,
              minutes = _ref23.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today ago - user', function () {
    Date = function Date(a) {
      if (a) {
        return new temp(a);
      }
      return new temp('2016-10-25T05:55:28.000Z');
    };
    Date.UTC = temp.UTC;
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later',
          'today.ago': '{0}:{1}:{2} ago'
        },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-25T05:55:27.000Z',
        today: { key: 'today', params: ['hh', 'mm', 'ss'] },
        yesterday: { key: 'yesterday', params: ['hh', 'mm', 'ss'] },
        tomorrow: { key: 'tomorrow', params: ['hh', 'mm', 'ss'] },
        others: function others(_ref24) {
          var years = _ref24.years,
              days = _ref24.days,
              hours = _ref24.hours,
              minutes = _ref24.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task due date set - today [hh:mm:AM/PM]', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: {
          today: 'today',
          yesterday: 'yesterday',
          'year.day': 'late by 1year 1day',
          'nyear.day': 'late by {0}years 1day',
          'nyear.nday': 'late by {0}years {1}days',
          'year.nday': 'late by 1year {0}days',
          'day.hour': 'late by 1day 1hour',
          'nday.hour': 'late by {0}days 1hour',
          'nday.nhour': 'late by {0}days {1}hours',
          'day.nhour': 'late by 1day {0}hours',
          'hour.minute': 'late by 1hour 1minute',
          'nhour.minute': 'late by {0}hours 1minute',
          'nhour.nminute': 'late by {0}hours {1}minutes',
          'hour.nminute': 'late by 1hour {0}minutes',
          minute: 'late by 1minute',
          nminute: 'late by {0}minutes',
          year: 'late by 1year',
          nyear: 'late by {0}years',
          day: 'late by 1day',
          nday: 'late by {0} days',
          hour: 'late by 1hour',
          nhours: 'late by {0}hours'
        },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(App, null)
    ));
    function App() {
      return React.createElement(UserTimeDiffFormat, {
        to: '2015-10-25T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: '[today] hh:mm A',
        yesterday: 'dd:MM:YYYY hh:mm A',
        tomorrow: '[tommorrow] hh:mm A',
        others: function others(_ref25) {
          var years = _ref25.years,
              days = _ref25.days,
              hours = _ref25.hours,
              minutes = _ref25.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later',
        title: i18NProviderUtils.userDateFormat('2015-10-27T05:55:28.000Z', {}, '', 'later', true, function (diffObj, pattern) {
          var getDateI18NString = {
            '1100': { key: 'year.day', params: ['yy', 'yDays'] },
            '2100': { key: 'nyear.day', params: ['yy', 'yDays'] },
            '2200': { key: 'nyear.nday', params: ['yy', 'yDays'] },
            '1200': { key: 'year.nday', params: ['yDays'] },
            '0110': { key: 'day.hour', params: ['yDays', 'hh'] },
            '0210': { key: 'nday.hour', params: ['yDays', 'hh'] },
            '0220': { key: 'nday.nhour', params: ['yDays', 'hh'] },
            '0120': { key: 'day.nhour', params: ['hh'] },
            '0011': { key: 'hour.minute', params: ['hh', 'mm'] },
            '0021': { key: 'nhour.minute', params: ['hh', 'mm'] },
            '0022': { key: 'nhour.nminute', params: ['hh', 'mm'] },
            '0012': { key: 'hour.nminute', params: ['mm'] },
            '0001': { key: 'minute', params: ['mm'] },
            '0002': { key: 'nminute', params: ['mm'] },
            '1000': { key: 'year', params: ['yy'] },
            '2000': { key: 'nyear', params: ['yy'] },
            '0100': { key: 'day', params: ['yDays'] },
            '0200': { key: 'nday', params: ['yDays'] },
            '0010': { key: 'hour', params: ['hh'] },
            '0020': { key: 'nhours', params: ['hh']

              // '0000': 'support.label.just.now',
              // '0001': 'support.1minute',
              // '0002': 'support.nminutes',
              // '0010': 'support.1hour',
              // '0011': 'support.1hour.1minute',
              // '0012': 'support.1hour.nminutes',
              // '0020': 'support.nhours',
              // '0021': 'support.nhours.1minute',
              // '0022': 'support.nhours.nminutes',
              // '0100': 'support.1day',
              // '0110': 'support.1day.1hour',
              // '0120': 'support.1day.nhours',
              // '0200': 'support.ndays',
              // '0210': 'support.ndays.1hour',
              // '0220': 'support.ndays.nhours',
              // '1000': 'support.1year',
              // '1100': 'support.1year.1day',
              // '1200': 'support.1year.ndays',
              // '2000': 'support.nyears',
              // '2100': 'support.nyears.1day',
              // '2200': 'support.nyears.ndays'
            } };
          return getDateI18NString[pattern] ? getDateI18NString[pattern] : 'hh:mm A';
          //   console.log(pattern, '===========>>>>pattern');
          //   let { years, months, yDays: days, hours, minutes } = diffObj;
          //   if (years == 1 && days == 1) {
          //     return { key: 'year.day', pattern: ['YY', 'DD'] };
          //   } else if (years > 1 && days == 1) {
          //     return { key: 'nyear.day', pattern: ['YY', 'DD'] };
          //   } else if (years > 1 && days > 1) {
          //     return { key: 'nyear.nday', pattern: ['YY', 'DD'] };
          //   } else if (years == 1 && days > 1) {
          //     return { key: 'year.nday', pattern: ['DD'] };
          //   } else if (days == 1 && hours == 1) {
          //     return { key: 'day.hour', pattern: ['DD', 'hh'] };
          //   } else if (days > 1 && hours == 1) {
          //     return { key: 'nday.hour', pattern: ['DD', 'hh'] };
          //   } else if (days > 1 && hours > 1) {
          //     return { key: 'nday.nhour', pattern: ['DD', 'hh'] };
          //   } else if (days == 1 && hours > 1) {
          //     return { key: 'day.nhour', pattern: ['hh'] };
          //   } else if (hours == 1 && minutes == 1) {
          //     return { key: 'hour.minute', pattern: ['hh', 'mm'] };
          //   } else if (hours > 1 && minutes == 1) {
          //     return { key: 'nhour.minute', pattern: ['hh', 'mm'] };
          //   } else if (hours > 1 && minutes > 1) {
          //     return { key: 'nhour.nminute', pattern: ['hh', 'mm'] };
          //   } else if (hours == 1 && minutes > 1) {
          //     return { key: 'hour.nminute', pattern: ['mm'] };
          //   } else if (minutes == 1) {
          //     return { key: 'minute', pattern: ['mm'] };
          //   } else if (minutes > 1) {
          //     return { key: 'nminute', pattern: ['mm'] };
          //   } else if (years == 1) {
          //     return { key: 'year', pattern: ['YY'] };
          //   } else if (years > 1) {
          //     return { key: 'nyear', pattern: ['YY'] };
          //   } else {
          //     return 'hh:mm A';
          //   }
        })
      });
    }
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task due date set - tomorrow [hh:mm:AM/PM]', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-26T04:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: '[today] hh:mm A',
        yesterday: 'dd:MM:YYYY hh:mm A',
        tomorrow: '[tommorrow] hh:mm A',
        others: function others(_ref26) {
          var years = _ref26.years,
              days = _ref26.days,
              hours = _ref26.hours,
              minutes = _ref26.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('task due date set - yesterday dd:MM:YYYY hh:mm:A', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { today: 'today', yesterday: 'yesterday' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-24T06:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        today: '[today] hh:mm A',
        yesterday: 'DD/MM/YYYY hh:mm A',
        tomorrow: '[tommorrow] hh:mm A',
        others: function others(_ref27) {
          var years = _ref27.years,
              days = _ref27.days,
              hours = _ref27.hours,
              minutes = _ref27.minutes;

          return 'DD-MM-YYYY';
        },
        ago: 'ago',
        later: 'later'
      })
    ));
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task due date set - overdue', function () {
    var ele = renderer.create(React.createElement(
      I18NProvider,
      {
        i18n: { 'overdue.ago': 'late by {0}' },
        timeZone: 'Asia/Kolkata'
      },
      React.createElement(UserTimeDiffFormat, {
        to: '2016-10-24T05:55:28.000Z',
        toTimeZone: 'Asia/Kolkata',
        format: function format(diff, pattern) {
          switch (pattern) {
            case '000000':
            case '000001':
            case '000002':
            case '000010':
            case '000011':
            case '000012':
            case '000022':
            case '000100':
            case '000101':
            case '000102':
            case '000110':
            case '000111':
            case '000112':
            case '000120':
            case '000121':
            case '000122':
            case '000200':
              return {
                key: 'overdue',
                params: ['dd']
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