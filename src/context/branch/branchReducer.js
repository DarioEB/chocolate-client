import {
    GET_BRANCHS,
    GET_BRANCHS_SUCCESS,
    GET_BRANCHS_FAILED,
    GET_BRANCH,
    GET_BRANCH_SUCCESS,
    GET_BRANCH_FAILED
} from '../../types';

const branchReducer = (state, action) => {
    switch(action.type) {
        case GET_BRANCHS:
            return {
                ...state,
                loadbranchs: true
            }
        case GET_BRANCHS_SUCCESS:
            return {
                ...state,
                loadbranchs: false,
                errorbranchs: null,
                branchs: action.payload.branchs
            }
        case GET_BRANCHS_FAILED:
            return {
                ...state,
                loadbranchs: false,
                errorbranchs: true
            }
        case GET_BRANCH:
            return {
                ...state,
                loadbranch: true
            }
        case GET_BRANCH_SUCCESS:
            return {
                ...state,
                loadbranch: false,
                errorbranch: null,
                branch: action.payload.branch
            }
        case GET_BRANCH_FAILED:
            return {
                ...state,
                loadbranch: false,
                errorbranch: true,
                branch: null
            }
        default:
            return state;
    }
}

export default branchReducer;