'use strict';

var _utils = require('../utils');

describe('I18N utils', function () {
  it('should display 01', function () {
    var data = (0, _utils.pad)('1', 2, '0');
    expect(data).toMatchSnapshot();
  });

  it('should display vimalesan', function () {
    var data = (0, _utils.replaceI18NValuesWithRegex)('vimal{0}', ['esan']);
    expect(data).toMatchSnapshot();
  });

  it('should display  j', function () {
    var data = (0, _utils.unescapeUnicode)('j');
    expect(data).toMatchSnapshot();
  });

  it('should display vimal', function () {
    var fn = (0, _utils.getI18NValue)({ key1: 'vimal' });
    expect(fn('key1')).toMatchSnapshot();
  });
  it('should display i18n value', function () {
    expect(function (i18n, key, value) {
      return (0, _utils.getI18NValue)(i18n)(key, value);
    }({ key1: 'vimal{0}' }, 'key1', 'esan')).toBe('vimalesan');
  });
});