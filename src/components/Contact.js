import React, { useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import InformationContact from './contactComponents/InformationContact';
import FormContact from './contactComponents/FormContact';
import branchContext from '../context/branch/branchContext';
import { animateScroll as scroll } from "react-scroll";
import Spin from './layout/Spin';
import About from './contactComponents/About';
const Contact = () => {

    const Branch = useContext(branchContext);
    const { getBranchs, loadbranchs, branchs } = Branch; 

    useEffect( () => {
        getBranchs();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        scroll.scrollToTop();
        // eslint-disable-next-line
    }, [scroll])

    if(loadbranchs) return <Spin />
    
    return(
        <section className="content-contact">
            <div className="container">
                <div className="title">
                    <h1>Contacto</h1>
                    <span>
                        <Link to={'/'} className="title-nav">Home</Link> /
                        <span>Contacto</span>
                    </span>
                </div>
                <About />
                <div className="content-contact_part">
                    <InformationContact 
                        branchs={branchs}
                    />
                    <FormContact 

                    />
                </div>
            </div>
        </section>
    );
}

export default Contact;