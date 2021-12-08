import React from 'react';
import {
    CheckIcon,
    ClockIcon,
    PhoneIcon
} from '@heroicons/react/outline';

const InformationHeader = () => {
    
    return(
        <div className="content-info_header">
            <div className="container">
                <div className="box-info-header">
                    <div className="desktop">
                        <PhoneIcon 
                            className="icon icon-gray"
                        />
                        <p>Sucursal Resistencia: 3794 34-8200</p>
                    </div>
                    <div className="desktop">
                        <PhoneIcon 
                            className="icon icon-gray"
                        />
                        <p>Sucursal Corrientes: 3794 34-8200</p>
                    </div>
                    <div className="desktop">
                        <CheckIcon 
                            className="icon icon-gray"
                        />
                        <p>Sin Reserva Previa</p>
                    </div>
                    <div className="desktop">
                        <ClockIcon 
                            className="icon icon-gray"
                        />
                        <p>Abierto 24 horas</p>
                    </div>
                    <div className="social-menu">
                        <a href="https://www.instagram.com/lovechchocolate/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/Lovechchocolate" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        {/* <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationHeader;