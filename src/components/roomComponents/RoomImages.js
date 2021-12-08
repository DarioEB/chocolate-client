import React, { useState } from 'react';
import styled from '@emotion/styled';

const RoomImagesContent = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }
    @keyframes fadeimage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1; 
        }
    }
    img {
        border-radius: .5rem;
        animation-name: fadeimage;
        animation-duration: .5s;
    }
`

const ListImages = styled.div`
    /* flex: 0 0 12rem; */
    @media (min-width: 768px) {
        flex: 0 0 12rem;
    }
    ul {
        display: flex;
        flex-direction: row;
        @media (min-width: 768px) {
            flex-direction: column;
        }
        gap: 1.5rem;
        li  div {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

const ImageMain = styled.div` 
    flex: 1;
    img {
        border-radius: .5rem;
        animation-name: fadeimage;
        animation-duration: .5s;
    }
`   

const RoomImages = ({room}) => {

    const [imagemain, setImageMain] = useState(room.images[0]);

    return (
        <RoomImagesContent>
            <ListImages>
                <ul>
                    {room.images.map( (image, i) => (
                        <li
                            key={i}
                        >
                            <div
                                onClick={() => setImageMain(image)}
                            >
                                <img 
                                    className="filter"
                                    src={`${process.env.REACT_APP_BACKEND_URL}/api/rooms/get-image/image/${image}`}
                                    alt={`Imagen ${room.name}`}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </ListImages>
            <ImageMain>
                <div>
                    <img 
                        className="filter"
                        src={`${process.env.REACT_APP_BACKEND_URL}/api/rooms/get-image/image/${imagemain}`}
                        alt={`Imagen ${room.name}`}
                    />
                </div>
            </ImageMain>
        </RoomImagesContent>
    );
}

export default RoomImages;