"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import LandingForm from "@/components/Form/LandingForm";

export default function Home() {
    const [counterOn, setCounterOn] = useState(false);

    const [textHover, setTextHover] = useState({
        distribucionElectrica: false,
        transmisionElectrica: false,
        generacionElectrica: false,
        comercializacionDeEnergia: false,
        elaboracionDeProyectos: false,
    });

    const handleHover = (name) => {
        setTextHover({
            distribucionElectrica: false,
            transmisionElectrica: false,
            generacionElectrica: false,
            comercializacionDeEnergia: false,
            elaboracionDeProyectos: false,
            [name]: true,
        });
    };
    const handleExitHover = () => {
        setTextHover({
            distribucionElectrica: false,
            transmisionElectrica: false,
            generacionElectrica: false,
            comercializacionDeEnergia: false,
            elaboracionDeProyectos: false,
        });
    };

    const targetContainerRef = useRef(null);

    const scrollToContainer = () => {
        if (targetContainerRef.current) {
            targetContainerRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <>
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
                        onClick={scrollToContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="z-[60] text-custom-grey bg-custom-cream py-3 px-5 w-fit rounded-full hover:scale-110 hover:shadow-lg transition-all"
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
                    <div
                        className="relative bg-custom-grey text-custom-cream w-1/2 p-32 items-end justify-start flex transition-all duration-500"
                        style={{
                            backgroundImage: `${
                                textHover.distribucionElectrica
                                    ? "url(/images/landing/sunset.jpg)"
                                    : textHover.transmisionElectrica
                                    ? "url(/images/landing/sunset.jpg)"
                                    : textHover.generacionElectrica
                                    ? "url(/images/landing/sunset.jpg)"
                                    : textHover.comercializacionDeEnergia
                                    ? "url(/images/landing/sunset.jpg)"
                                    : textHover.elaboracionDeProyectos
                                    ? "url(/images/landing/sunset.jpg)"
                                    : "bg-custom-grey"
                            }`,
                        }}
                    >
                        <div
                            className={`${
                                textHover.distribucionElectrica && "opacity-0"
                            } ${
                                textHover.transmisionElectrica && "opacity-0"
                            } ${textHover.generacionElectrica && "opacity-0"} ${
                                textHover.comercializacionDeEnergia &&
                                "opacity-0"
                            } ${
                                textHover.elaboracionDeProyectos && "opacity-0"
                            } transition-all duration-500 bg-custom-grey z-10 w-full h-full absolute top-0 left-0`}
                        ></div>
                        {!Object.values(textHover).some((value) => value) && (
                            <AnimatePresence>
                                <motion.h1
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: 0.3,
                                            delay: 0.1,
                                        },
                                    }}
                                    exit={{ opacity: 0 }}
                                    className="text-6xl w-3/4 z-20"
                                >
                                    Expertos en soluciones eléctricas integrales
                                </motion.h1>
                            </AnimatePresence>
                        )}
                    </div>
                    <div className="bg-custom-cream text-custom-grey w-1/2 p-32 flex items-center justify-center">
                        <ul className="flex flex-col text-3xl gap-12 font-light w-full">
                            <motion.li
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 0.3, delay: 0.1 },
                                }}
                                whileHover={{
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onMouseEnter={() =>
                                    handleHover("distribucionElectrica")
                                }
                                onMouseLeave={() => handleExitHover()}
                            >
                                Distribución eléctrica
                            </motion.li>
                            <motion.li
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 0.3, delay: 0.1 },
                                }}
                                whileHover={{
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onMouseEnter={() =>
                                    handleHover("transmisionElectrica")
                                }
                                onMouseLeave={() => handleExitHover()}
                            >
                                Transmisión eléctrica
                            </motion.li>
                            <motion.li
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 0.3, delay: 0.1 },
                                }}
                                whileHover={{
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onMouseEnter={() =>
                                    handleHover("generacionElectrica")
                                }
                                onMouseLeave={() => handleExitHover()}
                            >
                                Generación eléctrica
                            </motion.li>
                            <motion.li
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 0.3, delay: 0.1 },
                                    viewport: { amount: 0.8 },
                                }}
                                whileHover={{
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onMouseEnter={() =>
                                    handleHover("elaboracionDeProyectos")
                                }
                                onMouseLeave={() => handleExitHover()}
                            >
                                Elaboración de proyectos
                            </motion.li>
                            <motion.li
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 0.3, delay: 0.1 },
                                }}
                                whileHover={{
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onMouseEnter={() =>
                                    handleHover("comercializacionDeEnergia")
                                }
                                onMouseLeave={() => handleExitHover()}
                            >
                                Comercialización de energía
                            </motion.li>
                        </ul>
                    </div>
                </section>
                {/* <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/BcuaXzBUfno?si=OrvY0TgsZjai6ln9&amp;controls=0"
                    title="CVC Intro"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                /> */}
                <section
                    id="formContainer"
                    ref={targetContainerRef}
                    className="w-full flex flex-col bg-custom-cream px-6 py-12 md:p-24 lg:p-32 justify-center"
                >
                    <div className="w-full flex items-center pb-36">
                        <h1 className="text-6xl font-normal w-1/2 text-custom-blue">
                            Potencia tu desarollo con nosotros
                        </h1>
                    </div>
                    <LandingForm />
                </section>
                {/* <section className="w-full flex h-[50vh] gap-[2px]">
                    <div className="w-1/3 flex flex-col aspect-square">
                        <div className="relative h-3/4">
                            <Image
                                className="object-cover"
                                src="/images/landing/news0001.jpg"
                                alt=""
                                fill
                            />
                        </div>
                        <div className="h-1/4 bg-custom-blue p-4 flex items-center">
                            <p className="font-normal text-2xl text-custom-cream">
                                Coelvisac suministrará energía a San Gabán por
                                cinco años
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col aspect-square">
                        <div className="relative h-3/4">
                            <Image
                                className="object-cover"
                                src="/images/landing/news0002.jpg"
                                alt=""
                                fill
                            />
                        </div>
                        <div className="h-1/4 bg-custom-blue p-4 flex items-center">
                            <p className="font-normal text-2xl text-custom-cream">
                                Coelvisac suministrará energía a San Gabán por
                                cinco años
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col aspect-square">
                        <div className="relative h-3/4">
                            <Image
                                className="object-cover"
                                src="/images/landing/news0003.jpg"
                                alt=""
                                fill
                            />
                        </div>
                        <div className="h-1/4 bg-custom-blue p-4 flex items-center">
                            <p className="font-normal text-2xl text-custom-cream">
                                Coelvisac suministrará energía a San Gabán por
                                cinco años
                            </p>
                        </div>
                    </div>
                </section> */}
            </div>
        </>
    );
}
