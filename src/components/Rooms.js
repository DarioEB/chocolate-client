import React, {Fragment, useContext, useEffect} from 'react';
import Filters from './roomsComponents/Filters';
import ListRooms from './roomsComponents/ListRooms';
import Spin from './layout/Spin';
import { Link, useParams } from 'react-router-dom';

// Contexts
import roomContext from '../context/room/roomContext';
import branchContext from '../context/branch/branchContext';
import { animateScroll as scroll } from "react-scroll";
const Rooms = () => {
    
    const params = useParams();
    
    // Branch Context
    const Branch = useContext(branchContext);
    const { loadbranch, getBranch, branch } = Branch;
    // Room Context
    const Room = useContext(roomContext);
    const { loadrooms, rooms, getRoomsBranch } = Room; 

    useEffect( () => {
        getBranch(params.branch);
        // eslint-disable-next-line
    }, [params]);

    useEffect( () => {
        getRoomsBranch(params.branch);
        // eslint-disable-next-line
    }, [params]);

    useEffect( () => {
        scroll.scrollToTop();
        // eslint-disable-next-line
    }, [scroll])

    if( !branch || 
        loadbranch ||
        loadrooms ||
        rooms.length === 0
    ) return <Spin />;


    return (
        <section className="content-rooms">
            <div className="container">
                <div className="title">
                    <h1>{branch.name}</h1>
                    <span>
                        <Link
                            to={"/"}
                            className="title-nav"
                        >Home</Link>
                        /
                        <span>{branch.name}</span>
                    </span>
                </div>
                <Fragment>
                    <div className="content-rooms_part">
                        <Filters />
                        <ListRooms />
                    </div>
                </Fragment>
            </div>

        </section>
    );
}

export default Rooms;