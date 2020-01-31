import Types from './types'

const initialState = {
    data: [],
    part: {},
    message: '',
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.REQUEST_PARTS_START:
            return { ...state, isLoading: true }
        case Types.ADD_PART:
            return { ...state, data: [ ...state.data, ...action.payload ]}
        case Types.SET_PARTS:
            return { ...state, data: action.payload }
        case Types.SET_PART:
            return { ...state, part: action.payload }
        case Types.EDIT_PART:
            return { 
                ...state, 
                data: state.data.map((part) => part._id === action.payload._id ? { ...part, ...action.payload } : part)
            }
        case Types.DELETE_PART:
            return { ...state, data: state.data.filter((part) => part.id !== action.payload.id)}
        case Types.REQUEST_PARTS_DONE:
            return { ...state, isLoading: false }
        case Types.REQUEST_PARTS_FAIL:
            return {
                ...state,
                isLoading: false,
                message: action.message
            }
        default:
            return state
    }
}