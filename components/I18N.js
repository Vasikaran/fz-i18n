import React,{PropTypes, Children} from 'react';

function replaceI18NValuesWithRegex(i18nStr,values)
{
	if(typeof values !== "undefined")
	{
		if(Array.isArray(values)){
			for(var i=0;i< values.length;i++){
				i18nStr = i18nStr.replace( new RegExp( "\\{"+i+"\\}","g") ,values[i]);
			}
		}
		else {
			i18nStr = i18nStr.replace( new RegExp( "\\{0\\}","g") ,values);
		}
	}
	return i18nStr;
}
function unescapeUnicode(str)
{
    return str.replace( /\\u([a-fA-F0-9]{4})/g, function(g, m1) {
         return String.fromCharCode(parseInt(m1, 16));
    });
}	

export default class I18N extends React.Component {  
	constructor(props) {
		super(props);
		this.getI18NValue=this.getI18NValue.bind(this);
		this.createElement=this.createElement.bind(this);
	}
	getI18NValue(){
		const {i18NKey:key,values} =this.props;
		const {i18n} =this.context;
		console.log(values)
		console.log("getI18NValue",key);
		if(typeof i18n === "undefined" || key === "" || typeof key === "undefined"){
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
			if(nextKey!="i18NKey" && nextKey!="tag" && nextKey!="values")
			result[nextKey]=this.props[nextKey];
			return result;
		},{});
		const child=this.getI18NValue();
		return React.createElement(this.props.tag,
			props,
			this.getI18NValue()
		);
	}
  	
  render() {
    return this.createElement();
  }
}
I18N.propTypes={
	i18NKey:PropTypes.object.isRequired,
	values:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	tag:PropTypes.string
}
I18N.defaultProps={
	tag:"span"
}
I18N.contextTypes = {
  i18n: PropTypes.object
}

