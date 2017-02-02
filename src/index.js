import { getI18NValues as getI18NValues1 } from './utils';

export { default as I18NProvider, ConnectI18NProvider,i18NProviderUtils } from './components/I18NProvider';
export { default as I18N } from './components/I18N';
export { default as HOCI18N } from './components/HOCI18N';
export { default as FormatText } from './components/FormatText';
export { default as PluralFormat } from './components/PluralFormat';
export { default as DateTimeDiffFormat } from './components/DateTimeDiffFormat';
export { default as UserTimeDiffFormat } from './components/UserTimeDiffFormat';
export const getI18NValues = (i18n,key,values) => getI18NValues1(i18n)(key,values);
