//import nock from "nock";
//import promise from '../../app/middleware/PromiseMiddleware.js';
//import thunk from 'redux-thunk';
//import configureStore from 'redux-mock-store';

//var mockDomain = "http://zoho.com";
//const nockApi = nock(mockDomain);

//const middlewares = [thunk,promise];
//const mockStore = configureStore(middlewares);
import React from 'react';
import renderer from 'react-test-renderer';


const matchSnapshot = function(Component,defaultProps) {
	const tree = renderer.create(
			
    		<Component {...defaultProps} />
  			).toJSON();
	expect(tree).toMatchSnapshot();
}

export {
//	nockApi,
//	mockStore,
	matchSnapshot,
//	expect
}