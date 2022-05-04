import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../http/api";


const CategoryProducts = ({el}) => {
//https://api.tez-shop.com.kg/prod-list/
    console.log(window.location.pathname.slice(-1))
    const query = window.location.pathname.slice(-1)
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const basket = useSelector(s => s.basket)
    const basketItems = basket.some( basket => basket.id === details.id)
    console.log(basketItems , "basketItems")

    const  getAll = async () => {
        setLoading(true)
        const url =  await axios("https://api.tez-shop.com.kg/prod-list")
        const {data} = await url
        await setProducts(data)
        return products
    }

    useEffect(() => {
    getAll().then(() => {
           setLoading(false)
           setFilteredProducts(products.filter(el => {
               return el.category.id === +query
           }))
    })
    },[products])

    console.log(products)
    console.log( "proo", products.filter(el => {
        return el.category.id === +query
    }))
    const [details, setDetails] = useState([])





    return (
        <div className="container">{filteredProducts.length === 0 ? (<div className="Loading">
                <div className="loading ">
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>) :
<div>
            <div className="PRODUCT ">

                {filteredProducts.map(el => (
                    <div>
                        <Link to="">
                            <h1 className="dark:bg-black">  {el.title}  </h1>
                        </Link>
                        <div className="product  ">

                            <div className=" productLink  ">
                                <div className="terProduct">

                                    <Link class=""  to={`/details/${el.id}`}>
                                        <img src={el.img} alt="no image" className="imgProduct "/>
                                        <h1 className="text-lg nameProduct text-black">{el.name}</h1>
                                        <h1 style={{fontSize: "24px", color: "#FF005C"}}
                                            className="text-base   mt-4">{el.price} ₺ </h1>
                                    </Link>

                                    <div className="px-5    pb-5 dark:bg-white-500">

                                        <div className="flex   justify-between items-center">
                                            <button
                                                onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}

                                                className="w-36 ert   h-9 rounded-md text-white text-lg mt-5">
                                                {
                                                    basketItems ? "Добавлено " : "В кoрзину"
                                                }

                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                ))
                }
            </div>
            </div>

        }
        </div>
    );
};

export default CategoryProducts;
