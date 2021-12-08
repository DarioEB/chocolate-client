import React, { useContext } from 'react';
import branchContext from '../../context/branch/branchContext'
import styled from '@emotion/styled';
import image1 from '../../images/especial-services/mobile/1.jpg';
import image2 from '../../images/especial-services/mobile/2.jpg';
import image3 from '../../images/especial-services/mobile/3.jpg';
import image4 from '../../images/especial-services/mobile/4.jpg';
import image5 from '../../images/especial-services/mobile/5.jpg';
import image6 from '../../images/especial-services/mobile/6.jpg';
import image7 from '../../images/especial-services/mobile/7.jpg';
// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// Import swiper core and required modules
import SwiperCore, {
    Autoplay,
    EffectFade,
    Pagination
} from 'swiper/core';
import { TitleContent } from '../layout/UI';

// Install swiper modules
SwiperCore.use([Pagination, Autoplay, EffectFade]);

const ServiceEspecial = styled.div`
    width: 92%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 100%; 
    }
    

    .image {
        border-radius: 1rem;
        padding: .15rem;
        position: relative;
        &::before {
            position: absolute;
            width: 100%;
            z-index: 4;
            left: 0%;
            top: 0%;
            height: 100%;
            border-radius: 1rem;
            content: "";
            /* background: var(--backcont); */
        }
        .image-after {
            position: relative;
            background-color: var(--b);
            border-radius: 1rem;
            z-index: 5;
            padding: 2rem 0;
            @media (min-width: 768px) {
                padding: 2rem;
            }
        }
    }

    img {
        /* border-radius: 1rem; */
    }

`

const ButtonEspecials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
    .btn {
        position: relative;
        width: 92%;
        @media (min-width: 768px) {
            width: auto;
        }
            border-radius: 1rem;
        &::before {
            position: absolute;
            width: 100%;
            border-radius: 1rem;
            content: '';
            height: 100%;
            left: 0%;
            right: 0%;
            background: var(--backcont);
            z-index: 4;
        }
        padding: .1rem;
    }

    .btn-content {
        color: var(--w);
        background: var(--b) ;
        padding: 1.5rem 3rem;
        display: flex;
        letter-spacing: 1px;
        font-weight: 600;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        justify-content: center;
        text-transform: uppercase;
        border-radius: 1rem;
        position: relative;
        background-color: rgba(0, 0,0, 0.8);
        z-index: 5;
        span {
            position: relative;
            
            font-size: 1.4rem;
            @media (min-width: 768px) {
                font-size: 1.4rem;
            }
        }
    }
`

const Especials = () => {

    const Branch = useContext(branchContext);

    const { branchs } = Branch;

    const images = [
        {image: image1},
        {image: image2},
        {image: image3},
        {image: image4},
        {image: image5},
        {image: image6},
        {image: image7}
    ]
    console.log(branchs);

    return (
        <section className="section">
            <div className="container">
                <TitleContent>
                    <h2>Servicios con decorados especiales</h2>
                </TitleContent>
                <div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            "delay": 3800,
                            "disableOnInteracion": false
                        }}
                        breakpoints={{
                            "768": {
                                "slidesPerView": 3,
                                "spaceBetween": 45
                            }
                        }}
                    >
                        {images.map( (image, i) => (
                            <SwiperSlide
                                key={i}
                            >
                                <ServiceEspecial>
                                    <div className="image">
                                        <div className="image-after">
                                            <img 
                                                src={image.image}
                                                alt={"Imagen Servicio Especial"}
                                                className="filter"
                                            />
                                        </div>
                                    </div>
                                </ServiceEspecial>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <ButtonEspecials>
                        <a
                            href={`https://api.whatsapp.com/send?phone=543794348200&text=${`Hola, quisiera conocer un poco más sobre los servicios con decorados especiales que ofrecen`.replace(/ /g,'%20')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            <div className="btn-content">
                                <span>Servicios especiales</span>
                                <i className="fab fa-whatsapp"></i>
                            </div>
                        </a>
                    </ButtonEspecials>
                </div>
            </div>
        </section>
    );
}

export default Especials;