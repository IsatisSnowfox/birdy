import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer'

/* Exports all reducers combined */
export default combineReducers({
    "user": LoginReducer,
});