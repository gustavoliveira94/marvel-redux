import { combineReducers } from 'redux'

import {
  REQUEST_API_BEGIN,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILURE
}
  from '../actions'
// import { requestApiReducer } from '../reducers'

const initialState = {
  items: [],
  error: null
};

function requestApiReducer(state = initialState, action) {
  switch (action.type) {

    case REQUEST_API_BEGIN:
      return {
        ...state,
        error: null
      }

    case REQUEST_API_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      }

    case REQUEST_API_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        items: []
      }

    default:
      return state;
  }
}

export const reducers = combineReducers({
  requestApiReducer
});