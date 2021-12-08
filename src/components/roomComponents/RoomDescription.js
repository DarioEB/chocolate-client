import React, {useState} from 'react';
import styled from '@emotion/styled';
import {
    ChevronDownIcon,
    
} from '@heroicons/react/outline';

const RoomDescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 2rem;
    @media (min-width: 768px) {
        gap: 3rem;
        margin-top: 0;
    }
    ._name {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding-bottom: 2.5rem;
        border-bottom: .1rem solid #e1e1e1;
        color: var(--w);
        p {
            margin: 0;
            font-size: 1.4rem;
            &._branch {
                text-transform: uppercase;
            }
        }
        h4 {
            font-size: 2.4rem;
            margin: 0;
        }
        @media (min-width: 768px) {
            padding-bottom: 3rem;
            p {
                font-size: 1.6rem;
            }
            h4 {
                font-size: 2.8rem;
            }
        }
        .prices {
            display: flex;
            flex-direction: column;
            gap: .75rem;
            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                i{
                    font-size: .6rem;
                    position: relative;
                    width: 1rem;
                    height: 1rem;
                    &::before {
                        border-radius: 50%;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0%;
                        top: 0%;
                        content: '';
                        background: var(--backcont);
                    }
                }
                p {
                    font-size: 1.6rem;
                    @media (min-width: 768px) {
                        font-size: 1.8rem;
                    }
                    font-family: var(--opSans);
                }
            }
        }
    }
    ._whatsapp {
        
        /* padding-top: 1.5rem; */
        font-family: var(--opSans);
        display: flex;
        flex-direction: column;
        .btn-whatsapp {
            width: 100%;
            border-radius: .5rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background-color: forestgreen;
            padding: 1.25rem 0;
            color: var(--w);
            font-size: 1.4rem;
            font-weight: 600;
            letter-spacing: 1px;
            @media (min-width: 768px) {
                font-size: 1.6rem;
            }
        }
    }
    overflow: hidden;
    
    ._services {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: hidden;
        transition: height .2s ease-in;    
        position: relative;
        z-index: 5;
        ul {
            position: relative;
            z-index: 3;
            transition: all .2s ease-in;   
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            padding: 1rem;
            p {
                padding: 0;
                margin: 0;
                font-weight: 600;
                font-family: var(--opSans);
                font-size: 1.4rem;
                color: var(--w);
                @media (min-width: 768px){
                    font-size: 1.6rem;
                }
            }
        }
        &.hidden-services {
            
            ul {
                transform: translateY(-100%);
                max-height: 0;
                opacity: 0;
                
            }
        }
        &.view-services {
            overflow: visible;
            
            ul {
                opacity: 1;
                transform: translate(0%);
                max-height: 100rem;
                height: auto;
            }
        }

        .btn-services {
            position: relative;
            padding: .1rem;
            width: 100%;
            cursor: pointer;
            @media (min-width: 768px) {
                width: 100%;
            }   
            .icon {
                transition: all .2s ease-out;
                &.rotate {
                    transform: rotate(180deg);
                }
            }
            &::before {
                position: absolute;
                content: '';
                background: var(--backcont);
                width: 100%;
                height: 100%;
                left: 0%;
                top: 0%;
                border-radius: .5rem;
                z-index: 4;
            }
            .after {
                background-color: var(--b);
                border-radius: .5rem;
                position: relative;
                z-index: 5;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 1rem; 
                color: var(--w);
                gap: 1rem;
                font-size: 1.6rem;
                font-weight: 600;
                font-family: var(--opSans);
                @media (min-width: 768px) {
                    font-size: 1.8rem;
                }
            }
            
        }
    }
`

const RoomDescription = ({room}) => {

    const [services, setServices] = useState(true);

    return (
        <RoomDescriptionContent>
            <div className="_name">
                <p className="_branch">{room.branch.name}</p>
                <h4>{room.name.split(" ")[0]} {room.category.name} {room.name.split(" ")[1]}</h4>
                <div className="prices">
                    <div>
                        <i className="fas fa-circle"></i>
                        <p>Turno: $ {room.price}</p>
                    </div>
                    <div>
                        <i className="fas fa-circle"></i>
                    <p>Día completo: $ {room.priceAllDay}</p>
                    </div>
                </div>
            </div>
            <div className="_whatsapp">
                <a
                    href={`https://api.whatsapp.com/send?phone=${room.branch.phone}&text=${`Hola, quiero consultar por la ${room.name.split(" ")[0]} ${room.category.name} ${room.name.split(" ")[1]} de la ${room.branch.name}`.replace(/ /g,'%20')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                >
                    <span>Consultar Habitación</span>
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
            <div className={`_services ${services ? 'view-services' : 'hidden-services'}`}>
                <button 
                    onClick={() => setServices(!services)}
                    className="btn-services">
                    <span className="after">
                        <span>Servicios</span>
                        <ChevronDownIcon 
                            className={`icon ${services ? 'rotate' : ''}`}
                        />
                    </span>
                </button>
                <ul>
                    {room.services.map( (service, i) => (
                        <li
                            key={i}
                        >
                            <p>- {service}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </RoomDescriptionContent>
    );
}

export default RoomDescription;