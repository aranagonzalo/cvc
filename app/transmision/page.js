"use client";
import { useState } from "react";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const lineasDeTransmision = [
    {
        title: "L.T. Independencia Coelvisac 1",
        topLeftTitle: "Distancia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "SE de origen",
        bottomRightTitle: "SE de destino",
        topLeftData: "31 km",
        topRightData: "60 kV",
        bottomLeftData: "SE Independencia",
        bottomRightData: "SE Coelvisac",
        url: "/images/transmision/1.jpg",
    },
    {
        title: "L.T. Felam Tierras Nuevas",
        topLeftTitle: "Distancia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "SE de origen",
        bottomRightTitle: "SE de destino",
        topLeftData: "28 km",
        topRightData: "220 kV",
        bottomLeftData: "S.E.T. Felam",
        bottomRightData: "S.E.T. Tierras Nuevas",
        url: "/images/transmision/2.jpg",
    },
    {
        title: "S.E.T. Coelvisac 1",
        topLeftTitle: "Potencia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "# de trafos",
        bottomRightTitle: "SE de destino",
        topLeftData: "60 MVA",
        topRightData: "60 kV",
        bottomLeftData: "2",
        bottomRightData: "Villacurí",
        url: "/images/transmision/3.jpg",
    },
    {
        title: "S.E.T. Tierras Nuevas",
        topLeftTitle: "Potencia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "# de trafos",
        bottomRightTitle: "SE de destino",
        topLeftData: "60 MVA",
        topRightData: "220 kV",
        bottomLeftData: "1",
        bottomRightData: "Olmos",
        url: "/images/transmision/4.jpg",
    },
    {
        title: "S.E. Félam",
        topLeftTitle: "Potencia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "# de trafos",
        bottomRightTitle: "Ubicación",
        topLeftData: "150 MVA",
        topRightData: "220 kV",
        bottomLeftData: "0",
        bottomRightData: "Olmos",
        url: "/images/transmision/5.jpg",
    },
];

const Page = () => {
    const [activeData, setActiveData] = useState({
        title: "L.T. Independencia Coelvisac 1",
        topLeftTitle: "Distancia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "SE de origen",
        bottomRightTitle: "SE de destino",
        topLeftData: "31 km",
        topRightData: "60 kV",
        bottomLeftData: "SE Independencia",
        bottomRightData: "SE Coelvisac",
        url: "/images/transmision/1.jpg",
    });

    const handleClick = (d) => {
        setActiveData({
            title: d.title,
            topLeftTitle: d.topLeftTitle,
            topRightTitle: d.topRightTitle,
            bottomLeftTitle: d.bottomLeftTitle,
            bottomRightTitle: d.bottomRightTitle,
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
                alt="Torre eléctrica con cielo despejado"
                src="/images/transmision/transmision.jpg"
                title="Transmisión Eléctrica"
            />
            <section className="w-full p-28 bg-custom-cream text-custom-grey flex flex-col gap-12">
                <p className="text-4xl font-normal leading-normal">
                    Hemos construido nuestras propias líneas de transmisión para
                    alimentar eléctricamente nuestras zonas de concesión en
                    Villacurí y Olmos
                </p>
                <p className="text-4xl font-normal leading-normal">
                    También hemos construido nuestras subestaciones de
                    transformación eléctrica: “SE Coelvisac 1”, “SE Tierras
                    Nuevas” y “SE Felam”
                </p>
            </section>
            <section className="w-full flex h-[95vh] relative overflow-hidden">
                <div className="w-[42%] bg-custom-sky flex flex-col p-24 justify-between">
                    {lineasDeTransmision.map((l, i) => (
                        <h1
                            onClick={() => handleClick(l)}
                            className={`text-4xl cursor-pointer transition-all w-fit ${
                                activeData.title === l.title
                                    ? "font-semibold drop-shadow-md text-custom-cream"
                                    : "font-light text-custom-cream/90"
                            }`}
                            key={i}
                        >
                            {l.title}
                        </h1>
                    ))}
                </div>
                <div className="w-[58%] bg-custom-cream flex flex-col justify-center items-center">
                    <div className="h-[64%] w-full relative">
                        <Image
                            className="transition-all"
                            alt={activeData.title}
                            src={activeData.url}
                            fill
                        />
                    </div>
                    <div className="h-[36%] w-full relative grid grid-rows-2 grid-cols-2 pl-20 py-12 gap-x-28">
                        <p className="absolute right-3 top-1 font-medium text-xs">
                            Información general Nov - 2023
                        </p>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-light text-2xl">
                                {activeData.topLeftTitle}
                            </h3>
                            <p className="font-medium text-3xl">
                                {activeData.topLeftData}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-light text-2xl">
                                {activeData.topRightTitle}
                            </h3>
                            <p className="font-medium text-3xl">
                                {activeData.topRightData}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-light text-2xl">
                                {activeData.bottomLeftTitle}
                            </h3>
                            <p className="font-medium text-3xl">
                                {activeData.bottomLeftData}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-light text-2xl">
                                {activeData.bottomRightTitle}
                            </h3>
                            <p className="font-medium text-3xl">
                                {activeData.bottomRightData}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
