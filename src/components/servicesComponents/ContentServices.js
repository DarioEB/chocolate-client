import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { CheckIcon } from '@heroicons/react/outline';
import ch from '../../images/ch.png';
const ServicesContent = styled.div`
    display: grid;
    margin: 2rem 0;
    row-gap: 2.5rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
    }

    ._service {
        position: relative;
        padding: .2rem;
        transition: all .4s ease-out;
        &:hover {
            transform: scale(1.05);
        }
        font-family: var(--opSans);
        width: 92%;
        margin: 0 auto;
        @media (min-width: 768px) {
            width: 100%;
        }
        overflow: hidden;
        .detail {
            position: absolute;
            content: '';
            width: 14rem;
            height: 14rem;
            top: -5.5em;
            right: -5.5rem;
            opacity: 0.5;
            @media (min-width: 768px) {
                width: 16rem;
                height: 16rem;
                top: -6.5rem;
                right: -6.5rem;
            }
            background: var(--backcont);
            z-index: 6;
            border-radius: 50%;
        }
        .ch {
            position: absolute;
            z-index: 6;
            width: 3.5rem;
            height: 3.5rem;
            right: 2rem;
            top: 2rem;
            @media (min-width: 768px) {
                width: 4rem;
                height: 4rem;
                /* top: 3.25rem; */
                /* right: 3.25rem; */
            }
        }
        &::before {
            position: absolute;
            overflow: hidden;
            z-index: 4;
            background: var(--backcont);
            content: "";
            width: 100%;
            left: 0%;
            height: 100%;
            top: 0%;
            border-radius: 2rem;
        }
        ._service-content {
            overflow: hidden;
            z-index: 6;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 2rem;
            height: 100%;
            padding: 2rem;
            border-radius: 2rem;
            background-color: rgba(0, 0, 0, 0.86);
        }
        .card-title {
            text-align: left;
            h4 {
                margin: 0;padding: 0;
                color: var(--w);
                font-weight: 600;
                text-transform: uppercase;
                font-size: 2rem;
                @media (min-width: 768px) {
                    font-size: 2.4rem;
                }
            }
        }
        .card-services {
            ul {
                margin: 0;padding: 0;
                display: flex;
                flex-direction: column;
                gap: .75rem;
                @media (min-width: 768px) {
                    gap: 1rem;
                }
                li {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1rem;
                    p {
                        color: var(--w);
                        font-size: 1.5rem;
                        line-height: 1.5;
                        margin: 0;padding: 0;
                        /* letter-spacing: 1px; */
                    }
                    .icon {
                        font-size: 1.4rem;
                        color: var(--pink);
                    }
                    @media (min-width: 768px) {
                        p {
                            font-size: 1.6rem;
                        }        
                        .icon {
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
        .card-button {
            display: flex;
            flex-direction: column;
            .btn {
                width: 100%;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: .75rem;
                letter-spacing: 1px;
                @media (min-width: 768px) {
                    width: 65%;

                }
                border-radius: .5rem;
                padding: 1.5rem 0;
                font-size: 1.4rem;
                text-transform: uppercase;
                @media (min-width: 768px) {
                    font-size: 1.4rem;
                }
            }
        }
    }
`

const ContentServices = () => {

    const services = [
        {name: 'Especiales', services: ['Contact Center para más privacidad e intimidad.', 'Sex Shop', 'Room Service', 'Ambiente Climatizado', 'Jardin interno', 'Cochera privada', 'Direc TV con pack premium adultos']},
        {name: 'Super', services: ['Contact Center para más privacidad e intimidad.', 'Sex Shop', 'Room Service', 'Ambiente climatizado', 'Frigobar', 'Cochera Privada', 'Direc TV con pack premium adultos'] },
        {name: 'VIP', services: ['Contact Center para más privacidad e intimidad.', 'Sex Shop', 'Frigobar (Consumo no incluido)', 'Coktelería', 'Cafetería', 'Ambiente Climatizado', 'Jacuzzi', 'Jardin interno', 'Cochera Privada', 'Direct TV con Pack Premium']}
    ]

    return (
        <section className="section">
            <div className="content-rooms">
                <div className='container'>
                    <div className='title'>
                        <h1>Servicios</h1>
                        <span>
                            <Link
                                className="title-nav"
                                to={"/"}
                            >Home</Link>
                            /
                            <span>Servicios</span>
                        </span>
                    </div>
                    <ServicesContent>
                        {services.map( (service, i) => (
                            <div
                                key={i}
                                className="_service"
                            >
                                <div className="_service-content">
                                    <div className="detail">
                                        
                                    </div>
                                    <div className="ch">
                                        <img    
                                            src={ch}
                                            alt={"Logotipo Ch"}
                                        />
                                    </div>
                                    <div
                                        className="card-title"
                                    >
                                        <h4>{service.name}</h4>
                                    </div>
                                    <div className="card-services">
                                        <ul>
                                            {service.services.map( (s, i) => (
                                                <li
                                                    key={i}
                                                >
                                                    <CheckIcon 
                                                        className="icon"
                                                    />
                                                    <p>{s}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* <div className="card-button"> */}
                                        {/* <button
                                            className="btn"
                                        >
                                            <i className="fab fa-whatsapp"></i>
                                            <span>Consultar servicios</span>
                                        </button> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        ))}
                    </ServicesContent>
                </div>
            </div>
        </section>
    );
}

export default ContentServices;