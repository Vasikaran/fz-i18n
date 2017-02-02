'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getI18NValues = exports.UserTimeDiffFormat = exports.DateTimeDiffFormat = exports.PluralFormat = exports.FormatText = exports.HOCI18N = exports.I18N = exports.i18NProviderUtils = exports.ConnectI18NProvider = exports.I18NProvider = undefined;

var _I18NProvider = require('./components/I18NProvider');

Object.defineProperty(exports, 'I18NProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_I18NProvider).default;
  }
});
Object.defineProperty(exports, 'ConnectI18NProvider', {
  enumerable: true,
  get: function get() {
    return _I18NProvider.ConnectI18NProvider;
  }
});
Object.defineProperty(exports, 'i18NProviderUtils', {
  enumerable: true,
  get: function get() {
    return _I18NProvider.i18NProviderUtils;
  }
});

var _I18N = require('./components/I18N');

Object.defineProperty(exports, 'I18N', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_I18N).default;
  }
});

var _HOCI18N = require('./components/HOCI18N');

Object.defineProperty(exports, 'HOCI18N', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HOCI18N).default;
  }
});

var _FormatText = require('./components/FormatText');

Object.defineProperty(exports, 'FormatText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FormatText).default;
  }
});

var _PluralFormat = require('./components/PluralFormat');

Object.defineProperty(exports, 'PluralFormat', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PluralFormat).default;
  }
});

var _DateTimeDiffFormat = require('./components/DateTimeDiffFormat');

Object.defineProperty(exports, 'DateTimeDiffFormat', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DateTimeDiffFormat).default;
  }
});

var _UserTimeDiffFormat = require('./components/UserTimeDiffFormat');

Object.defineProperty(exports, 'UserTimeDiffFormat', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UserTimeDiffFormat).default;
  }
});

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getI18NValues = exports.getI18NValues = function getI18NValues(i18n, key, values) {
  return (0, _utils.getI18NValues)(i18n)(key, values);
};