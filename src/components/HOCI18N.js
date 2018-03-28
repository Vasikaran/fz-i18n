import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { replaceI18NValuesWithRegex, unescapeUnicode } from '../utils';
export default (i18NKeys = []) => Component => {
  class HOCI18N extends React.Component {
    constructor(props) {
      super(props);
      this.getI18NValue = this.getI18NValue.bind(this);
    }
    getI18NValue(key) {
      const { i18n } = this.context;
      if (typeof i18n === 'undefined') {
        return key;
      }
      var i18nStr = i18n[key];
      if (i18nStr === undefined) {
        return key;
      }
      return unescapeUnicode(i18nStr);
    }
    render() {
      var i18nProps = i18NKeys.reduce((result, key) => {
        if (this.props[key]) {
          result[key] = this.getI18NValue(this.props[key]);
        }
        return result;
      }, {});
      return <Component {...this.props} {...i18nProps} />;
    }
  }

  HOCI18N.contextTypes = {
    i18n: PropTypes.object
  };
  return HOCI18N;
};
