import React, { useContext } from 'react';
import styled from '@emotion/styled';
import branchContext from '../../context/branch/branchContext';
// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
// Link
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// Import swiper core and required modules
import SwiperCore, {
    Autoplay,
    EffectFade,
    Pagination,
    Navigation
} from 'swiper/core';

// Install swiper modules
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const SwipContent = styled.div`
    height: 100%;background: rgb(31,32,34);
background: radial-gradient(circle, rgba(31,32,34,0.11278014623818278) 0%, rgba(0,0,0,1) 100%);display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 0rem;
    @media (min-width: 768px) {
        /* gap: 2rem; */
    }
    position: relative;
    .film {
        position: absolute;
        width: 100%;
        z-index: 5;
        height: 100%;
        left: 0%;
        top: 0%;
        content: '';
    }
    .title-swip {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media (min-width: 768px) {
            width: 70%;
            margin: 0 auto;
        }
        h2 {
            font-family: var(--opSans);
            color: var(--w);
            font-size: 4rem;
            line-height: 1.15;
            text-transform: uppercase;
            margin-bottom: 0;
            padding-bottom: 0;
            letter-spacing: 1px;
            font-weight: 700;
            /* text-shadow: -.1rem .1rem .5rem #e1e1e1; */
            @media (min-width: 768px) {
                font-size: 7.2rem;  
            }
        }
        span {
            color: var(--w);
            font-size: 1.4rem;
            text-align: center;
            letter-spacing: 1px;
            width: 75%;
            margin: 0 auto;
            font-weight: 400;
            line-height: 1.5;
            @media (min-width: 768px) {
                font-size: 1.8rem;
            }
        }
    }

    .buttons-swip {
        position: relative;
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
        /* margin-bottom: 8rem; */
        .btn-swip {
            opacity: 1;
            background: var(--backcont);
            filter: none;
            color: var(--w);
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem 3rem;
            border-radius: 1.5rem;
            font-weight: 600;
            font-size: 1.4rem;
            text-transform: uppercase;
            transition: all .25s ease-out;
            &.btn-w {
                background: var(--w);
                color: var(--b);
            }
            &.btn-b {
                border: .1rem solid var(--b);
                color: var(--w);
                background: var(--b);
            }
            &:hover {
                opacity: 1;
            }
            @media (min-width: 768px) {
                font-size: 1.6rem;
            }
        }
    }
`

const Slider = () => {

    const Branch = useContext(branchContext);
    const { branchs } = Branch;

    return (
        <section className="content-slider-home">
            <div className="container">
                <Swiper
                    spaceBetween={0}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        "delay": 4000,
                        "disableOnInteracion": false
                    }}
                    effect={"fade"}
                    className="my-swiper"
                >
                    <SwiperSlide
                        className="swiper"
                    >
                        <div
                            className="back-swiper-rooms back-swiper filter"
                        >
                            <SwipContent>
                                {/* <div className="film"> */}

                                {/* </div> */}
                                <div className="title-swip">
                                    <h2>Nuestras Habitaciones</h2>
                                    <span>
                                        Buscá entre nuestras tres categorías
                                        super, especiales y VIP.
                                    </span>
                                </div>
                                <div className="buttons-swip">
                                    {branchs.map( branch => (
                                        <Link
                                            key={branch._id}
                                            className="btn-swip"
                                            to={`/sucursales/${branch.route}`}
                                        >
                                            <span>{branch.name.split(" ")[0].replace("Sucursal", "Suc")} {branch.name.split(" ")[1]}</span>
                                            <i className="fas fa-chevron-right"></i>
                                        </Link>
                                    ))}
                                </div>
                            </SwipContent>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className="swiper"
                    >
                        <div
                            className="back-swiper-deco back-swiper filter"
                        >
                            <SwipContent>
                                <div className="title-swip">
                                    <h2>Servicios de decorados</h2>
                                    <span>
                                        Pedí tu servicio de decorado para eventos y 
                                        ocaciones especiales.
                                    </span>
                                </div>
                                <div className="buttons-swip">
                                    <Link
                                        to={"/servicios"}
                                        className="btn-swip btn-w"
                                    >
                                        <span>Conoce más</span>
                                        <i className="fas fa-chevron-right"></i>
                                    </Link>
                                </div>
                            </SwipContent>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className="swiper"
                    >
                        <div
                            className="back-swiper-sexshop back-swiper filter"
                        >
                            <SwipContent>
                                <div className="title-swip">
                                    <h2>Visita nuestro SexShop</h2>
                                    <span>
                                        Todos los productos eróticos que SexShop Chocolate
                                        tiene para vos
                                    </span>
                                </div>
                                <div className="buttons-swip">
                                    <a
                                        href="https://sex-shops.ar/?sIDCatalogoWEB=5b56f3b7-5517-4ef2-bcc7-5374121739be"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-swip btn-b"
                                    >
                                        <span>Ir al SexShop</span>
                                        <i className="fas fa-chevron-right"></i>
                                    </a>
                                </div>
                            </SwipContent>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </section>
    );
}

export default Slider;