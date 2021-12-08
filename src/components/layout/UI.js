import styled from '@emotion/styled';


export const RoomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 100%;
    }
    .room-image {
        border-radius: .5rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ._image {
            transform: scale(1.25);
            @media (min-width: 768px) {
                transform: scale(1);
            }
            border-radius: .5rem;
            transition: all .5s ease-out;
        }
        &:hover {
            ._image {
                transform: scale(1.5);
            }
        }
        overflow: hidden;
        position: relative;
        .category {
            position: absolute;
            left: 0%;
            top: 0%;
            /* border-radius: .25rem; */
            padding: .25rem 1rem;
            background: var(--backcont);
            p {
                padding: 0;
                margin: 0;
                font-size: 1.15rem;
                font-weight: 400;
                color: var(--w);
                font-family: var(--opSans);
                @media (min-width: 768px) {
                    font-size: 1.2rem;
                }
            }
        }
        .ch {
            position: absolute;
            bottom: .5rem;
            right: .5rem;
            width: 3.2rem;
        }
    }
    .room-description {
        display: flex;
        flex-direction: column;
        .room-name {
            display: flex;
            flex-direction: column;
            /* align-items: flex-start; */
            gap: 1rem;
            padding: 1rem 0;
            p {
                color: var(--w);
                font-size: 1.4rem;
                text-align: center;
                text-transform: initial;
                margin: 0;padding: 0;
                letter-spacing: 1px;
                &._name {
                    text-transform: uppercase;
                    font-family: var(--opSans);
                    font-size: 1.6rem;
                    margin-top: .8rem;
                    @media (min-width: 768px ) {
                        font-size: 1.8rem;
                    }
                }
                &._category span {
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }
            }
        }
    }

`

export const TitleContent = styled.div`
    margin: 2rem 0 4rem 0;
    text-align: center;
    h2 {
        margin: 0;
        padding: 0;
        font-size: 3.2rem;
        color: var(--w);
        /* letter-spacing: 1px; */
        font-family:var(--opSans);
        font-weight: 600;
        text-transform: uppercase;
        @media (min-width: 768px) {
            font-size: 3.6rem;
        }
    }
`