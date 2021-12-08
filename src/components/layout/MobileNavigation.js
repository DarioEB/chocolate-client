import React, {  useContext } from 'react';
// Link 
import { Link } from 'react-router-dom';
// Context
import branchContext from '../../context/branch/branchContext';
import roomContext from '../../context/room/roomContext';
import {
    CheckIcon,
    ClockIcon,
    PhoneIcon
} from '@heroicons/react/outline';

const MobileNavigation = ({ menu, setMenu }) => {

    // Context Branch
    const BranchContext = useContext(branchContext);
    const { branchs } = BranchContext;
    // Context Rooms
    const RoomContext = useContext(roomContext);
    const { getRooms} = RoomContext;


    // Petición de habitaciones
    const handleBranch = (branch) => {
        setMenu(!menu);
        getRooms(branch);
    }

    return (
        <div className={`mobile-menu ${menu ? 'right-0' : 'right-100'}`}>
            <div className="mobile-menu_navigation">
                <ul>
                    {branchs.map((branch, i) => (
                        <li
                            key={i}
                        ><Link
                            className="box-navi_link"
                            to={`/sucursales/${branch.route}`}
                            onClick={() => handleBranch(branch)}
                        >{branch.name}</Link>
                        </li>
                    ))}
                    <li><a className="box-navi_link" href="https://sex-shops.ar/?sIDCatalogoWEB=5b56f3b7-5517-4ef2-bcc7-5374121739be" target="_blank" rel="noopener noreferrer">Sex Shop</a></li>
                    <li><Link className="box-navi_link" to={"/servicios"} onClick={() => setMenu(!menu)}>Servicios</Link></li>
                    <li><Link className="box-navi_link" to={"/contacto"} onClick={() => setMenu(!menu)}>Contacto</Link></li>
                </ul>

                

                <div className="content-information-mobile-menu">
                    <div className="box-info-header">
                        <div className="mobile">
                            <PhoneIcon 
                                className="icon icon-gray"
                            />
                            <p>Sucursal Resistencia: 3794 34-8200</p>
                        </div>
                        <div className="mobile">
                            <PhoneIcon 
                                className="icon icon-gray"
                            />
                            <p>Sucursal Corrientes: 3794 34-8200</p>
                        </div>
                        <div className="mobile">
                            <CheckIcon 
                                className="icon icon-gray"
                            />
                            <p>Sin Reserva Previa</p>
                        </div>
                        <div className="mobile">
                            <ClockIcon 
                                className="icon icon-gray"
                            />
                            <p>Abierto 24 horas</p>
                        </div>
                    </div>
                </div>

                <div className="content-social-menu">
                    <div className="social-menu">
                        <a href="https://www.instagram.com/lovechchocolate/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/Lovechchocolate" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileNavigation;