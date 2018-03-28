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
  it('Should display yesterday - with same time', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T06:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
  it('Should display yesterday - less than 24 hour', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
  it('Should display yesterday - greater than 24 hour', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
  it('Should display today key - same time', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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

  it('Should display today key - less than 24 hour', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
  it('Should display today key -  greater than 24 hour', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
  it('Should display tomorrow key - same time', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
  it('Should display tomorrow key - less than 24 hour', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
  it('Should display tomorrow key -  greater than 24 hour', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
  it('Should display other - same time', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      { i18n: { today: 'today', yesterday: 'yesterday' } },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
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
      _react2.default.createElement(
        'div',
        null,
        toDates.map(function (to, i) {
          return _react2.default.createElement(_DateTimeDiffFormat2.default, {
            key: i,
            from: '2016-10-25T05:55:28.000Z',
            fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      {
        i18n: {
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later'
        }
      },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      {
        i18n: {
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later',
          'today.ago': '{0}:{1}:{2} ago'
        }
      },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2016-10-25T05:55:30.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
  it('Should display years and days', function () {
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      {
        i18n: {
          'nyear.ndays.ago': '{0} years {1} days ago',
          yesterday: 'yesterday'
        }
      },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2017-10-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
    var ele = _reactTestRenderer2.default.create(_react2.default.createElement(
      _I18NProvider2.default,
      {
        i18n: {
          'nyear.ndays.later': '{0} years {1} days later',
          yesterday: 'yesterday'
        }
      },
      _react2.default.createElement(_DateTimeDiffFormat2.default, {
        from: '2015-08-25T05:55:28.000Z',
        fromTimeZone: 'Asia/Kolkata',
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
});