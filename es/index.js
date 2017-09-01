import { getI18NValue as getI18NValue1 } from './utils';

export { default as I18NProvider, ConnectI18NProvider, i18NProviderUtils } from './components/I18NProvider';
export { default as I18N } from './components/I18N';
export { default as HOCI18N } from './components/HOCI18N';
export { default as FormatText } from './components/FormatText';
export { default as PluralFormat } from './components/PluralFormat';
export { default as DateTimeDiffFormat } from './components/DateTimeDiffFormat';
export { default as UserTimeDiffFormat } from './components/UserTimeDiffFormat';
export var getI18NValue = function getI18NValue(i18n, key, values) {
  return getI18NValue1(i18n)(key, values);
};