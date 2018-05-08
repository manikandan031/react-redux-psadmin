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

export function saveCourse(course){
    return function(dispatch){
        courseApi.saveCourse(course).then(
            course => {dispatch(saveCourseSuccess(course));
        }).catch(error =>{
            throw error;
        });
    };
}

export function saveCourseSuccess(course){
    return {
        type: actionTypes.SAVE_COURSE_SUCCESS,
        course: course
    };
}