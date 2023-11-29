"use client";

import { useState } from "react";
import Image from "next/image";
import SideBar from "@/components/SideBar";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Home() {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <SideBar />
            <div className="w-full flex flex-col">
                <section className="shadow-landing w-full flex flex-col relative bg-custom-grey px-6 py-12 md:p-24 lg:p-32 justify-center">
                    <div className="absolute z-50 bottom-0 w-full h-[150px] right-0 bg-gradient-to-b from-custom-cream/0 to-custom-grey/40"></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-black"
                    >
                        <Image
                            fill={true}
                            src="/images/landing/landing.jpg"
                            alt="Instalaciones eléctricas"
                        />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="z-10 text-custom-cream font-normal text-3xl md:text-4xl lg:text-5xl pt-64 pb-3 w-fit"
                    >
                        Somos aliados
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="z-10 text-custom-cream font-normal text-3xl md:text-4xl lg:text-5xl pb-3 w-fit"
                    >
                        en el desarrollo
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="z-10 text-custom-cream font-normal text-3xl md:text-4xl lg:text-5xl pb-12 w-fit"
                    >
                        de tu negocio.
                    </motion.h1>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="z-10 text-custom-grey bg-custom-cream py-3 px-5 w-fit rounded-full"
                    >
                        Descubre los beneficios
                    </motion.button>
                </section>
                <section className="w-full flex flex-col bg-custom-green px-6 py-12 md:p-24 lg:p-32 justify-center">
                    <div className="flex">
                        <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                            className="flex flex-col items-center justify-center w-1/3"
                        >
                            <h1 className="lg:text-7xl font-semibold pb-6 text-custom-cream">
                                +{" "}
                                {counterOn && (
                                    <CountUp
                                        start={0}
                                        end={1100}
                                        duration={2}
                                        delay={0}
                                    />
                                )}
                            </h1>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                GWh
                            </p>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                al año
                            </p>
                        </ScrollTrigger>
                        <ScrollTrigger className="flex flex-col items-center justify-center w-1/3">
                            <h1 className="lg:text-7xl font-semibold pb-6 text-custom-cream">
                                +
                                {counterOn && (
                                    <CountUp
                                        start={0}
                                        end={20}
                                        duration={2}
                                        delay={0}
                                    />
                                )}
                            </h1>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                sectores
                            </p>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                industriales
                            </p>
                        </ScrollTrigger>
                        <ScrollTrigger className="flex flex-col items-center justify-center w-1/3">
                            <h1 className="lg:text-7xl font-semibold pb-6 text-custom-cream">
                                +
                                {counterOn && (
                                    <CountUp
                                        start={0}
                                        end={31}
                                        duration={2}
                                        delay={0}
                                    />
                                )}
                                MM
                            </h1>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                dólares en
                            </p>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                financiamiento
                            </p>
                        </ScrollTrigger>
                    </div>
                </section>
                <section className="w-full flex h-[85vh]">
                    <div className="bg-custom-grey text-custom-cream w-1/2 p-32 items-end justify-start flex">
                        <h1 className="text-6xl w-3/4">
                            Expertos en soluciones eléctricas integrales
                        </h1>
                    </div>
                    <div className="bg-custom-cream text-custom-grey w-1/2 p-32 flex items-center justify-center">
                        <ul className="flex flex-col text-3xl gap-12 font-light">
                            <li>Distribución eléctrica</li>
                            <li>Transmisión eléctrica</li>
                            <li>Generación eléctrica</li>
                            <li>Comercialización de energia</li>
                            <li>Elaboración de proyectos</li>
                        </ul>
                    </div>
                </section>
                <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/BcuaXzBUfno?si=OrvY0TgsZjai6ln9&amp;controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
                <section className="w-full flex flex-col bg-custom-cream px-6 py-12 md:p-24 lg:p-32 justify-center">
                    <div className="w-full flex items-center pb-36">
                        <h1 className="text-6xl font-normal w-1/2 text-custom-blue">
                            Potencia tu desarollo con nosotros
                        </h1>
                    </div>
                    <form className="w-full flex">
                        <div className="w-1/2">
                            <div className="relative">
                                <label className="absolute bottom-3 font-medium text-2xl text-custom-blue/60 pointer-events-none">
                                    Nombre Completo*
                                </label>
                                <input className="border-b-[3px] h-12 w-1/2 border-custom-blue focus:outline-none" />
                            </div>
                        </div>
                        <div className="w-1/2"></div>
                    </form>
                </section>
            </div>
        </>
    );
}
