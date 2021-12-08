import React, { useContext } from 'react';
import styled from '@emotion/styled';

import whatsappImage from '../../images/whatsapp2.png'
import branchContext from '../../context/branch/branchContext';

const CWhatsapp = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    
    z-index: 20000;
    @media (min-width: 768px) {
        bottom: 1.5rem;
        right: 1.5rem;
    }
    @keyframes slidenumbers {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .content-whatsapp {
        display: flex;
        flex-direction: column;
        position: relative;
        
        z-index: 200000;
        opacity: 0.9;
        transition: all .2s linear;
        
        &:hover {
            opacity: 1;
            .numbers {
                display: flex;
            }
        }
        .btn-whatsapp {
            width: 5.25rem;
            height: 5.25rem;
            
            @media (min-width: 768px) {
                width: 6rem;
                height: 6rem;
            }
        }
        .numbers {
            padding: .5rem;
            position: absolute;
            background-color: rgb(34, 139, 34, 1);
            top: calc(0% - 5rem);
            @media (min-width: 768px) {
                top: calc(0% - 4.7rem);
            }
            border-bottom-right-radius: 0;
            /* display: flex; */
            display: none;
            flex-direction: column;
            gap: .75rem;
            width: 400%;
            left: -400%;
            transition: all .2s linear;
            opacity: 0;
            animation-name: slidenumbers;
            animation-duration: .225s;
            animation-delay: .225s;
            animation-fill-mode: forwards; 
            border-radius: .5rem;
            text-align: center;
            a {
                cursor: pointer;
                font-weight: 600;
                text-transform: uppercase;
                padding: 1.25rem;
                border-radius: .5rem;
                font-size: 1.1rem;
                @media (min-width: 768px) {
                    font-size: 1.3rem;
                }
                color: var(--w);
                border: 1px solid var(--w);
                i {
                    margin-left: .5rem;
                    font-size: 1.4rem;
                }
            }
        }
    }

`

const Whatsapp = () => {

    const BranchContext = useContext(branchContext);
    const { branchs, loadbranchs } = BranchContext;

    if(!branchs || loadbranchs) return null;

    return(
        <CWhatsapp>
            <div className="content-whatsapp">
                <div className="numbers">
                    
                    {branchs.map( (branch, i) => (
                        <a 
                            key={i}
                            href={`https://api.whatsapp.com/send?phone=${branch.phone}&text=${`Hola, quiero consultar una habitación de ${branch.name}`.replace(/ /g,'%20')}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >{branch.name}<i className="fab fa-whatsapp"></i></a>
                    ))}
                </div>
                <button className="btn-whatsapp">
                    <img 
                        className="filters"
                        src={whatsappImage}
                        alt="Logotipo de whatsapp"
                    />  
                </button>
            </div>
        </CWhatsapp>
    );
}

export default Whatsapp;