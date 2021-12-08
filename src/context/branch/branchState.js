import React, { useReducer } from 'react';
import {
    GET_BRANCHS,
    GET_BRANCHS_SUCCESS,
    GET_BRANCHS_FAILED,
    GET_BRANCH,
    GET_BRANCH_SUCCESS,
    GET_BRANCH_FAILED
} from '../../types';
import branchContext from './branchContext';
import branchReducer from './branchReducer';

// Cliente axios
import client from '../../config/axios';
const BranchState = ({children}) => {

    const initialState = {
        branchs: [],
        loadbranchs: null,
        errorbranchs: null,
        branch: null,
        loadbranch: null,
        errorbranch: null
    }

    const [state, dispatch] = useReducer(branchReducer, initialState);

    const getBranchs = async () => {
        dispatch({
            type: GET_BRANCHS
        });

        try {
            const response = await client.get('/api/branchs');
            
            dispatch({
                type: GET_BRANCHS_SUCCESS,
                payload: response.data
            });
        } catch(error) {
            console.log(error);
            dispatch({
                type: GET_BRANCHS_FAILED
            });
        }
    }

    const getBranch = async (branch) => {
        dispatch({
            type: GET_BRANCH
        });
        try {
            const response = await client.get(`/api/branchs/${branch}`);
            dispatch({
                type: GET_BRANCH_SUCCESS,
                payload: response.data
            })
        } catch (err) {
            console.log(err);
            dispatch({
                type: GET_BRANCH_FAILED
            })
        }
    }

    return(
        <branchContext.Provider
            value={{
                branchs: state.branchs,
                loadbranchs: state.loadbranchs,
                errorbranchs: state.errorbranchs,
                branch: state.branch,
                loadbranch: state.loadbranch,
                errorbranch: state.errorbranch,
                getBranchs,
                getBranch
            }}
        >{children}</branchContext.Provider>
    )
} 

export default BranchState;