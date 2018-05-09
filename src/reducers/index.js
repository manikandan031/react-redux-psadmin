import {combineReducers} from 'redux';
import courses from './courseReducer'; 
import authors from './authorReducer';
import numberOfAjaxCalls from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    numberOfAjaxCalls
}
);

export default rootReducer;

