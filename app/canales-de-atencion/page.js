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
                alt="Trabajador de CVC Energía saludando"
                src="/images/canales-de-atencion/canales-de-atencion.jpg"
                title="Comunícate con nosotros"
            />
            <section className="w-full flex h-[700px] relative overflow-hidden">
                <div className="w-1/2 flex justify-start items-end h-full">
                    <div className="flex justify-start items-end bg-custom-cream h-full p-24">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="text-6xl text-custom-grey w-1/2"
                        >
                            Conoce nuestros canales
                        </motion.h1>
                    </div>
                </div>
                {showDetail ? (
                    <div className={`bg-custom-${detail.color} w-1/2 p-16`}>
                        <div
                            className="flex w-fit items-center cursor-pointer pb-2 gap-4"
                            onClick={() => setShowDetail(false)}
                        >
                            <Image
                                alt="Boton de regreso"
                                src="/images/canales-de-atencion/back.svg"
                                width={32}
                                height={32}
                            />
                            <p className="text-2xl font-semibold text-custom-cream -translate-y-[2px]">
                                regresa
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                width={60}
                                height={60}
                                src={detail.src}
                                alt={detail.alt}
                            />
                            <h1 className="text-xl text-custom-cream pt-2 pb-12">
                                {detail.label}
                            </h1>
                            {detail.label == "CVC Fono | 24h" ? (
                                <>
                                    <p className="text-2xl text-custom-cream pt-12">
                                        Lima
                                    </p>
                                    <p className="text-2xl text-custom-cream pb-8">
                                        (01) 640-0770
                                    </p>
                                    <p className="text-2xl text-custom-cream">
                                        Ica
                                    </p>
                                    <p className="text-2xl text-custom-cream pb-8">
                                        (056) 640-001
                                    </p>
                                    <p className="text-2xl text-custom-cream">
                                        Lambayeque
                                    </p>
                                    <p className="text-2xl text-custom-cream">
                                        (074) 640-771
                                    </p>
                                </>
                            ) : detail.label == "WhatsApp" ? (
                                <>
                                    <p className="text-xl font-semibold text-custom-cream pt-20">
                                        Solo disponible
                                    </p>
                                    <p className="text-xl font-semibold text-custom-cream pb-8">
                                        para mensajes
                                    </p>
                                    <p className="text-2xl font-light text-custom-cream">
                                        +51 998 166 703
                                    </p>
                                </>
                            ) : detail.label == "Centros de atención" ? (
                                <>
                                    <p className="text-lg font-semibold text-custom-cream">
                                        Lima
                                    </p>
                                    <p className="text-base font-light leading-none text-custom-cream">
                                        Av. Victor Andrés Belaunde N°147
                                    </p>
                                    <p className="text-base font-light leading-none text-custom-cream pb-8">
                                        Torre 1 - Pisos 8 y 9, Lima
                                    </p>
                                    <p className="text-lg font-semibold text-custom-cream">
                                        Villacuri
                                    </p>
                                    <p className="text-base font-light leading-none text-custom-cream">
                                        Carretera Panamericana Sur Km.274
                                    </p>
                                    <p className="text-base font-light leading-none text-custom-cream pb-8">
                                        Salas de Guadalupe - Ica
                                    </p>
                                    <p className="text-lg font-semibold text-custom-cream">
                                        Andahuasi
                                    </p>
                                    <p className="text-base font-light leading-none text-custom-cream">
                                        Las Alhelíe Mz.P Lote 6 Sector 4
                                    </p>
                                    <p className="text-base font-light leading-none text-custom-cream pb-8">
                                        Sayán - Huaura - Lima
                                    </p>
                                    <p className="text-lg font-semibold text-custom-cream">
                                        Lambayeque
                                    </p>
                                    <p className="text-base font-light leading-none text-custom-cream">
                                        Calle Las Mercedes 466
                                    </p>
                                    <p className="text-base font-light leading-none text-custom-cream">
                                        Pacora - Lambayeque
                                    </p>
                                </>
                            ) : null}
                        </div>
                    </div>
                ) : (
                    <div className="w-1/2 bg-custom-cream grid grid-cols-2 overflow-hidden aspect-[2/1]">
                        {items.map((item, index) => (
                            <div
                                onClick={() => handleClick(item)}
                                key={index}
                                className={`bg-custom-${item.color} col-span-1 row-span-1 flex flex-col justify-evenly items-center transition-transform transform scale-100 hover:scale-105 cursor-pointer overflow-hidden`}
                            >
                                <Image
                                    width={120}
                                    height={120}
                                    alt={item.alt}
                                    src={item.src}
                                />
                                <p className="text-custom-cream text-2xl font-normal">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Page;
