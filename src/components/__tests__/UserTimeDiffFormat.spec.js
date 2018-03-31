import UserTimeDiffFormat from '../UserTimeDiffFormat';
import I18NProvider, { i18NProviderUtils } from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';
var temp = Date;
describe('UserTimeDiffFormat component', () => {
  beforeAll(() => {
    Date = function(a) {
      if (a) {
        return new temp(a);
      }
      return new temp('2016-10-25T05:55:28.000Z');
    };
    Date.UTC = temp.UTC;
    Date.now = temp.now;
  });
  afterAll(() => {
    Date = temp;
  });
  it('Should display yesterday - with same time', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-24T05:55:28.000Z"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display yesterday - less than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-24T06:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display yesterday - greater than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-24T04:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today key - same time', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-25T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should display today key - less than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-25T04:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today key -  greater than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-25T06:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display tomorrow key - same time', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-26T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display tomorrow key - less than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-26T04:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display tomorrow key -  greater than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-26T06:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other - same time', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-23T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes, suffix }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return '[less 7] DD-MM-YYYY';
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other - greater time', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-23T06:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes, suffix }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return '[less 7] DD-MM-YYYY';
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other - less time', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-23T04:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes, suffix }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return '[less 7] DD-MM-YYYY';
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other later- same time', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-27T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes, suffix, isWithInAWeek }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return '[less 7] DD-MM-YYYY';
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other later- less time', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-27T06:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes, suffix }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return '[less 7] DD-MM-YYYY';
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display other later- less time', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-27T04:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes, suffix }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return '[less 7] DD-MM-YYYY';
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display others', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-11-27T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes, suffix, isWithInAWeek }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return '[less 7] DD-MM-YYYY';
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should display today1', () => {
    var toDates = [
      '2016-10-24T05:55:28.000Z',
      '2016-10-24T06:55:28.000Z',
      '2016-10-24T04:55:28.000Z',
      '2016-10-25T05:55:28.000Z',
      '2016-10-25T04:55:28.000Z',
      '2016-10-25T06:55:28.000Z',
      '2016-10-26T05:55:28.000Z',
      '2016-10-26T04:55:28.000Z',
      '2016-10-26T06:55:28.000Z',
      '2016-10-23T05:55:28.000Z',
      '2016-10-23T04:55:28.000Z',
      '2016-10-23T06:55:28.000Z'
    ];
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          today: 'today',
          yesterday: 'yesterday',
          now: 'noooow',
          'support.1day.ago': '1day ago',
          'support.1day.nhours.ago': 'one day {0} hours ago',
          'support.1min.ago': '1min ago',
          'support.nmins.ago': '{0} mins ago'
        }}
        timeZone="Asia/Kolkata"
      >
        <div>
          {toDates.map((to, i) => {
            return (
              <UserTimeDiffFormat
                key={i}
                to={to}
                toTimeZone="Asia/Kolkata"
                format={({ years, days, months, hours }, pattern) => {
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
                }}
                ago="ago"
                later="later"
              />
            );
          })}
        </div>
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today later', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later'
        }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-25T05:55:29.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today ago', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later',
          'today.ago': '{0}:{1}:{2} ago'
        }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          from="2016-10-25T05:55:30.000Z"
          to="2016-10-25T05:55:29.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display years and days', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          'nyear.ndays.ago': '{0} years {1} days ago',
          yesterday: 'yesterday'
        }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          from="2017-10-25T05:55:28.000Z"
          to="2015-08-25T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          format={({ years, days, months, hours }, pattern) => {
            if (years > 1) {
              return {
                key: 'nyear.ndays',
                params: ['y', 'days']
              };
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display years and days1', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          'nyear.ndays.later': '{0} years {1} days later',
          yesterday: 'yesterday'
        }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          from="2015-08-25T05:55:28.000Z"
          to="2017-10-25T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          format={({ years, days, months, hours }, pattern) => {
            if (years > 1) {
              return {
                key: 'nyear.ndays',
                params: ['y', 'days']
              };
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today key - user', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-25T05:55:28.000Z"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today later - user', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later'
        }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-25T05:55:29.000Z"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should display today ago - user', () => {
    Date = function(a) {
      if (a) {
        return new temp(a);
      }
      return new temp('2016-10-25T05:55:28.000Z');
    };
    Date.UTC = temp.UTC;
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later',
          'today.ago': '{0}:{1}:{2} ago'
        }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-25T05:55:27.000Z"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task due date set - today [hh:mm:AM/PM]', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
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
        }}
        timeZone="Asia/Kolkata"
      >
        <App />
      </I18NProvider>
    );
    function App() {
      return (
        <UserTimeDiffFormat
          to="2015-10-25T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={'[today] hh:mm A'}
          yesterday={'dd:MM:YYYY hh:mm A'}
          tomorrow={'[tommorrow] hh:mm A'}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
          title={i18NProviderUtils.userDateFormat(
            '2015-10-27T05:55:28.000Z',
            {},
            '',
            'later',
            true,
            (diffObj, pattern) => {
              let getDateI18NString = {
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
                '0020': { key: 'nhours', params: ['hh'] }

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
              };
              return getDateI18NString[pattern]
                ? getDateI18NString[pattern]
                : 'hh:mm A';
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
            }
          )}
        />
      );
    }
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task due date set - tomorrow [hh:mm:AM/PM]', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-26T04:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={'[today] hh:mm A'}
          yesterday={'dd:MM:YYYY hh:mm A'}
          tomorrow={'[tommorrow] hh:mm A'}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('task due date set - yesterday dd:MM:YYYY hh:mm:A', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ today: 'today', yesterday: 'yesterday' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-24T06:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={'[today] hh:mm A'}
          yesterday={'DD/MM/YYYY hh:mm A'}
          tomorrow={'[tommorrow] hh:mm A'}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task due date set - overdue', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ 'overdue.ago': 'late by {0}' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-24T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          format={(diff, pattern) => {
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
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  //2016-10-25T05:55:28.000Z
  it('created time today', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ 'overdue.ago': 'late by {0}' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-25T06:55:28.000Z"
          today={'hh:mm A'}
          yesterday={'DD/MM/YYYY hh:mm A'}
          tomorrow={'[tommorrow] hh:mm A'}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('created time yesterday', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ 'overdue.ago': 'late by {0}' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-24T06:55:28.000Z"
          today={'hh:mm A'}
          yesterday={'[yesterday] hh:mm A'}
          tomorrow={'[tommorrow] hh:mm A'}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('created time tomorrow', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{ 'overdue.ago': 'late by {0}' }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-26T06:55:28.000Z"
          today={'hh:mm A'}
          yesterday={'[yesterday] hh:mm A'}
          tomorrow={'[tommorrow] hh:mm A'}
          others={({ years, days, hours, minutes }) => {
            return 'DD-MM-YYYY';
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('created time within 7 days', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          'overdue.ago': 'late by {0}',
          'support.ndays.nhours.ago': '{0} days {1} hours ago',
          'support.ndays.1hour.ago': '{0} days one hour ago'
        }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-19T06:55:28.000Z"
          today={'hh:mm A'}
          yesterday={'[yesterday] hh:mm A'}
          tomorrow={'[tommorrow] hh:mm A'}
          others={({ years, months, days, hours, minutes, yDays }) => {
            years = years > 1 ? '2' : years;
            //  months = diffObj1.months > 1 ? '2' : diffObj1.months;
            //days = diffObj1.days > 1 ? '2' : diffObj1.days;
            days = yDays > 1 ? '2' : yDays;
            hours = hours > 1 ? '2' : hours;
            minutes = minutes > 1 ? '2' : minutes;
            //seconds = diffObj1.seconds > 1 ? '2' : diffObj1.seconds;
            // let pattern = '' + years + months + days + hours + minutes + seconds;
            let count = 0;
            let pattern = [years, days, hours, minutes].reduce((res, next) => {
              if (count == 2) {
                res = res + '0';
              } else if (next != 0) {
                count++;
                res = res + next;
              } else {
                res = res + next;
              }
              return res;
            }, '');
            let getDateI18NString = {
              '0000': 'support.label.just.now',
              '0001': 'support.1minute',
              '0002': 'support.nminutes',
              '0010': 'support.1hour',
              '0011': 'support.1hour.1minute',
              '0012': 'support.1hour.nminutes',
              '0020': 'support.nhours',
              '0021': 'support.nhours.1minute',
              '0022': 'support.nhours.nminutes',
              '0100': 'support.1day',
              '0110': 'support.1day.1hour',
              '0120': 'support.1day.nhours',
              '0200': 'support.ndays',
              '0210': 'support.ndays.1hour',
              '0220': 'support.ndays.nhours',
              '1000': 'support.1year',
              '1100': 'support.1year.1day',
              '1200': 'support.1year.ndays',
              '2000': 'support.nyears',
              '2100': 'support.nyears.1day',
              '2200': 'support.nyears.ndays'
            };
            if (years == 0 && months == 0 && days < 7) {
              return {
                key: getDateI18NString[pattern],
                params: ['d', 'h']
              };
            } else {
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('created time within pattern', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          'overdue.ago': 'late by {0}',
          'support.ndays.nhours.ago': '{0} days {1} hours ago',
          'support.ndays.1hour.ago': '{0} days one hour ago'
        }}
        timeZone="Asia/Kolkata"
      >
        <UserTimeDiffFormat
          to="2016-10-19T06:55:28.000Z"
          format={({ years, months, days, hours, minutes, yDays }, pattern) => {
            let getDateI18NString = {
              '0000': 'support.label.just.now',
              '0001': 'support.1minute',
              '0002': 'support.nminutes',
              '0010': 'support.1hour',
              '0011': 'support.1hour.1minute',
              '0012': 'support.1hour.nminutes',
              '0020': 'support.nhours',
              '0021': 'support.nhours.1minute',
              '0022': 'support.nhours.nminutes',
              '0100': 'support.1day',
              '0110': 'support.1day.1hour',
              '0120': 'support.1day.nhours',
              '0200': 'support.ndays',
              '0210': 'support.ndays.1hour',
              '0220': 'support.ndays.nhours',
              '1000': 'support.1year',
              '1100': 'support.1year.1day',
              '1200': 'support.1year.ndays',
              '2000': 'support.nyears',
              '2100': 'support.nyears.1day',
              '2200': 'support.nyears.ndays'
            };
            if (years == 0 && months == 0 && days < 7) {
              return {
                key: getDateI18NString[pattern],
                params: ['d', 'h']
              };
            } else {
            }
          }}
          ago="ago"
          later="later"
        />
      </I18NProvider>
    );
    var tree = ele.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
