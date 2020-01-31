import Types from './types'
import Api from '../../../services/api';

function requestPartsStart() {
    return {
        type: Types.REQUEST_PARTS_START
    }
}

function requestPartsDone() {
    return {
        type: Types.REQUEST_PARTS_DONE
    }
}

function requestPartsFail(message) {
    return {
        type: Types.REQUEST_PARTS_FAIL,
        message: message
    }
}

function setParts(payload) {
    return {
        type: Types.SET_PARTS,
        payload
    }
}

function addPart(payload) {
    return {
        type: Types.ADD_PART,
        payload
    }
}

function setPart(payload) {
    return {
        type: Types.SET_PART,
        payload
    }
}


function editPart(payload) {
    return {
        type: Types.EDIT_PART,
        payload
    }
}

function deletePart(payload) {
    return {
        type: Types.DELETE_PART,
        payload
    }
}

export function fetchPartsAsync() {
    return (dispatch, getState) => {
        dispatch(requestPartsStart())
        Api.get('/').then(response => {                                        
            dispatch(setParts(response.data));
            dispatch(requestPartsDone());
        }).catch(error => {
            dispatch(requestPartsFail(error.message));
        })
    }
}

export function createPartAsync(part) {
    return (dispatch, getState) => {
        dispatch(requestPartsStart())
        Api.post('/create-part', part).then(response => {
            dispatch(addPart(response.data));
            dispatch(requestPartsDone());
        }).catch(error => {
            dispatch(requestPartsFail(error.message));
        })
    }
}

export function showPartAsync(id) {
    return (dispatch, getState) => {
        dispatch(requestPartsStart())
        Api.get(`/show-part/${id}`).then(response => {                        
            dispatch(setPart(response.data))
            dispatch(requestPartsDone())                
        }).catch(error => {
            dispatch(requestPartsFail(error.message));
        })
    }
}

export function editPartAsync(id, object) {
    return (dispatch, getState) => {
        dispatch(requestPartsStart());
        Api.put(`/edit-part/${id}`, object).then((response) => {
            dispatch(editPart(response.data));
            dispatch(requestPartsDone());
        }).catch(error => {
            dispatch(requestPartsFail(error.message));
        })
    }
}

export function deletePartsAsync(id) {
    return (dispatch, getState) => {
        dispatch(requestPartsStart())
        Api.delete(`/delete-part/${id}`).then((response) => {            
            dispatch(deletePart(response.data))
            dispatch(requestPartsDone())
        }).catch(error => {
            dispatch(requestPartsFail(error.message));
        })
    }
}