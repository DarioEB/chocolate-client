import React from 'react';
import styled from '@emotion/styled';

const TextHomeContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 45vh;

    .text-home-layout {
        display: grid;
        grid-template-columns: 1fr 5fr;
    }
    position: relative;
`

const Text = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(0,0,0);
    background: linear-gradient(122deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7122199221485469) 100%, rgba(0,0,0,0) 100%);
    p {
        width: 95%;
        margin: 0 auto;
        @media (min-width: 768px) {
            width: 65%;
        }
        text-align: center;
        color: var(--w);
        letter-spacing: 1px;
        font-family: var(--opSans);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.5;
        @media (min-width: 768px) {
            font-size: 1.8rem;
        }
    }
    .hashtag {
        margin-top: 4rem;
        font-weight: 600;
        font-size: 1.8rem;
    }
`

const TextHome = () => {

    return (
        <section className="content-texthome">
            <div className="container">
                <TextHomeContent>
                    <div className="text-home-layout">
                        <div></div>
                        <div className={"image-text-home"}></div>
                    </div>
                    <Text>
                        <p>
                            Un concepto único y de calidad en Moteles.
                            Contamos con dos sucursales, una en Corrientes
                            Capital y la otra en Resistencia Chaco.
                            Vení a conocernos y disfruta en nuestras habitaciones
                            de una experiencia inolvidable de placer.
                            Conoce Chocolate.
                        </p>
                        <p className="hashtag">#AlServicioDelAmor</p>
                    </Text>
                </TextHomeContent>
            </div>
        </section>
    );
}

export default TextHome;