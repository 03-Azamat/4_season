import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Menu = () => {
    const {basket} = useSelector((store) => store)
    return (
        <div>
         </div>
    );
};

export default Menu;