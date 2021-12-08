import React from 'react';

import {
    LocationMarkerIcon
} from '@heroicons/react/outline'
import styled from '@emotion/styled';
import {
    MapContainer,
    TileLayer,
    Marker, 
    Popup
} from 'react-leaflet';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/leaflet.css';

const AboutContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    @media (min-width: 768px) {
        margin-top: 0;
    }
`

const MapInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-family: var(--opSans);

    .subtitle {
        display: flex;
        flex-direction: column;
        gap: .75rem;
        text-align: center;
        .text {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            .icon {
                color: var(--pinkE);
            }
        }
        h2 {
            font-size: 2.6rem;
            color: var(--w);
            font-weight: 400;
            margin: 0;padding: 0;
            text-transform: uppercase;
        }
        p {
            font-size: 1.2rem;
            color: var(--w);
            margin: 0;padding: 0;
            font-weight: 300;
        }

        @media (min-width: 768px) {
            h2 {
                font-size: 2.8rem;
            }
            p {
                font-size: 1.6rem;
            }
        }
    }
`

const MapsContainer = styled.div`
    display: grid;
    gap: 4rem;
    @media (min-width: 768px) {
        gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
    }
    .map {
        height: 20rem;
        width: 100%;
        @media (min-width: 768px) {
            height: 35rem;
        }
        border-radius: .25rem;

        .leaflet-control-attribution,
        .leaflet-control {
            display: none !important;
        }
        .leaflet-marker-icon {
            position: absolute !important;
            content-visibility: url('leaflet/dist/images/marker-icon-2x.png') !important;
            z-index: 200000 !important;
        }
    }
`

const About = () => {
    
    const maps = [
        {title: 'Sucursal Corrientes', address: 'Av. Río Chico y Las Dalias, Ctes.', position: [-27.460280, -58.774612]},
        {title: 'Sucusal Resistencia', address: 'Ruta Nacional 16 y Av. Vélez Sarsfield, Rcia.', position: [-27.425442, -58.944378]}
    ]

    return (
        <AboutContainer>
            <div className="container">
                
                <MapsContainer>
                    {maps.map( (map, i) => (
                        <MapInfoContent
                            key={i}
                        >
                            <div className="subtitle">
                                <h2>{map.title}</h2>
                                <div className="text">
                                    <LocationMarkerIcon 
                                        className="icon"
                                    />
                                    <p>{map.address}</p>
                                </div>
                            </div>
                            <MapContainer center={map.position} zoom={16} scrollWheelZoom={false} className="map">
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={map.position}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </MapInfoContent>
                    ))}
                    
                </MapsContainer>
                
            </div>
        </AboutContainer>
    );
}

export default About;