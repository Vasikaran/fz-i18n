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
    if (typeof values !== "undefined") {
        if (Array.isArray(values)) {
            for (var i = 0; i < values.length; i++) {
                i18nStr = i18nStr.replace(new RegExp("\\{" + i + "\\}", "g"), values[i]);
            }
        } else {
            i18nStr = i18nStr.replace(new RegExp("\\{0\\}", "g"), values);
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
    if (typeof i18n === "undefined") {
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

function userDateFormat(getI18NValue, userTimeZone) {
    return function (to, _ref, ago, later) {
        var today = _ref.today,
            yesterday = _ref.yesterday,
            tomorrow = _ref.tomorrow,
            others = _ref.others;
        var isSuffixEnable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

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
        var diff = _momentTimezone2.default.duration(Math.abs(toDateObj.diff(fromDateObj)));
        var diffObj = {
            hh: pad(diff.get('h'), 2),
            mm: pad(diff.get('m'), 2),
            ss: pad(diff.get('s'), 2),
            MM: pad(diff.get('M'), 2),
            yy: pad(diff.get('y'), 2),
            dd: pad(diff.get('d'), 2)
        };
        var diffObj1 = {
            hours: diff.get('h'),
            minutes: diff.get('m'),
            seconds: diff.get('s'),
            Months: diff.get('M'),
            years: diff.get('y'),
            days: diff.get('d')
        };
        var daysDiff = toDateObj.diff(fromDateObj, 'days');

        var key = "";
        var values = [];
        if (daysDiff < -1) {
            var value = others(diffObj1);
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                key = value.key;
                values = getValues(value.params, diffObj);
                isSuffixEnable = true;
            } else if (typeof value == 'string') {
                key = toDateObj.format(value);
            }
        } else if (daysDiff < 0) {
            if ((typeof yesterday === 'undefined' ? 'undefined' : _typeof(yesterday)) == 'object') {
                key = yesterday.key;
                values = getValues(yesterday.params, diffObj);
            } else if (typeof yesterday == 'string') {
                key = toDateObj.format(yesterday);
            }
        } else if (daysDiff < 1) {
            if ((typeof today === 'undefined' ? 'undefined' : _typeof(today)) == 'object') {
                key = today.key;
                values = getValues(today.params, diffObj);
                isSuffixEnable = true;
            } else if (typeof today == 'string') {
                key = toDateObj.format(today);
            }
        } else if (daysDiff < 2) {
            key = tomorrow.key;
            values = getValues(tomorrow.params, diffObj);
        } else {
            var value = others(diffObj1);
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                key = value.key;
                values = getValues(value.params, diffObj);
                isSuffixEnable = true;
            } else if (typeof value == 'string') {
                key = toDateObj.format(value);
            }
        }
        var key = isSuffixEnable && suffix != '' ? key + "." + suffix : key;
        return getI18NValue(key1, values);
    };
}