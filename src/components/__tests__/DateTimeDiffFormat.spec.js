import DateTimeDiffFormat from '../DateTimeDiffFormat';
import I18NProvider from '../I18NProvider';
import React from 'react';
import renderer from 'react-test-renderer';

describe('DateTimeDiffFormat component', () => {
  it('Should display yesterday - with same time', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T06:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-24T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display yesterday - less than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-24T06:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display yesterday - greater than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-24T04:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display today key - same time', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-25T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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

  it('Should display today key - less than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-25T04:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display today key -  greater than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-25T06:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display tomorrow key - same time', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-26T05:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display tomorrow key - less than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-26T04:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display tomorrow key -  greater than 24 hour', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-26T06:55:28.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display other - same time', () => {
    var ele = renderer.create(
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
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
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
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
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
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
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
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
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
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
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
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
      <I18NProvider i18n={{ today: 'today', yesterday: 'yesterday' }}>
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
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
      >
        <div>
          {toDates.map((to, i) => {
            return (
              <DateTimeDiffFormat
                key={i}
                from="2016-10-25T05:55:28.000Z"
                fromTimeZone="Asia/Kolkata"
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
      >
        <DateTimeDiffFormat
          from="2016-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-25T05:55:29.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display today ago', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          today: 'today',
          yesterday: 'yesterday',
          'today.later': '{0}:{1}:{2} later',
          'today.ago': '{0}:{1}:{2} ago'
        }}
      >
        <DateTimeDiffFormat
          from="2016-10-25T05:55:30.000Z"
          fromTimeZone="Asia/Kolkata"
          to="2016-10-25T05:55:29.000Z"
          toTimeZone="Asia/Kolkata"
          today={{ key: 'today', params: ['hh', 'mm', 'ss'] }}
          yesterday={{ key: 'yesterday', params: ['hh', 'mm', 'ss'] }}
          tomorrow={{ key: 'tomorrow', params: ['hh', 'mm', 'ss'] }}
          others={({ years, days, hours, minutes }) => {
            if (days > 7) {
              return 'DD-MM-YYYY';
            } else {
              return getDateKeyWithParam(years, days, hours, minutes);
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
  it('Should display years and days', () => {
    var ele = renderer.create(
      <I18NProvider
        i18n={{
          'nyear.ndays.ago': '{0} years {1} days ago',
          yesterday: 'yesterday'
        }}
      >
        <DateTimeDiffFormat
          from="2017-10-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
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
      >
        <DateTimeDiffFormat
          from="2015-08-25T05:55:28.000Z"
          fromTimeZone="Asia/Kolkata"
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
});
