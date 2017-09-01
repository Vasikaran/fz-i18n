import React from 'react';
import PropTypes from 'prop-types';
import I18N from './I18N';

export default class FormatText extends React.Component {
  render() {
    return <I18N {...this.props} />;
  }
}
FormatText.propTypes = {
  i18NKey: PropTypes.string.isRequired,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isHtml: PropTypes.bool
};
