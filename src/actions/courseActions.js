import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCourses(){
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
             dispatch(loadCoursesSuccess(courses));
        }).catch( error => {
            throw error;
        });
    };
}

export function loadCoursesSuccess(courses){
    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses: courses
    };
}