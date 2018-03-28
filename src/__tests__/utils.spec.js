import {
  pad,
  replaceI18NValuesWithRegex,
  unescapeUnicode,
  getI18NValue
} from '../utils';

describe('I18N utils', () => {
  it('should display 01', () => {
    var data = pad('1', 2, '0');
    expect(data).toMatchSnapshot();
  });

  it('should display vimalesan', () => {
    var data = replaceI18NValuesWithRegex('vimal{0}', ['esan']);
    expect(data).toMatchSnapshot();
  });

  it('should display  j', () => {
    var data = unescapeUnicode('\u006A');
    expect(data).toMatchSnapshot();
  });

  it('should display vimal', () => {
    var fn = getI18NValue({ key1: 'vimal' });
    expect(fn('key1')).toMatchSnapshot();
  });
  it('should display i18n value', () => {
    expect(
      ((i18n, key, value) => getI18NValue(i18n)(key, value))(
        { key1: 'vimal{0}' },
        'key1',
        'esan'
      )
    ).toBe('vimalesan');
  });
});
