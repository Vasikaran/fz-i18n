import { pad, replaceI18NValuesWithRegex, unescapeUnicode, getI18NValue } from '../utils';

describe('I18N utils', function () {
  it("should display 01", function () {
    var data = pad("1", 2, "0");
    expect(data).toMatchSnapshot();
  });

  it("should display vimalesan", function () {
    var data = replaceI18NValuesWithRegex("vimal{0}", ["esan"]);
    expect(data).toMatchSnapshot();
  });

  it("should display  j", function () {
    var data = unescapeUnicode('j');
    expect(data).toMatchSnapshot();
  });

  it("should display vimal", function () {
    var fn = getI18NValue({ key1: "vimal" });
    expect(fn("key1")).toMatchSnapshot();
  });
  it("should display i18n value", function () {
    expect(function (i18n, key, value) {
      return getI18NValue(i18n)(key, value);
    }({ key1: "vimal{0}" }, "key1", "esan")).toBe("vimalesan");
  });
});