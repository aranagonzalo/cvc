"use client";
import { useState } from "react";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const lineasDeGeneracion = [
    {
        title: "CH Coelvihidro 1 - Quipico",
        subtitle: "Central Hidroeléctrica Coelvihidro 1 - Quipico",
        description:
            "Operación en modo continuo y conectada al sistema eléctrico Andahuasi",
        topLeftData: "1.6 MW",
        topRightData: "Hidroeléctrica",
        bottomData:
            "Distrito de Huaura, provincia de Sayan, departamento de Lima",
        url: "/images/generacion/1.jpg",
    },
    {
        title: "CT Villacurí",
        subtitle: "Central Termoeléctrica Villacurí",
        description:
            "Operación en modo peak shaving y respaldo ante contingencias del sistema eléctrico Villacurí",
        topLeftData: "9.99 MW",
        topRightData: "Termoeléctrica de ciclo simple a gas natural",
        bottomData: "Distrito de Salas, provincia de Ica, departamento de Ica",
        url: "/images/generacion/2.jpg",
    },
    {
        title: "CT Salas",
        subtitle: "Central Termoeléctrica Salas",
        description:
            "Operación en modo peak shaving y respaldo ante contingencias del sistema eléctrico Villacurí",
        topLeftData: "9.95 MW",
        topRightData: "Termoeléctrica de ciclo simple a gas natural",
        bottomData: "Distrito de Salas, provincia de Ica, departamento de Ica",
        url: "/images/generacion/3.jpg",
    },
    {
        title: "CS Villacurí",
        subtitle: "Central Solar Fotovoltáica Villacurí",
        description: "Proyecto en desarrollo",
        topLeftData: "10 MW",
        topRightData: "Seguidores solares",
        bottomData: "Distrito de Salas, provincia de Ica, departamento de Ica",
        url: "/images/generacion/4.jpg",
    },
];

const Page = () => {
    const [activeData, setActiveData] = useState({
        title: "CH Coelvihidro 1 - Quipico",
        subtitle: "Central Hidroeléctrica Coelvihidro 1 - Quipico",
        description:
            "Operación en modo continuo y conectada al sistema eléctrico Andahuasi",
        topLeftData: "1.6 MW",
        topRightData: "Hidroeléctrica",
        bottomData:
            "Distrito de Huaura, provincia de Sayan, departamento de Lima",
        url: "/images/generacion/1.jpg",
    });

    const handleClick = (d) => {
        setActiveData({
            title: d.title,
            subtitle: d.subtitle,
            description: d.description,
            topLeftData: d.topLeftData,
            topRightData: d.topRightData,
            bottomData: d.bottomData,
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
                        <div className="flex-col gap-4 flex">
                            <p className="text-xl font-light leading-normal text-custom-green">
                                {activeData.subtitle}
                            </p>
                            <p className="text-4xl font-light w-[80%] leading-normal">
                                {activeData.description}
                            </p>
                        </div>

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
                                <h3 className="font-light text-2xl">
                                    Tecnología
                                </h3>
                                <p className="font-medium text-3xl">
                                    {activeData.topRightData}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center col-span-2">
                                <h3 className="font-light text-2xl">
                                    Ubicación
                                </h3>
                                <p className="font-medium text-3xl">
                                    {activeData.bottomData}
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
