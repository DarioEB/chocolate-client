import React, { useReducer } from 'react';
import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILED
} from '../../types';
import categoryReducer from './categoryReducer';
import categoryContext from './categoryContext';

// Client axios
import client from '../../config/axios';

const CategoryState = ({children}) => {
    
    const initialState = {
        categories: [],
        loadCategories: null,
        errorCategories: null,
        category: null
    }
    
    const [state, dispatch] = useReducer(categoryReducer, initialState);

    const getCategories = async () => {
        dispatch({
            type: GET_CATEGORIES
        });
        try {
            const response = await client.get('/api/categories');
            
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: response.data.categories
            })
        } catch (error) {
            dispatch({
                type: GET_CATEGORIES_FAILED
            })
        }
    }


    return(
        <categoryContext.Provider
            value={{
                categories: state.categories,
                loadCategories: state.loadCategories,
                errorCategories: state.errorCategories,
                category: state.category,
                getCategories
            }}
        >
            {children}
        </categoryContext.Provider>
    );
}

export default CategoryState;