import React, { useContext } from 'react';
// Context
import categoryContext from '../../context/category/categoryContext';
import roomContext from '../../context/room/roomContext';
import styled from '@emotion/styled';

const SelectCategory = styled.div`
    position: relative;
    padding: .1rem;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 100%;
    }
    &::before {
        position: absolute;
        width: 100%;
        left: 0%;
        top: 0%;
        height: 100%;
        background: var(--backcont);
        content: '';
        border-radius: .5rem;
        z-index: 4;
    }

    select {
        position: relative;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        z-index: 5;
        padding: 1.25rem;
        text-align: center;
        color: var(--w);
        background-color: var(--b);
        width: 100%;
        border: none;
        border-radius: .5rem;
        font-size: 1.4rem;
        font-family: var(--opSans);
        letter-spacing: 1px;
        outline: none;
        @media (min-width: 768px) {
            font-size: 1.6rem;
        }
        &::-ms-expand {
            display: none;
        }
        option {
            text-align: center;
        }
    }
`

const Filters = () => {

    const CategoryContext = useContext(categoryContext);
    const { categories } = CategoryContext;

    // Context Habitaciones
    const RoomContext = useContext(roomContext);
    const { getAllRooms, getFilterRooms } = RoomContext;

    const handleChangeFilter = e => {
        if(e.target.value === "all") {
            getAllRooms();
        } else {
            getFilterRooms(e.target.value);
        }
    }

    return(
        <div className="content-filters">
            <h4>Filtra las habitaciones por categoría</h4>
            <SelectCategory>
                <select
                    className="select-category"
                    onChange={handleChangeFilter}
                >
                    <option value="all">-- Todas --</option>
                    {categories.map( category => (
                        <option
                            key={category._id}
                            value={category._id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </SelectCategory>
        </div>
    );
}

export default Filters;