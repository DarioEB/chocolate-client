import React from 'react';
import { PhoneIcon } from '@heroicons/react/outline';
import styled from '@emotion/styled';

const CallButton = styled.a`
    padding: 1.25rem 2.5rem;
    color: var(--w);
    font-family: var(--opSans);
    letter-spacing: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border-radius: .25rem;
    background: var(--backcont);
    span {
        font-size: 1.45rem;
        color: var(--w);
        font-weight: 600;
    }
`
const InformationContact = ({branchs}) => {
    
    return(
        <div className="information-contact">
            {branchs.map( (branch, i) => (
                <div 
                    key={i}
                    className="information-contact_branch"
                >
                    <h2>{branch.name}</h2>
                    
                    <p>Abierto 24 horas</p>
                    <p>Sin reserva previa</p>
                    <CallButton
                        href="tel:+543794348200"
                    >
                        <PhoneIcon 
                            className="icon"
                        />
                        <span>+54 (3794) 348200</span>
                    </CallButton>
                </div>
            ))}
            <div className="information-contact_email">
                <p>Correo electrónico:</p>
                <a 
                    href="mailto:consultasmoteleschocolate@gmail.com"
                    className="email"
                >consultasmoteleschocolate@gmail.com</a>
            </div>
            <div className="information-contact_social">
                <h4>Redes Sociales</h4>
                <div className="social-menu">
                    <a href="https://www.instagram.com/lovechchocolate/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/Lovechchocolate" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    {/* <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a> */}
                </div>
            </div>
        </div>
    );
}

export default InformationContact;