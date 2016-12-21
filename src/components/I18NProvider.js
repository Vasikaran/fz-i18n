import React,{PropTypes, Children} from 'react';
import { connect } from 'react-redux';
const emptyObj={};
export default class I18NProvider extends React.Component{

	constructor(props,context){
		super(props,context);
		this.i18n = props.i18n;
		this.timeZone = props.timeZone;
		this.promise = null;
		this.resolve = null;
		this.reject = null;
		this.state ={reRender:false}
	}
	getChildContext() {
    return {
    	i18n: this.i18n,
    	timeZone: this.timeZone
    };
  }
  componentWillReceiveProps(nextProps) {

  	if(this.props.i18n!=nextProps.i18n || this.props.timeZone !=nextProps.timeZone && this.promise){
  		this.promise = new Promise((res,rej)=>{
  			this.resolve=res
  			this.reject=rej
  		}).then(()=>{
  			this.i18n=nextProps.i18n;
  			this.timeZone = nextProps.timeZone;
  			this.setState({reRender:true},()=>{
  				setTimeout(()=>this.setState({reRender:false}),1);
  			})	
  			this.promise=null;
  		},()=>{
  			this.promise=null;
  			console.log("reject i18n or timeZoneChanges change")
  		})
  		this.props.onChange(this.resolve,this.reject)
  	}
  }
  render(){
  	console.log("I18NProvider -- render");
  	return this.state.reRender ? null: Children.only(this.props.children)
  }

}

export const ConnectI18NProvider =  connect((state,props)=>{
	console.log(state)
	var i18n={};
	var timeZone="";
	if(typeof props.i18n == "function"){
		i18n = props.i18n(state);
	}else if(typeof props.i18n == "object"){
		i18n=props.i18n;
	}
	if(typeof props.timeZone == "function"){
		timeZone = props.timeZone(state);
	}else if(typeof props.timeZone == "object"){
		timeZone=props.timeZone;
	}
	return{
		i18n,
		timeZone
	}
})(I18NProvider)