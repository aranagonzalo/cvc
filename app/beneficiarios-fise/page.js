"use client";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
    {
        src: "/images/canales-de-atencion/telefono.svg",
        alt: "Icono de Teléfono CVC",
        label: "CVC Fono | 24h",
        color: "red",
    },
    {
        src: "/images/canales-de-atencion/whatsapp.svg",
        alt: "Icono WhastApp",
        label: "WhatsApp",
        color: "green",
    },
    {
        src: "/images/canales-de-atencion/direcciones.svg",
        alt: "Icono de edificio",
        label: "Centros de atención",
        color: "sky",
    },
    {
        src: "/images/canales-de-atencion/medios-de-pago.svg",
        alt: "Icono de billetes",
        label: "Medios de pago",
        color: "blue",
    },
];

const Page = () => {
    const [showDetail, setShowDetail] = useState(false);

    const [detail, setDetail] = useState({});

    const handleClick = (item) => {
        setShowDetail(true);
        item.label == "CVC Fono | 24h"
            ? setDetail({
                  color: item.color,
                  src: "/images/canales-de-atencion/telefono.svg",
                  alt: "Icono de Teléfono CVC",
                  label: "CVC Fono | 24h",
              })
            : item.label == "WhatsApp"
            ? setDetail({
                  color: item.color,
                  src: "/images/canales-de-atencion/whatsapp.svg",
                  alt: "Icono WhastApp",
                  label: "WhatsApp",
              })
            : item.label == "Centros de atención"
            ? setDetail({
                  color: item.color,
                  src: "/images/canales-de-atencion/direcciones.svg",
                  alt: "Icono de edificio",
                  label: "Centros de atención",
              })
            : item.label == "Medios de pago"
            ? setDetail({
                  color: item.color,
                  src: "/images/canales-de-atencion/medios-de-pago.svg",
                  alt: "Icono de billetes",
                  label: "Medios de pago",
              })
            : null;
    };

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Balones de gas"
                src="/images/beneficiarios-fise/beneficiarios-fise.jpg"
                title="Beneficiarios FISE"
            />
            <section className="w-full flex flex-col bg-custom-cream gap-16 px-28 py-32">
                <h1 className="text-6xl font-medium">¿Sábes qué es el FISE?</h1>
                <p className="text-4xl font-light w-[90%] leading-tight">
                    Es el fondo de inclusión Social Energético (FISE) creado por
                    la ley Nº 29852, que asignara recursos para la compensación
                    social y promoción para el acceso al GLP de los sectores
                    vulnerables. Lo cual significa que a través de este Fondo se
                    entregara mensualmente vales a los ciudadanos de las
                    regiones con mayor nivel de pobreza, para que compren{" "}
                    <strong className="font-semibold">
                        un balón de GLP de 10 kg con S/. 25.00 de descuento.
                    </strong>
                </p>
            </section>
            <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/BcuaXzBUfno?si=OrvY0TgsZjai6ln9&amp;controls=0"
                title="CVC Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            <section className="w-full flex h-[640px] relative overflow-hidden">
                <div className="w-1/2 flex justify-start items-end h-full">
                    <div className="flex justify-start items-end bg-custom-green h-full p-24 w-full">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="text-6xl text-custom-cream w-1/2"
                        >
                            ¿Quiénes serán los beneficiados?
                        </motion.h1>
                    </div>
                </div>
                <div className="w-1/2 flex h-full justify-center p-12 bg-custom-cream">
                    <ul className="flex flex-col justify-evenly items-center w-3/4 m-0">
                        <li className="list-disc font-light leading-tight text-4xl">
                            Los usuarios residenciales de electricidad con
                            consumo promedio anual menor o igual a 70 KWh y que
                            cuenten con cocina a GLP.
                        </li>
                        <li className="list-disc font-light leading-tight text-4xl">
                            Las personas que no cuentan con el servicio
                            residencial de electricidad pero si cuentan con una
                            cocina a GLP.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Page;
