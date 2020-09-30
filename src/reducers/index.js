import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import planetsReducer from './planetsReducer';

export default combineReducers({
	usersReducer,
	planetsReducer,
});
