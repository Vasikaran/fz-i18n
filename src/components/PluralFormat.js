import React, { PropTypes } from 'react';
import FormatText from './FormatText'

export default class PluralFormat extends React.Component{
	render(){
		const { one, many, zero, value} = this.props;
		let key = "", values="";
		if(value > 1){
			key = many;
		}else if(value == 1){
			key = one;
		}else if(value == 0){
			key=zero;
		}
		values=""+value;
		
		return <FormatText {...this.props} i18NKey={key} values={values} one={null} many={null} zero={null} />
	}
}
PluralFormat.propTypes={
	one:PropTypes.string,
	many:PropTypes.string,
	zero:PropTypes.string,
	value:PropTypes.number,
	tag:PropTypes.string
}

