import * as actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthors(){
    return function(dispatch){
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