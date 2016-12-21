import React, { PropTypes } from 'react'

export default class FormatText extends React.Component{
	render(){
		return <I18N {...this.props} />
	}
}
FormatText.propTypes={
	i18NKey:PropTypes.string.isRequired,
	values:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	])
}
