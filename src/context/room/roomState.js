import React, { useReducer } from 'react';

// Types
import { GET_ALL_ROOMS, GET_FILTER_ROOMS, GET_ROOM, GET_ROOMS, GET_ROOMS_BRANCH, GET_ROOMS_BRANCH_FAILED, GET_ROOMS_BRANCH_SUCCESS, GET_ROOMS_FAILED, GET_ROOMS_SUCCESS, GET_ROOM_FAILED, GET_ROOM_SUCCESS } from '../../types';

import roomContext from './roomContext';
import roomReducer from './roomReducer';

import client from '../../config/axios';

const RoomState = ({children}) => {

    const initialState = {
        rooms: [],
        roomsview: [],
        loadrooms: null,
        errorrooms: null,
        message: '',
        room: null,
        loadroom: null,
        errorroom: null
    }

    const [state, dispatch] = useReducer(roomReducer, initialState);

    const getRooms = async () => {
        dispatch({
            type: GET_ROOMS
        })
        try {
            const response = await client.get('/api/rooms');
            dispatch({
                type: GET_ROOMS_SUCCESS,
                payload: response.data
            })
        } catch (err) {
            console.log(err);
            dispatch({
                type: GET_ROOMS_FAILED
            })
        }
    }

    const getRoomsBranch = async (branch) => {
        dispatch({
            type: GET_ROOMS_BRANCH
        });
        try {
            const response = await client.get(`/api/rooms/${branch}`);
            dispatch({
                type: GET_ROOMS_BRANCH_SUCCESS,
                payload: response.data
            })
        } catch (err) {
            console.log(err);
            dispatch({
                type: GET_ROOMS_BRANCH_FAILED
            })
        }
    }

    const getRoom = async (branch, room) => {
        dispatch({
            type: GET_ROOM
        });
        console.log(`/api/rooms/${branch}/${room}`);
        try {
            const response = await client.get(`/api/rooms/${branch}/${room}`);
            console.log(response.data.room);
            dispatch({
                type: GET_ROOM_SUCCESS,
                payload: response.data
            })
        } catch (err) {
            console.log(err);
            dispatch({
                type: GET_ROOM_FAILED
            })
        }
    }

    const getFilterRooms = async (category) => {
        dispatch({
            type: GET_FILTER_ROOMS,
            payload: category
        });
    }

    const getAllRooms = async ( ) => {
        dispatch({
            type: GET_ALL_ROOMS
        })
    }

    return (
        <roomContext.Provider
            value={{
                rooms: state.rooms,
                roomsview: state.roomsview,
                loadrooms: state.loadrooms,
                errorrooms: state.errorrooms,
                message: state.message,
                room: state.room,
                loadroom: state.loadroom,
                errorroom: state.errorroom,
                getRooms,
                getRoomsBranch,
                getRoom,
                getFilterRooms,
                getAllRooms
            }}
        >
            {children}
        </roomContext.Provider>
    )
}

export default RoomState;