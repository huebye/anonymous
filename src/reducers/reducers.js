import { combineReducers } from 'redux';

import { SET_DATA } from '../actions/actions';

function data(state = [], action) {
    switch (action.type) {
      case SET_DATA:
        return action.value;
      default:
        return state;
    }
  }

function anonymousApp(state = {}, action) {
   return {
     data: data(state.data, action)
   }
 }

 export default anonymousApp;