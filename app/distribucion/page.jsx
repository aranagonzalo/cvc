"use client";
import { useState } from "react";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const dots = [
    {
        title: "Lambayeque",
        subtitle: "Olmos - Motupe - Íllimo",
        area: "+10,000 Ha",
        inversion: "US$ 533 M",
        demanda: "265 kW",
        redes: "23 km",
        clientes: "501",
        left: "63px",
        top: "167px",
        url: "/images/zonas-de-concesion/1.jpg",
    },
    {
        title: "Lambayeque",
        subtitle: "Tierras Nuevas - Olmos",
        area: "+150,000 Ha",
        inversion: "US$ 5771 M",
        demanda: "30 MW",
        redes: "292 km",
        clientes: "143",
        left: "78px",
        top: "204px",
        url: "/images/zonas-de-concesion/2.jpg",
    },
    {
        title: "Lima",
        subtitle: "Andahuasi",
        area: "+21,000 Ha",
        inversion: "US$ 1238 M",
        demanda: "2 MW",
        redes: "67 km",
        clientes: "2139",
        left: "170px",
        top: "355px",
        url: "/images/zonas-de-concesion/3.jpg",
    },
    {
        title: "Ica",
        subtitle: "Villacurí",
        area: "+102,000 Ha",
        inversion: "US$ 9120 M",
        demanda: "43 MW",
        redes: "483 km",
        clientes: "1526",
        left: "210px",
        top: "445px",
        url: "/images/zonas-de-concesion/4.jpg",
    },
    {
        title: "Tacna",
        subtitle: "Hospicio",
        area: "+74,000 Ha",
        inversion: "US$ 13 M",
        demanda: "420 MW",
        redes: "28 km",
        clientes: "",
        left: "384px",
        top: "580px",
        url: "/images/zonas-de-concesion/5.jpg",
    },
    {
        title: "Piura",
        subtitle: "La Huaca 2",
        area: "+77,000 Ha",
        inversion: "US$ 15 M",
        demanda: "+ 1 MW",
        redes: "32 km",
        clientes: "",
        left: "86px",
        top: "143px",
        url: "/images/zonas-de-concesion/6.jpg",
    },
    {
        title: "Moquegua",
        subtitle: "Pasto Grande",
        area: "+215,000 Ha",
        inversion: "US$ 11 M",
        demanda: "160 MW",
        redes: "75 km",
        clientes: "",
        left: "368px",
        top: "539px",
        url: "/images/zonas-de-concesion/7.jpg",
    },
];

const Page = () => {
    const [isHovered, setIsHovered] = useState(false);

    const [dotData, setDotData] = useState({
        title: "",
        subtitle: "",
        area: "",
        inversion: "",
        demanda: "",
        redes: "",
        clientes: "",
        url: "",
    });

    const handleHover = (d) => {
        setIsHovered(true);
        setDotData({
            title: d.title,
            subtitle: d.subtitle,
            area: d.area,
            inversion: d.inversion,
            demanda: d.demanda,
            redes: d.redes,
            clientes: d.clientes,
            url: d.url,
        });
    };

    const handleExit = () => {
        setIsHovered(false);
    };

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Torre eléctrica con cielo despejado"
                src="/images/zonas-de-concesion/zonas-de-concesion.jpg"
                title="Distribución Eléctrica"
            />
            <section className="w-full flex h-[1000px] relative overflow-hidden">
                <div
                    className={`w-[84%] flex justify-start items-end z-0 absolute top-0 h-full transition-all duration-[800ms] ease-out ${
                        isHovered ? "-left-[42%]" : "left-0"
                    }`}
                >
                    <div className="w-1/2 flex justify-start items-end bg-custom-blue h-full p-24">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="text-5xl text-custom-cream w-1/2"
                        >
                            Descubre todas nuestras concesiones
                        </motion.h1>
                    </div>
                    <div className="w-1/2 flex flex-col justify-start items-end bg-custom-yellow">
                        <div className="w-full h-[640px] bg-custom-yellow px-20 flex items-center">
                            <div className="w-full flex flex-col gap-4">
                                <h1 className="text-5xl font-medium">
                                    {dotData.title}
                                </h1>
                                <h3 className="text-xl font-light">
                                    {dotData.subtitle}
                                </h3>
                                <ul className="flex flex-col w-full gap-8 pt-8">
                                    <li className="flex gap-4 items-center">
                                        <p className="text-3xl font-medium w-1/2 justify-end flex">
                                            {dotData.area}
                                        </p>
                                        <p className="text-xl font-light w-1/4 leading-none">
                                            área de concesión
                                        </p>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <p className="text-3xl font-medium w-1/2 justify-end flex">
                                            {dotData.inversion}
                                        </p>
                                        <p className="text-xl font-light w-1/4 leading-none">
                                            inversión en activos
                                        </p>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <p className="text-3xl font-medium w-1/2 justify-end flex">
                                            {dotData.demanda}
                                        </p>
                                        <p className="text-xl font-light w-1/4 leading-none">
                                            demanda actual
                                        </p>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <p className="text-3xl font-medium w-1/2 justify-end flex">
                                            {dotData.redes}
                                        </p>
                                        <p className="text-xl font-light w-1/4 leading-none">
                                            redes de media tensión
                                        </p>
                                    </li>
                                    {dotData.clientes.length !== 0 && (
                                        <li className="flex gap-4 items-center">
                                            <p className="text-3xl font-medium w-1/2 justify-end flex">
                                                {dotData.clientes}
                                            </p>
                                            <p className="text-xl font-light w-1/4 leading-none">
                                                clientes
                                            </p>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full h-[360px] relative">
                            {dotData.url && (
                                <Image
                                    fill
                                    alt={dotData.title}
                                    src={dotData.url}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-[58%] bg-custom-cream flex justify-center items-center absolute right-0 top-0 h-full z-10">
                    <div className="w-[500px] h-[600px] relative">
                        <Image
                            fill
                            alt="Mapa político del Perú"
                            src="/images/zonas-de-concesion/mapa.svg"
                        />
                        <ChevronLeft
                            className="top-0 -left-16 cursor-pointer z-20 text-lg text-custom-blue absolute hover:scale-125 transition-all"
                            onClick={handleExit}
                            size={32}
                        />
                        {dots.map((d, i) => (
                            <div
                                key={i}
                                onClick={() => handleHover(d)}
                                className="cursor-pointer bg-custom-yellow rounded-full w-[22px] h-[22px] absolute before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:pointer-events-none hover:before:h-24 hover:before:w-24 before:transition-all before:-translate-y-1/2 before:flex before:rounded-full before:bg-custom-yellow/40 before:w-0 before:h-0"
                                style={{ top: d.top, left: d.left }}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
