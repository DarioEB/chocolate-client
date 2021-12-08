import React, { useContext } from 'react';
// Context 
import branchContext from '../../../context/branch/branchContext';
// Link
import { Link } from 'react-router-dom';
// Styled component
import styled from '@emotion/styled';

const BoxNavi = styled.div`
    position: relative;
    .branchs-nav_hover {
        position: absolute;
        top: 100%;
        left: -10%;
        background-color: var(--b);
        padding: 2rem 1rem;
        width: 250%;
        border-bottom: 1px solid var(--red);
        box-shadow: 0 .1rem .1rem var(--red);
        border-radius: .5rem;
        display: none;
        opacity: 0;
        ul {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
    }

    &:hover {
        .branchs-nav_hover {
            display: block;
            opacity: 1;
        }
    }
    
`;

const Navigation = () => {

    // Context Sucursales
    const BranchContext = useContext(branchContext);
    const { branchs } = BranchContext;

    return (
        <nav className="navigation">
            {branchs.map((branch, i) => (
                <BoxNavi
                    key={i}
                >
                    <Link
                        className="box-navi_link"
                        to={`/sucursales/${branch.route}`}
                    >{branch.name}</Link>

                </BoxNavi>
            ))}
            <BoxNavi>
                <a
                    href="https://sex-shops.ar/?sIDCatalogoWEB=5b56f3b7-5517-4ef2-bcc7-5374121739be"
                    target="blank"
                    rel="noopener noreferrer"
                    className="box-navi_link"
                >
                    Sex Shop
                </a>
            </BoxNavi>
            <BoxNavi>
                <Link
                    to="/servicios"
                    className="box-navi_link"
                >
                    Servicios
                </Link>
            </BoxNavi>
            <BoxNavi>
                <Link
                    to="/contacto"
                    className="box-navi_link"
                >
                    Contacto
                </Link>
            </BoxNavi>
        </nav>
    );
}

export default Navigation;