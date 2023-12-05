"use client";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
    const distribucion = [
        "Concesión de Villacurí",
        "Concesión de Tierras Nuevas - Olmos",
        "Concesión de Andahuasi",
        "Concesión de Olmos - Motupe - Íllimo",
        "Concesión de Hospicio",
        "Concesión de Pasto Grande",
        "Concesión de La Huaca 2",
    ];

    const transmision = [
        "Doble Terna L.T. Independencia – Coelvisa 1",
        "L.T. Felam – Tierras Nuevas",
        "S.E.T. Coelvisac 1",
        "S.E.T. Huarango",
        "S.E.T. Tierras Nuevas",
        "S.E. Félam",
    ];

    const generacion = ["C.H. Coelvihidro 1", "C.T. Villacurí", "C.T. Salas"];

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Planchas de carga solar"
                src="/images/activos/activos.jpg"
                title="Nuestros activos eléctricos"
            />
            <section className="w-full flex">
                <div className="relative w-[52%]">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/activos/distribucion.jpg"
                        alt="Activos CVC Energía - Planta eléctrica"
                    />
                    <h1 className="absolute top-1/2 text-custom-cream text-6xl left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Distribución
                    </h1>
                </div>
                <div className="px-24 py-20 bg-custom-blue flex flex-col w-[48%] relative justify-between">
                    <ul className="text-custom-cream font-light gap-12 text-4xl flex flex-col w-[85%]">
                        {distribucion.map((item, index) => {
                            let delay = index * 0.1;
                            return (
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.2,
                                            delay: delay,
                                        },
                                    }}
                                    key={index}
                                >
                                    {item}
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <section className="w-full flex">
                <div className="relative w-[52%]">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/activos/transmision.jpg"
                        alt="Activos CVC Energía - Planta eléctrica"
                    />
                    <h1 className="absolute top-1/2 text-custom-cream text-6xl left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Transmisión
                    </h1>
                </div>
                <div className="px-24 py-20 bg-custom-sky flex flex-col w-[48%] relative justify-between">
                    <ul className="text-custom-cream font-light gap-12 text-4xl flex flex-col w-[85%]">
                        {transmision.map((item, index) => {
                            let delay = index * 0.1;
                            return (
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.2,
                                            delay: delay,
                                        },
                                    }}
                                    key={index}
                                >
                                    {item}
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <section className="w-full flex">
                <div className="relative w-[52%]">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/activos/generacion.jpg"
                        alt="Activos CVC Energía - Planta eléctrica"
                    />
                    <h1 className="absolute top-1/2 text-custom-cream text-6xl left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Generación
                    </h1>
                </div>
                <div className="px-24 py-20 bg-custom-green flex flex-col w-[48%] relative justify-between">
                    <ul className="text-custom-cream font-light gap-12 text-4xl flex flex-col w-[85%]">
                        {generacion.map((item, index) => {
                            let delay = index * 0.1;
                            return (
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.2,
                                            delay: delay,
                                        },
                                    }}
                                    key={index}
                                >
                                    {item}
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default page;
