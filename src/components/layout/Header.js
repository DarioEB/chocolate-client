import React, { Fragment, useEffect, useContext, useState} from 'react'

// Logo
import Logo from './headerComponents/Logo';
// Navigation
import Navigation from './headerComponents/Navigation';
import MobileButtonMenu from './headerComponents/MobileButtonMenu';

// Contexts
import branchContext from '../../context/branch/branchContext';
import categoryContext from '../../context/category/categoryContext';

// InformationHeader 
import InformationHeader from './InformationHeader';
import Spin from './Spin';

const Header = () => {

    // Context Sucursales
    const BranchContext = useContext(branchContext);
    const { getBranchs, branchs, loadbranchs } = BranchContext;

    const CategoryContext = useContext(categoryContext);
    const { getCategories } = CategoryContext;

    // State del menu responsive
    const [menu, setMenu] = useState(false);

    useEffect( () => {
        const downloadBranchs = () => getBranchs();
        const downloadCategories = () => getCategories();
        downloadBranchs();
        downloadCategories();
        // eslint-disable-next-line
    }, []);

    if(branchs.length === 0 || loadbranchs) {
        return <Spin />
    }

    return (
        <Fragment>
            <header>
                <InformationHeader />
                <div className="container">
                    <div className="content-header">
                        <Logo menu={menu} setMenu={setMenu} />
                        <Navigation />
                        <MobileButtonMenu menu={menu} setMenu={setMenu}  />
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;