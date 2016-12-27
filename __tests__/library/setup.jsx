//$Id$//
import { jsdom } from 'jsdom';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'

var mockDomain = "http://zoho.com";
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.ZE_Init={};
global.String.prototype.contains = function (text) {return this.indexOf(text) != -1}
global.TestUtils = TestUtils;	

TestUtils.scryRenderedComponentsWithTestid = function (dom,name) {
	let componentList = TestUtils.findAllInRenderedTree(dom,function (i,j) {
		if (TestUtils.isDOMComponent(i)) {
			var val = i.getAttribute("data-testid");
			if (typeof val != "undefined" && val == name) {
				return true;
			}
			return false;
		}
	})
	return componentList;
}

TestUtils.findRenderedComponentsWithTestid = function (dom,name) {
	let list = TestUtils.scryRenderedComponentsWithTestid(dom,name);
	if (list.length !== 1) {
		throw new Error(
        'Did not find exactly one match (found: ' + list.length + ') ' +
        'for data-testid:' + name
    );
	}
	return list[0];
}

global.setup = function (Component,props,state) {
	var router={ router:{
			push:function(){},
			createHref:function(ob){
				return ob.pathname;
			},
			isActive:function(){
				return true;
			},
			replace:function () {},
			go:function () {},
			goBack:function (){},
			goForward:function (){},
			setRouteLeaveHook:function (){},
			getState:function () {}
		},
		store:{
			getState: function (){return state;}
		},

	}
	
	var Component = higherComponent(Component,state);
	const renderedDOM = TestUtils.renderIntoDocument(<Component {...props}/>,router);
  return {
    props,
    renderedDOM
  }
}

function higherComponent(ActualComponent,context) {
	if(context){
		var HigherComponent = React.createClass( {
			getChildContext:function(){
				return context
			},
			render:function () {
				return <ActualComponent {...this.props}/>;
			},
			childContextTypes:{
				router : React.PropTypes.any,
				store : React.PropTypes.any,
				i18n:React.PropTypes.any
			}
		});
		return HigherComponent;
	}
	else{
		return ActualComponent
	}
}

global.renderHTML = function (comp) {
	let a = ReactDOM.findDOMNode(comp);
	console.log(a.innerHTML);
}

global.TestUtils = TestUtils;
global.XMLHttpRequest=window.XMLHttpRequest;
global.getI18NValue = function (inp) { return inp;}
