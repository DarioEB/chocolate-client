import React, { useEffect} from 'react';
// HomeComponents
import Slider from './homeComponents/Slider'
import TextHome from './homeComponents/TextHome';
import Bann from './homeComponents/Bann';
import { animateScroll as scroll } from "react-scroll";
const Home = () => {
    
    useEffect( () => {
        scroll.scrollToTop();
        // eslint-disable-next-line
    }, [scroll])

    return(
        <>
            <Slider />
            <TextHome />
            <Bann />
        </>
    );
}

export default Home;