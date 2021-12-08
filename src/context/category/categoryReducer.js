import {
    GET_CATEGORIES,
    GET_CATEGORIES_FAILED,
    GET_CATEGORIES_SUCCESS
} from '../../types';

const categoryReducer = (state, action) => {
    switch(action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                loadCategories: true
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loadCategories: false,
                errorCategories: null,
                categories: action.payload
            }
        case GET_CATEGORIES_FAILED:
            return {
                ...state,
                loadCategories: false,
                errorCategories: true
            }
        
        default:
            return state;
    }
} 

export default categoryReducer;