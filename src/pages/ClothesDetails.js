import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import DetailPage from "./DetailPage";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../http/api";


const ClothesDetails = ({el}) => {

    const dispatch = useDispatch()
    const {clothesId} = useParams()
    const [details, setDetails] = useState([])
    const {
        img,
        description,
        name,
        price,
    } = details

    useEffect(() => {
        api(`/prod-detail/${clothesId}/`)
            .then(({data}) => {
                setDetails(data)
                console.log(data, "fsjdafA")
            })
    }, [])
    console.log(details, "shirin")

    const basket = useSelector(s => s.basket)
    const basketItems = basket.some(basket => basket.id === details.id)
    console.log(basketItems, "basketItems")
    const [size, setSize] = useState("")
    const onChangeValue = (event) => {
        console.log(event.target.value)
        setSize(event.target.value)
    }
    console.log(size, "size")
    return (
        <div style={{marginTop: "50px"}}>
            <div className="m-10 detailCard  ">
                <div>
                    <img className="ml-14 detail-img" src={img} alt=""/>
                </div>
                <div className="clothesdetails-div">

                    <h1 className=" description  "> {name}</h1>
                    <h1 className="text-base   priceNIK mt-4 price ">{price} ₺</h1>
                    <p className="tab">Таблица размеров:</p>

                    <div className="flex items-center my-5 detailBTN ">
                        <ul className="flex ">
                            {
                                details?.prod_detail?.map(el => (
                                    <DetailPage onChangeValue={onChangeValue} el={el}/>
                                ))
                            }
                        </ul>
                        <h1 className=" font-medium text-4xl my-5 ml-6">Описание</h1>

                        <div className="flex items-center my-5 detailBTN ">

                            <div className="flex items-center      detailBTNs ">
                                <ul className="flex detailBTNs ">
                                    {
                                        details?.prod_detail?.map(el => (
                                            <DetailPage onChangeValue={onChangeValue} el={el}/>
                                        ))
                                    }
                                </ul>

                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center my-5">

                            </div>
                            <p>Цвет:</p>
                            <div className="">
                                <div className="flex items-center my-5">
                                    {
                                        details?.product_detail?.map(el => (
                                            <div key={el.id} style={{
                                                width: "80px",
                                                height: "95px"
                                            }} className="mx-3">
                                                <img src={el.color} alt=""/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className=" my-8 ">
                                {/*{*/}
                                {/*    details.map(el=>(*/}
                                {/*        <button*/}
                                {/*            onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}*/}
                                {/*            style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}*/}
                                {/*            className="w-36 h-9 rounded-md text-white text-lg mt-5">*/}
                                {/*            В корзину*/}
                                {/*        </button>*/}
                                {/*    ))*/}
                                {/*}*/}
                            </div>


                            <div className="  bayBtn  ">
                                <div className="   ">

                                    <div className="flex justify-between items-center">
                                        <button
                                            onClick={() => {
                                                details.clothSize = size
                                                dispatch({type: "ADD_TO_BASKET", payload: details})
                                            }}

                                            className="w-52 h-9 detail-btn rounded-md text-white text-lg mt-5">
                                            {
                                                basketItems ? "Добавлено" : "Добавить в карзину"
                                            }
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}
                                        style={{border: "solid #72072D\n", color: "#72072D\n"}}
                                        className="w-52 h-9 btn1 rounded-md text-white text-lg mt-5">
                                        <Link to="/basket">
                                            Купит сейчас
                                        </Link>

                                    </button>
                                    <p className="mb-10 detail-p "> {description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClothesDetails;

