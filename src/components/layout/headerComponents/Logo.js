import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../../images/logo.png';
const Logo = ({menu, setMenu}) => {
    return (
        <div className="box-logo">
            <Link
                to={'/'}
                onClick={() => setMenu(false) }
                className="box-logo_link"
            >
                <img
                    src={LogoImage}
                    alt="Logotipo Chocolate"
                    className="box-logo_image"
                />
            </Link>
        </div>
    );
}

export default Logo;