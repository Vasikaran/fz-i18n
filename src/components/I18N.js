import React,{PropTypes, Children} from 'react';
import { replaceI18NValuesWithRegex, unescapeUnicode } from '../utils';

export default class I18N extends React.Component {  
	constructor(props) {
		super(props);
		this.getI18NValue=this.getI18NValue.bind(this);
		this.createElement=this.createElement.bind(this);
	}
	getI18NValue(){
		const {i18NKey:key,values} =this.props;
		const {i18n} =this.context;
		if(typeof i18n === "undefined" ){
			return key;
		}
		var i18nStr = i18n[key];
		if(i18nStr === undefined){
			return key;
		}
		i18nStr = replaceI18NValuesWithRegex(i18nStr,values);
		return unescapeUnicode(i18nStr);
	}
	createElement(){
		const props = Object.keys(this.props).reduce((result,nextKey)=>{
			if(nextKey!="i18NKey" && nextKey!="tag" && nextKey!="values" && nextKey!="isHtml")
			result[nextKey]=this.props[nextKey];
			return result;
		},{});
		//const child=this.getI18NValue();
		if(this.props.isHtml){
			var dangerouslySetInnerHTML={
				__html:this.getI18NValue()
			}

			return React.createElement(this.props.tag,
				Object.assign(props,{dangerouslySetInnerHTML})
			);
		}else{
			return React.createElement(this.props.tag,
				props,
				this.getI18NValue()
			);
		}
	}
  	
  render() {
    return this.createElement();
  }
}
I18N.propTypes={
	i18NKey:PropTypes.string.isRequired,
	values:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	tag:PropTypes.string,
	isHtml:PropTypes.bool
}
I18N.defaultProps={
	tag:"span",
	isHtml:false
}
I18N.contextTypes = {
  i18n: PropTypes.object
}

