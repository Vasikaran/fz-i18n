import React,{PropTypes, Children} from 'react';
import { connect } from 'react-redux';
import { getI18NValue,userDateFormat } from '../utils';

const emptyObj={};
const dummy=(key,values)=>{
    console.log("Not Mount <I18NProvider/> component.")
    return key
}
export const i18nUtils ={
  getI18NValue:dummy,
  getUserDateFormat:dummy
}
export default class I18NProvider extends React.Component{

  constructor(props,context){
    super(props,context);
    this.i18n = props.i18n;
    this.timeZone = props.timeZone;
    this.promise = null;
    this.resolve = null;
    this.reject = null;
    this.state ={reRender:false}
    i18nUtils.getI18NValue=getI18NValue(props.i18n)
    i18nUtils.userDateFormat=userDateFormat(i18nUtils.getI18NValue,props.timeZone)
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
        i18nUtils.getI18NValue=getI18NValue(nextProps.i18n)
        i18nUtils.userDateFormat=userDateFormat(i18nUtils.getI18NValue,nextProps.timeZone)
        this.setState({reRender:true},()=>{
          setTimeout(()=>this.setState({reRender:false}),1);
        })  
        this.promise=null;
      },()=>{
        this.promise=null;
      })
      this.props.onChange(this.resolve,this.reject)
    }
  }
  render(){
    return this.state.reRender ? null: Children.only(this.props.children)
  }

}

I18NProvider.defaultProps = {
  i18n:emptyObj
}
I18NProvider.childContextTypes = {
  i18n: PropTypes.object,
  timeZone: PropTypes.string
};

export const ConnectI18NProvider =  connect((state,props)=>{
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
  console.log(i18n,timeZone)
	return{
		i18n,
		timeZone
	}
})(I18NProvider)