import React,{PropTypes, Children} from 'react';

const emptyObj={};
export class I18NProvider extends React.Component{
	getChildContext() {
    return {i18n: this.props.i18n};
  }
  render(){
  	return Children.only(this.props.children)
  }

}

I18NProvider.defaultProps = {
	i18n:emptyObj
}
I18NProvider.childContextTypes = {
  i18n: PropTypes.object
};

export default I18N;