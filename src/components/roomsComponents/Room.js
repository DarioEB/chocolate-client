import React from 'react';
import ch from '../../images/ch.png';

import { Link } from 'react-router-dom';
import {RoomContainer} from '../layout/UI';
const Room = ({ room }) => {

    
    return (
        <div className="content-room">
            <RoomContainer>
                <Link
                    to={`/sucursales/${room.branch.route}/${room.route}`}
                >
                    <div className="room-image">
                        <img
                            className="_image filter"
                            src={`${process.env.REACT_APP_BACKEND_URL}/api/rooms/get-image/image/${room.images[0]}`}
                            alt={`Imagen ${room.name}`}
                        />
                        <div className="category">
                            <p>{room.category.name}</p>
                        </div>
                        <div className="ch">
                            <img
                                src={ch}
                                alt={`Logo`}
                            />
                        </div>
                    </div>
                </Link>
                <div className="room-description">
                    <div className="room-name">
                        <p className="_name">
                            {room.name}
                        </p>
                    </div>
                </div>
            </RoomContainer>
        </div>

    );
}

export default Room;