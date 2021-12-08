import React, { useEffect } from 'react';
import ContentServices from './servicesComponents/ContentServices';
import Especials from './servicesComponents/Especials';
import { animateScroll as scroll } from "react-scroll";
const Services = () => {

    useEffect( () => {
        scroll.scrollToTop();
        // eslint-disable-next-line
    }, [scroll])

    return (
        <>
            <ContentServices />
            <Especials />
        </>
    );
}

export default Services;