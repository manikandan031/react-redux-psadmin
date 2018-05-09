import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

function actionEndsInSuccess(actionType){
    return actionType.endsWith('SUCCESS');
}

export default function ajaxStatusReducer(state = initialState.numberOfAjaxCalls,action) {
    if(action.type === actionTypes.BEGIN_AJAX_CALL){
        return state + 1;
    }else if (actionEndsInSuccess(action.type)){
        return state - 1;
    }
    return state;
}