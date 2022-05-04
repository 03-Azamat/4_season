import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const DetailPage = ({el}) => {
    const basket = useSelector(s => s.basket)
    console.log(el, "ELELELE")
    const dispatch = useDispatch()

    useEffect(()=>{

    })

    return (
     <li className="stule_btn my-1 text-base">
         <label onChange="" key={el.id} for={`${el.id}`} className="stule mx-3"
         >
             <input type="radio" id={`${el.id}`} name="inputRadio" value={`${el.title}`}/>{el.title}
         </label>
     </li>
    );
};
export default DetailPage;