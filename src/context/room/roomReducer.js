import {
    
    GET_ALL_ROOMS,
    GET_FILTER_ROOMS,
    GET_ROOM,
    GET_ROOMS, GET_ROOMS_BRANCH, GET_ROOMS_BRANCH_FAILED, GET_ROOMS_BRANCH_SUCCESS, GET_ROOMS_FAILED, GET_ROOMS_SUCCESS, GET_ROOM_FAILED, GET_ROOM_SUCCESS
} from '../../types';

const roomReducer = (state, action) => {
    switch(action.type) {
        case GET_ROOMS:
        case GET_ROOMS_BRANCH:
            return {
                ...state,
                loadrooms: true
            }
        case GET_ROOMS_SUCCESS:
        case GET_ROOMS_BRANCH_SUCCESS:
            return {
                ...state,
                loadrooms: false,
                errorrooms: null,
                rooms: action.payload.rooms,
                roomsview: action.payload.rooms,
                message: "Habitaciones obtenidas correctamente"
            }
        case GET_ROOMS_FAILED:
        case GET_ROOMS_BRANCH_FAILED:
            return {
                ...state,
                loadrooms: false,
                errorrooms: true,
                rooms: [],
                roomsview: [],
                message: 'Hubo un error'
            }
        case GET_ROOM:
            return {
                ...state,
                loadroom: true
            }
        case GET_ROOM_SUCCESS:
            return {
                ...state,
                loadroom: false,
                errorroom: null,
                room: action.payload.room,
                message: 'Habitación obtenida correctamente'
            }
        case GET_ROOM_FAILED:
            return {
                ...state,
                loadroom: false,
                errorroom: true,
                room: null,
                message: "Hubo un error"
            }
        case GET_FILTER_ROOMS:
            return {
                ...state,
                roomsview: state.rooms.filter( r => r.category._id === action.payload)
            }
        case GET_ALL_ROOMS:
            return {
                ...state,
                roomsview: state.rooms
            }
        default:
            return state;
    }
}

export default roomReducer;