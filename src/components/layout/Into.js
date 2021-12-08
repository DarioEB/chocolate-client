import React, { useState } from 'react';

import { animateScroll as scroll } from "react-scroll";

const Into = () => {

    const [ y, saveY ] = useState();

    window.onscroll = () => {
        let _y = window.scrollY;
        saveY(_y);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return(
        <div className={`box-arrow ${(y >= 240) ? 'visible' : 'hidden'}`}>
            <i 
                className="fas fa-arrow-up"
                onClick={ scrollToTop}    
            ></i>
        </div>
    );
}

export default Into;