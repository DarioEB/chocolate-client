import React, { useContext } from 'react';
// Context
import roomContext from '../../context/room/roomContext';
import Room from './Room';

const ListRooms = () => {

    // Context habitaciones
    const RoomContext = useContext(roomContext);
    const { roomsview } = RoomContext;
    

    return (
        <div className="content-list-rooms">
            {/* <p>{text}...</p> */}
            <div className="list-rooms">
                {roomsview.map(room => (
                    <Room
                        key={room._id}
                        room={room}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListRooms;