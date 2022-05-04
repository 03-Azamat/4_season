import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";
import {useDispatch} from "react-redux";
import RecSliders from "../companents/RecSliders";
import {api} from "../http/api";
import {Accordion} from "react-faq-acordion";

const Catalog = () => {
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    console.log(catalog , "CATALOG")
    useEffect(() => {
        api("/category-list/")

            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])

    const data = [

        {

            title: "Porque ese precio?",
            paragraph: "Nos esforzamos por ofrecer el mejor precio del mercado"
        },
        {
            title: "Como pagar en linea?",
            paragraph:
                "Contamos con una gran variedad de metodos de pago en linea desde tarjeta de credito / debito, y pasarelas de pago como paypal, stripe, 2checkout"
        },
        {
            title: "Reclamar un reembolso",
            paragraph:
                'Para pedir un reembolso debes hacerlo desde la seccion "Mi Cuenta" '
        },
        {
            title: "Reclamar Garantia",
            paragraph:
                "Asiste a uno de nuestros centros de Soporte Tecnico oficiales."
        }
    ];
    return (
        <div className="container mx-auto" >{catalog.length === 0 ? (<div className="Loading">
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
            <div className="grid catalogSET sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4   pt-[50px]   ">
                {
                    catalog.map(el => (
                        <Card el={el} key={el.id}/>
                    ))
                }
            </div>

              <RecSliders/>
                <div className=" Porque "  style={{  background:" linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)",}}>
                    <Accordion className=" personIK " data={data}  theme="background: linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%);"/>
                </div>

            </div>

        }
        </div>
    );
};
export default Catalog;