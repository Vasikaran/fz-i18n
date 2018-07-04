'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.pad = pad;
exports.replaceI18NValuesWithRegex = replaceI18NValuesWithRegex;
exports.unescapeUnicode = unescapeUnicode;
exports.getValues = getValues;
exports.getI18NValue = getI18NValue;
exports.getI18NInfo = getI18NInfo;
exports.isToday = isToday;
exports.isYesterday = isYesterday;
exports.isTomorrow = isTomorrow;
exports.isWithinAWeek = isWithinAWeek;
exports.isTwoWeeksOrMore = isTwoWeeksOrMore;
exports.userDateFormat = userDateFormat;

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
function replaceI18NValuesWithRegex(i18nStr, values) {
  if (typeof values !== 'undefined') {
    if (Array.isArray(values)) {
      for (var i = 0; i < values.length; i++) {
        i18nStr = i18nStr.replace(new RegExp('\\{' + i + '\\}', 'g'), values[i]);
      }
    } else {
      i18nStr = i18nStr.replace(new RegExp('\\{0\\}', 'g'), values);
    }
  }
  return i18nStr;
}

function unescapeUnicode(str) {
  return str.replace(/\\u([a-fA-F0-9]{4})/g, function (g, m1) {
    return String.fromCharCode(parseInt(m1, 16));
  });
}
function getValues() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var diff = arguments[1];

  return params.map(function (param) {
    return diff[param];
  });
}
function getI18NValue(i18n) {
  if (typeof i18n === 'undefined') {
    return function (key) {
      return key;
    };
  }
  return function (key, values) {
    var i18nStr = i18n[key];
    if (i18nStr === undefined) {
      return key;
    }
    i18nStr = replaceI18NValuesWithRegex(i18nStr, values);
    return unescapeUnicode(i18nStr);
  };
}

function getValues() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var diff = arguments[1];

  return params.map(function (param) {
    return diff[param];
  });
}
function getI18NInfo(toDateObj, props, diffObj) {
  var key = null,
      values,
      text = null;
  if (typeof props == 'function') {
    var value = props(diffObj1);
    key = value.key;
    values = getValues(value.params, diffObj);
  } else if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) == 'object') {
    key = props.key;
    values = getValues(props.params, diffObj);
  } else if (typeof props == 'string') {
    text = toDateObj.format(props);
  }
  return { key: key, values: values, text: text };
}
function isToday(fromDate, toDate) {
  var TODAY = toDate.clone().startOf('day');
  return fromDate.isSame(TODAY, 'd');
}
function isYesterday(fromDate, toDate) {
  var YESTERDAY = toDate.clone().subtract(1, 'days').startOf('day');
  return fromDate.isSame(YESTERDAY, 'd');
}
function isTomorrow(fromDate, toDate) {
  return isYesterday(toDate, fromDate);
}
function isWithinAWeek(fromDate, toDate) {
  var A_WEEK_OLD = toDate.clone().subtract(7, 'days').startOf('day');
  return fromDate.isAfter(A_WEEK_OLD);
}
function isTwoWeeksOrMore(fromDate, toDate) {
  return !isWithinAWeek(fromDate, toDate);
}

function userDateFormat(getI18NValue, userTimeZone) {
  return function (to, _ref, ago, later) {
    var today = _ref.today,
        yesterday = _ref.yesterday,
        tomorrow = _ref.tomorrow,
        others = _ref.others;
    var isSuffixEnable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var format = arguments[5];

    var currentTime = new Date();
    var currentTimeUTCString = currentTime.toISOString();
    var fromDateObj = (0, _momentTimezone2.default)(currentTimeUTCString).tz(userTimeZone);
    var toDateObj = (0, _momentTimezone2.default)(to).tz(userTimeZone);
    var suffix = void 0;
    if (toDateObj.isBefore(fromDateObj)) {
      suffix = ago || '';
    } else if (toDateObj.isAfter(fromDateObj)) {
      suffix = later || '';
    } else {
      suffix = '';
    }
    var withInAWeak = isWithinAWeek(fromDateObj, toDateObj);
    var diff = _momentTimezone2.default.duration(Math.abs(toDateObj.diff(fromDateObj)));
    var yearRemaingdays;
    if (toDateObj.isBefore(fromDateObj)) {
      var tempTo = (0, _momentTimezone2.default)(to).tz(userTimeZone).add(diff.get('y'), 'years');
      yearRemaingdays = Math.abs(tempTo.diff(fromDateObj, 'days'));
    } else {
      var tempFrom = (0, _momentTimezone2.default)(fromDateObj).tz(userTimeZone).add(diff.get('y'), 'years');
      yearRemaingdays = Math.abs(tempFrom.diff(toDateObj, 'days'));
    }
    var diffObj = {
      h: diff.get('h'),
      m: diff.get('m'),
      s: diff.get('s'),
      M: diff.get('M'),
      y: diff.get('y'),
      d: diff.get('d'),
      hh: pad(diff.get('h'), 2),
      mm: pad(diff.get('m'), 2),
      ss: pad(diff.get('s'), 2),
      MM: pad(diff.get('M'), 2),
      yy: pad(diff.get('y'), 2),
      dd: pad(diff.get('d'), 2),
      days: yearRemaingdays,
      yDays: pad(yearRemaingdays, 2),
      isWithInAWeek: withInAWeak,
      suffix: suffix
    };
    var diffObj1 = {
      hours: diff.get('h'),
      minutes: diff.get('m'),
      seconds: diff.get('s'),
      months: diff.get('M'),
      years: diff.get('y'),
      days: diff.get('d'),
      yDays: yearRemaingdays,
      isWithInAWeek: withInAWeak,
      suffix: suffix
    };
    //var daysDiff = toDateObj.diff(fromDateObj, 'days');

    var key = '';
    var values = [];
    var text = null;
    if (format) {
      var years = void 0,
          months = void 0,
          days = void 0,
          hours = void 0,
          minutes = void 0,
          seconds = void 0;

      years = diffObj1.years > 1 ? '2' : diffObj1.years;
      //  months = diffObj1.months > 1 ? '2' : diffObj1.months;
      //  days = diffObj1.days > 1 ? '2' : diffObj1.days;
      days = yearRemaingdays > 1 ? '2' : yearRemaingdays;
      hours = diffObj1.hours > 1 ? '2' : diffObj1.hours;
      minutes = diffObj1.minutes > 1 ? '2' : diffObj1.minutes;
      //seconds = diffObj1.seconds > 1 ? '2' : diffObj1.seconds;
      // let pattern = '' + years + months + days + hours + minutes + seconds;
      var count = 0;
      var pattern = [years, days, hours, minutes].reduce(function (res, next) {
        if (count == 2 || next == 0) {
          res = res + '0';
        } else if (next != 0) {
          count++;
          res = res + next;
        } else {
          res = res + next;
        }
        return res;
      }, '');
      var _value = format(diffObj1, pattern);
      if (_value && (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) == 'object') {
        key = _value.key;
        values = getValues(_value.params, diffObj);
        isSuffixEnable = true;
      } else if (typeof _value == 'string') {
        text = toDateObj.format(_value);
      }
    } else {
      if (isYesterday(toDateObj, fromDateObj)) {
        if ((typeof yesterday === 'undefined' ? 'undefined' : _typeof(yesterday)) == 'object') {
          key = yesterday.key;
          values = getValues(yesterday.params, diffObj);
        } else if (typeof yesterday == 'string') {
          text = toDateObj.format(yesterday);
        }
      } else if (isToday(toDateObj, fromDateObj)) {
        if ((typeof today === 'undefined' ? 'undefined' : _typeof(today)) == 'object') {
          key = today.key;
          values = getValues(today.params, diffObj);
          isSuffixEnable = true;
        } else if (typeof today == 'string') {
          text = toDateObj.format(today);
        }
      } else if (isTomorrow(toDateObj, fromDateObj)) {
        if ((typeof tomorrow === 'undefined' ? 'undefined' : _typeof(tomorrow)) == 'object') {
          key = tomorrow.key;
          values = getValues(tomorrow.params, diffObj);
        } else if (typeof tomorrow == 'string') {
          text = toDateObj.format(tomorrow);
        }
        // key = tomorrow.key;
        // values = getValues(tomorrow.params, diffObj);
      } else {
        var value = others(diffObj1);
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
          key = value.key;
          values = getValues(value.params, diffObj);
          isSuffixEnable = true;
        } else if (typeof value == 'string') {
          text = toDateObj.format(value);
        }
      }
    }
    var key1 = isSuffixEnable && suffix != '' ? key + '.' + suffix : key;
    return text || getI18NValue(key1, values);
  };
}