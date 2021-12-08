import React  from 'react';
import styled from '@emotion/styled';
import MobileNavigation from '../MobileNavigation';

const ContentMenu = styled.div`
    display: block;
    @media (min-width: 768px) {
        display: none;
    }
    width: 3.75rem;
    height: 3.75rem;
    .menu-btn {
        position: relative;
        z-index: 20;
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: all .225s ease-out;
        &.open {
            .menu-btn-burger {
                background: transparent;
                transform: rotate(90deg);
                &::before {
                    transform: translateY(0) rotate(45deg);
                }
                &::after {
                    transform: translateY(0)  rotate(-45deg);
                }
            }
        }
        .menu-btn-burger {
            width: 100%;
            height: .3rem;
            background: var(--backcont);
            border-radius: 2rem;
            transition: all .225s ease-in-out;
            &::before, 
            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: .3rem;
                background: var(--backcont);
                border-radius: 2rem;
                transition: all .225s ease-in-out;
            }
            &::before {
                transform: translateY(-.9rem);
            }
            &::after {
                transform: translateY(.9rem);
            }
        }
    }
`

const MobileButtonMenu = ({menu, setMenu}) => {

    if(menu) {
        document.querySelector('body').classList.add('overflow-hidden')
    } else {
        document.querySelector('body').classList.remove('overflow-hidden');
    }

    return(
        <ContentMenu>
            <div
                onClick={() => setMenu(!menu)}
                className={`menu-btn ${menu ? 'open' : ''}`}
            >
                <div className="menu-btn-burger"></div>
            </div>
            <MobileNavigation menu={menu} setMenu={setMenu} />
        </ContentMenu>
    );
}

export default MobileButtonMenu;