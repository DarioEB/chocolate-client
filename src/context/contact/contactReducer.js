import {
    CONTACT,
    CONTACT_SUCCESS,
    CONTACT_FAILED
} from '../../types';

const contactReducer = (state, action) => {
    switch(action.type) {
        case CONTACT:
            return {
                ...state,
                contact: action.payload,
                loadContact: true
            }
        case CONTACT_SUCCESS:
            return {
                ...state,
                contact: null,
                loadContact: false,
                msg: action.payload
            }
        case CONTACT_FAILED: 
            return {
                ...state,
                contact: null,
                loadContact: false,
                msg: action.payload
            }
        default:
            return state;
    }
}

export default contactReducer;