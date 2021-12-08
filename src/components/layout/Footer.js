import React from 'react';
import styled from '@emotion/styled';
import {
    PhoneIcon, 
    CheckIcon,
    ClockIcon
} from '@heroicons/react/outline';
// Link
import { Link } from 'react-router-dom';
// Logotipo CH
import ch from '../../images/ch.png';

const FooterContainer = styled.footer`
    /* min-height: 25vh; */
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        /* margin: 12.5vh 0; */
    }
`

const ContentFooter = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 25vh;
    justify-content: center;
`

const FooterLayout = styled.div`
    display: grid;
    gap: 2rem;
    @media (min-width: 768px) {
        gap: 4rem;
        grid-template-columns: 1fr 2fr 1fr 1fr;
        padding: 12.5vh 0;
    }
    padding: 6.25vh 0;
    position: relative;
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        background: var(--backcont);
        left: 0%;
        top: 0%;
        height: .15rem;
        border-radius: 2rem;
    }
    h4 {
        font-size: 1.8rem;
        /* color: var(--w); */
        margin: 0;
        text-transform: uppercase;
    }
`

const BoxLayout = styled.nav`
    font-family: var(--opSans);
    ul {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        li {
            &.information {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: .5rem;
                p {
                    font-size: 1.15rem;
                    padding: 0;margin: 0;
                    color: var(--g);
                    text-transform: uppercase;
                    @media (min-width: 768px) {
                        font-size: 1.3rem;
                    }
                }
                .icon {
                    color :var(--g);
                }
            }
            .link-foo {
                font-size: 1.15rem;
                color: var(--g);
                text-transform: uppercase;
                transition: all .22s ease-out;
                &:hover {
                    color: var(--red);
                }
            }

        }
    }
    @media (min-width: 768px) {
        ul {
            li {
                .link-foo {
                    font-size: 1.35rem;
                }
            }
        }
    }
`

const SocialFooter = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        li {
            .link-social {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: .5rem;
                justify-content: flex-start;
                @media (min-width: 768px) {
                    justify-content: flex-end;
                    span {
                        font-size: 1.35rem;
                    }
                }
                span 
                {
                    flex: 1;
                    color: var(--g);
                    font-size: 1.15rem;
                    text-transform: uppercase;
                }
                
                &:hover {
                    i {
                        background: var(--backcont);
                        color: var(--w);
                        border: none;
                    }
                    span {
                        color: var(--red);
                    }
                }
                i{
                    display: flex;
                    border-radius: 50%;
                    flex: 0 0 3.5rem;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 3.25rem;
                    height: 3.25rem;
                    font-size: 1.4rem;
                    transition: all .25s ease-in-out;
                    background: var(--backcont);
                    color :var(--w);
                    border: none;
                    @media (min-width: 768px) {
                        border: .1rem solid var(--g);
                        background: transparent;
                        color: var(--g);
                    }
                }
            }
        }
    }
`

const Copy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    img {
        width: 6.5rem;
    }
    p {
        padding: 0;margin: 0;
        font-weight: 400;
        font-family: var(--opSans);
        color: var(--w);
        font-size: 1.3rem;

    }
`


const Footer = () => {
    
    
    return(
        <>
        <FooterContainer>
            <div className="container">
                <ContentFooter>
                    <FooterLayout>
                        <BoxLayout>
                            <ul>
                                <h4 className="text-gradient">Navegación</h4>
                                <li>
                                    <Link
                                        to={"/sucursales/sucursal-corrientes"}
                                        className="link-foo"
                                    >Sucursal Corrientes</Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/sucursales/sucursal-resistencia"}
                                        className="link-foo"
                                    >Sucursal Resistencia</Link>
                                </li>
                                <li>
                                    <a
                                        href={`https://sex-shops.ar/?sIDCatalogoWEB=5b56f3b7-5517-4ef2-bcc7-5374121739be`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-foo"
                                    >Sex Shop</a>
                                </li>
                                <li>
                                    <Link
                                        to={"/servicios"}
                                        className="link-foo"
                                    >Servicios</Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/contacto"}
                                        className="link-foo"
                                    >Contacto</Link>
                                </li>
                            </ul>
                        </BoxLayout>
                        <BoxLayout>
                            <ul>
                                
                                <h4 className="text-gradient">Información</h4>
                                <li className="information">
                                    <PhoneIcon 
                                        className="icon"
                                    />
                                    <p>Sucursal Corrientes: +54 (3794) 348200</p>
                                </li>
                                <li className="information">
                                    <PhoneIcon 
                                        className="icon"
                                    />
                                    <p>Sucursal Resistencia: +54 (3794) 348200</p>
                                </li>
                                <li className="information">
                                    <CheckIcon 
                                        className="icon"
                                    />
                                    <p>Sin reserva previa</p>
                                </li>
                                <li className="information">
                                    <ClockIcon 
                                        className="icon"
                                    />
                                    <p>Abierto 24 horas</p>
                                </li>
                            </ul>
                        </BoxLayout>
                        <div></div>
                        <SocialFooter>
                            <ul>
                                
                                <h4 className="text-gradient">Redes Sociales</h4>
                                <li>
                                    <a
                                        className="link-social"
                                        href={`https://www.instagram.com/lovechchocolate/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link-social"
                                        href={`https://www.facebook.com/Lovechchocolate`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                        <span>Facebook</span>
                                    </a>
                                </li>
                            </ul>
                        </SocialFooter>
                    </FooterLayout>  
                </ContentFooter>
            </div>
        
            <Copy>
                <div>
                    <img 
                        src={ch}
                        alt="Logotipo Ch"
                    />
                </div>
                <p>&copy; Copyright {new Date().getFullYear()} - Moteles Chocolate</p>
            </Copy>
        </FooterContainer>
        </>
    );
}

export default Footer;