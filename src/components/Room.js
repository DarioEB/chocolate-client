import React,{ useContext, useEffect } from 'react';
import roomContext from '../context/room/roomContext';
import Spin from './layout/Spin';
import {useParams} from 'react-router-dom';
import ContentRoom from './roomComponents/ContentRoom';
import SlideOthersRooms from './roomComponents/SlideOthersRooms';

import { animateScroll as scroll } from "react-scroll";
const Room = () => {
    
    const params = useParams();
    
    // RoomContext
    const RoomContext = useContext(roomContext);
    const { getRoom, loadroom, room, rooms, getRoomsBranch } = RoomContext;
    useEffect( () => {
        getRoom(params.branch, params.room);
        // eslint-disable-next-line
    }, [params.branch, params.room]);

    useEffect( () => {
        if(rooms.length <= 0) {
            getRoomsBranch(params.branch);
        }
        // eslint-disable-next-line
    }, [params.branch, rooms]);

    useEffect( () => {
        scroll.scrollToTop();
        // eslint-disable-next-line
    }, [scroll])

    if(!room || loadroom || rooms.length === 0) {
        return <Spin />
    }
    
    return(
        <>
            <ContentRoom 
                room={room}
            />
            <SlideOthersRooms />
        </>
    );
}

export default Room;