import React from 'react';
import { Accordion } from "react-faq-acordion";


            export default function App() {
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
            <div className="  faqCard "  >

            <Accordion className=""  data={data}  theme="background: linear-gradient(269.84deg, #FF005C -10.98%, rgba(0, 0, 0, 0.88) 100%);"/>
            </div>
            );
        }




