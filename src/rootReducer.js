import  { combineReducers } from 'redux';
import itemReducer from './Reducers/reducers';


const rootReducer = combineReducers ({ ProductsList: itemReducer});

export default rootReducer;