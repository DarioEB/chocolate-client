import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import RoomImages from './RoomImages';
import RoomDescription from './RoomDescription';

const ContentRoomLayout = styled.div`
    display: grid;
    margin: 2rem 0;
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: 2fr 1fr;
        gap: 4rem;
    }
`

const ContentRoom = ({room}) => {

    useEffect( () => {

    }, []);

    return (
        <section className="content-rooms">
            <div className="container">
                <div className="title">
                    <h1>{room.name}</h1>
                    <span>
                        <Link 
                            className="title-nav" 
                            to={"/"}>Home
                        </Link>
                        /
                        <Link 
                            to={`/sucursales/${room.branch.route}`}
                            className="title-nav"
                        >
                            {room.branch.name}
                        </Link> /
                        <span>{room.name}</span>
                    </span>
                </div>
                <ContentRoomLayout>
                    <RoomImages 
                        room={room}
                    />
                    <RoomDescription 
                        room={room}
                    />
                </ContentRoomLayout>
            </div>
        </section>
    );
}


export default ContentRoom;