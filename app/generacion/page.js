"use client";
import { useState } from "react";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const lineasDeGeneracion = [
    {
        title: "C.H. Coelvihidro 1",
        description:
            "Nuestra central hidroeléctrica de 1.6 MW  cuya producción de energía alimenta el mercado regulado de CVC energía en Andahuasi. Adicionalmente, cuenta con una concesión de generación de 15 MW del proyecto Coelvihidro II.",
        topLeftData: "1.6 MW",
        topRightData: "Francis",
        bottomLeftData: "Andahuasi",
        bottomRightData: "Hidroeléctrica",
        url: "/images/generacion/1.jpg",
    },
    {
        title: "C.T. Villacurí",
        description:
            "Contamos con una operación térmica de 5 MW que se está reubicando en Villacurí desde Piura, donde operó hasta el 2017. Esta Operación se ha denominado “C.T. Villacurí”.",
        topLeftData: "5 MW",
        topRightData: "Natural Gas",
        bottomLeftData: "Villacurí",
        bottomRightData: "Termoeléctrica",
        url: "/images/generacion/2.jpg",
    },
    {
        title: "C.T. Salas",
        description:
            "Contamos con una operación térmica de 5 MW que se está reubicando en Villacurí desde Piura, donde operó hasta el 2017. Esta Operación se ha denominado “C.T. Villacurí”.",
        topLeftData: "5 MW",
        topRightData: "Natural Gas",
        bottomLeftData: "Villacurí",
        bottomRightData: "Termoeléctrica",
        url: "/images/generacion/3.jpg",
    },
];

const Page = () => {
    const [activeData, setActiveData] = useState({
        title: "C.H. Coelvihidro 1",
        description:
            "Nuestra central hidroeléctrica de 1.6 MW  cuya producción de energía alimenta el mercado regulado de CVC energía en Andahuasi. Adicionalmente, cuenta con una concesión de generación de 15 MW del proyecto Coelvihidro II.",
        topLeftData: "1.6 MW",
        topRightData: "Francis",
        bottomLeftData: "Andahuasi",
        bottomRightData: "Hidroeléctrica",
        url: "/images/generacion/1.jpg",
    });

    const handleClick = (d) => {
        setActiveData({
            title: d.title,
            description: d.description,
            topLeftData: d.topLeftData,
            topRightData: d.topRightData,
            bottomLeftData: d.bottomLeftData,
            bottomRightData: d.bottomRightData,
            url: d.url,
        });
    };

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Maquinas de generación eléctrica al aire libre"
                src="/images/generacion/generacion.jpg"
                title="Generación Eléctrica"
            />
            <section className="w-full h-[1096px] flex relative overflow-hidden">
                <div className="w-[44%] bg-custom-green flex flex-col p-24 gap-24 justify-center">
                    {lineasDeGeneracion.map((l, i) => (
                        <h1
                            onClick={() => handleClick(l)}
                            className={`text-4xl cursor-pointer transition-all w-fit ${
                                activeData.title === l.title
                                    ? "font-semibold text-custom-cream"
                                    : "font-light text-custom-cream/90"
                            }`}
                            key={i}
                        >
                            {l.title}
                        </h1>
                    ))}
                </div>
                <div className="w-[56%] bg-custom-cream flex flex-col justify-center items-center">
                    <div className="h-[40%] w-full relative">
                        <Image
                            className="transition-all"
                            alt={activeData.title}
                            src={activeData.url}
                            fill
                        />
                    </div>
                    <div className="h-[60%] w-full relative px-16 py-20 flex justify-between flex-col">
                        <p className="text-3xl font-light leading-normal">
                            {activeData.description}
                        </p>
                        <div className="grid grid-cols-2 grid-rows-2 gap-y-8">
                            <div className="flex flex-col justify-center">
                                <h3 className="font-light text-2xl">
                                    Capacidad
                                </h3>
                                <p className="font-medium text-3xl">
                                    {activeData.topLeftData}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="font-light text-2xl">Turbina</h3>
                                <p className="font-medium text-3xl">
                                    {activeData.topRightData}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="font-light text-2xl">
                                    Ubicación
                                </h3>
                                <p className="font-medium text-3xl">
                                    {activeData.bottomLeftData}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="font-light text-2xl">Tipo</h3>
                                <p className="font-medium text-3xl">
                                    {activeData.bottomRightData}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
