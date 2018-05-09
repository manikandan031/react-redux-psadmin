import * as actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthors(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        authorApi.getAllAuthors().then( authors => {
            return dispatch(loadAuthorsSuccess(authors));
        });
    };
}

export function loadAuthorsSuccess(authors) {
    return {
        type: actionTypes.LOAD_AUTHORS_SUCCESS,
        authors: authors
    };
}