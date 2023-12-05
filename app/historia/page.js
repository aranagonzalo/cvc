"use client";
import Hero from "@/components/Hero.jsx";
import StoryCardRight from "@/components/Historia/StoryCardRight.jsx";
import StoryCardLeft from "@/components/Historia/StoryCardLeft.jsx";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Generadores eléctricos a lo lejos con efecto de color pastel"
                src="/images/historia/historia.jpg"
                title="Conoce nuestra historia"
            />
            <section className="w-full flex h-[100vh]">
                <div className="px-28 py-40 bg-custom-sky flex flex-col w-1/2 gap-8 items-center relative">
                    <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-custom-cream font-thin leading-tight text-lg text-justify"
                    >
                        CVC energía (antes Coelvisac) fue un proyecto que se
                        inició en su fase de estudio desde 1992 liderado por el
                        Ing. Percy Ortiz Espinoza, actual Presidente de la
                        empresa, que en un trabajo coordinado con la Asociación
                        de Agricultores de Villacuri y como producto de su
                        interés en el desarrollo eléctrico de esta zona agrícola
                        de Ica donde primaba la utilización del Petróleo como
                        fuente de energía para las actividades de esa industria.
                    </motion.p>
                    <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.4,
                            },
                        }}
                        className="text-custom-cream font-thin leading-tight text-lg text-justify"
                    >
                        En 1995, CVC energía obtuvo su primera Concesión de
                        Distribución Eléctrica para la zona de Villacurí,
                        otorgada por el Estado Peruano. A la fecha, CVC energía
                        cuenta con varias Concesiones de distribución producto
                        de la dinámica y emprendimiento empresarial del grupo.
                    </motion.p>
                    <div className="absolute bottom-8 right-8 font-extralight text-3xl text-right text-custom-cream">
                        <p>Ing. Percy</p>
                        <p>Ortiz Mendoza</p>
                    </div>
                </div>
                <div className="relative w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/historia/Percy Ortiz.jpg"
                        alt="Ingeniero Percy Ortiz Mendoza"
                    />
                </div>
            </section>
            <section className="w-full flex flex-col bg-custom-cream py-32 relative">
                <StoryCardRight
                    first={true}
                    last={false}
                    src="/images/landing/sunset.jpg"
                    alt="Sunset"
                    date="1994"
                    title="Fundación"
                />
                <StoryCardLeft
                    src="/images/landing/sunset.jpg"
                    alt="Sunset"
                    date="1995"
                    title="Otorgamiento de concesión de Villacurí"
                />
                <StoryCardRight
                    first={false}
                    last={false}
                    src="/images/landing/sunset.jpg"
                    alt="Sunset"
                    date="1994"
                    title="Fundación"
                />
                <StoryCardLeft
                    src="/images/landing/sunset.jpg"
                    alt="Sunset"
                    date="1995"
                    title="Otorgamiento de concesión de Villacurí"
                />
                <StoryCardRight
                    first={false}
                    last={false}
                    src="/images/landing/sunset.jpg"
                    alt="Sunset"
                    date="1994"
                    title="Fundación"
                />
                <StoryCardLeft
                    src="/images/landing/sunset.jpg"
                    alt="Sunset"
                    date="1995"
                    title="Otorgamiento de concesión de Villacurí"
                />
                <StoryCardRight
                    first={false}
                    last={true}
                    src="/images/landing/sunset.jpg"
                    alt="Sunset"
                    date="1994"
                    title="Fundación"
                />
            </section>
        </div>
    );
};

export default page;
