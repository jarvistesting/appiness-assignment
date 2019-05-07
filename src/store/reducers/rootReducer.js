import loginReducer from './loginReducer';
import employeeReducer from './employeeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    logindata: loginReducer,
    employeedata: employeeReducer
});

export default rootReducer;