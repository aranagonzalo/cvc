"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Link from "next/link";
import { Play } from "lucide-react";

import LandingForm from "@/components/Form/LandingForm";

export default function Home() {
    const [counterOn, setCounterOn] = useState(false);

    const [textHover, setTextHover] = useState({
        distribucionElectrica: false,
        transmisionElectrica: false,
        generacionElectrica: false,
        comercializacionDeEnergia: false,
        elaboracionDeProyectos: false,
        operacionYMantenimiento: false,
    });

    const handleHover = (name) => {
        setTextHover({
            distribucionElectrica: false,
            transmisionElectrica: false,
            generacionElectrica: false,
            comercializacionDeEnergia: false,
            elaboracionDeProyectos: false,
            operacionYMantenimiento: false,
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
            operacionYMantenimiento: false,
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
                <section className="shadow-landing w-full flex flex-col relative bg-custom-grey px-6 py-12 md:p-24 lg:px-20 lg:py-36 justify-center">
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
                        className="z-10 text-custom-cream font-normal text-3xl md:text-4xl lg:text-5xl pt-32 pb-3 w-fit"
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
                        className="z-[60] text-custom-grey bg-custom-cream py-3 px-5 mb-32 w-fit rounded-full hover:scale-110 hover:shadow-lg transition-all"
                    >
                        <Link href="ahorra-energia">
                            Genera ahorros en tu consumo
                        </Link>
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
                                        end={4450}
                                        duration={2}
                                        delay={0}
                                    />
                                )}
                            </h1>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                clientes a
                            </p>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                nivel nacional
                            </p>
                        </ScrollTrigger>
                        <ScrollTrigger className="flex flex-col items-center justify-center w-1/3">
                            <h1 className="lg:text-7xl font-semibold pb-6 text-custom-cream">
                                +
                                {counterOn && (
                                    <CountUp
                                        start={0}
                                        end={12}
                                        duration={2}
                                        delay={0}
                                    />
                                )}
                            </h1>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                departamentos
                            </p>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                del país
                            </p>
                        </ScrollTrigger>
                        <ScrollTrigger className="flex flex-col items-center justify-center w-1/3">
                            <h1 className="lg:text-7xl font-semibold pb-6 text-custom-cream">
                                +
                                {counterOn && (
                                    <CountUp
                                        start={0}
                                        end={580}
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
                                        end={30}
                                        duration={2}
                                        delay={0}
                                    />
                                )}
                            </h1>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                años potenciando
                            </p>
                            <p className="text-lg lg:text-2xl text-custom-cream font-extralight">
                                el desarrollo
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
                                    ? "url(/images/landing/1.jpg)"
                                    : textHover.transmisionElectrica
                                    ? "url(/images/landing/2.png)"
                                    : textHover.generacionElectrica
                                    ? "url(/images/landing/3.jpg)"
                                    : textHover.comercializacionDeEnergia
                                    ? "url(/images/landing/4.png)"
                                    : textHover.elaboracionDeProyectos
                                    ? "url(/images/landing/5.png)"
                                    : textHover.operacionYMantenimiento
                                    ? "url(/images/landing/6.png)"
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
                            } ${
                                textHover.operacionYMantenimiento && "opacity-0"
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
                                <Link href="/distribucion">
                                    Distribución eléctrica
                                </Link>
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
                                <Link href="/transmision">
                                    Transmisión eléctrica
                                </Link>
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
                                <Link href="/generacion">
                                    Generación eléctrica
                                </Link>
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
                                <Link href="/ahorra-energia">
                                    Comercialización de energía
                                </Link>
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
                                <Link href="/elaboracion-de-proyectos">
                                    Diseño y construcción de proyectos
                                </Link>
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
                                    handleHover("operacionYMantenimiento")
                                }
                                onMouseLeave={() => handleExitHover()}
                            >
                                <Link href="/elaboracion-de-proyectos#operationContainer">
                                    Operación y mantenimiento
                                </Link>
                            </motion.li>
                        </ul>
                    </div>
                </section>
                <section className="w-full h-screen bg-black relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Play size={96} stroke="white" />
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
                    <div className="w-full flex flex-col items-start pb-36">
                        <h1 className="text-6xl font-normal w-1/2 text-custom-blue">
                            Potencia tu desarollo con nosotros
                        </h1>
                        <p className="pt-12 text-xl font-normal text-custom-blue/80">
                            Completa el formulario y te contactaremos a la
                            brevedad
                        </p>
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
                <section className="w-full bg-custom-blue px-6 py-12 md:p-24 lg:py-24 lg:px-32 flex flex-col gap-8">
                    <h1 className="text-custom-cream text-5xl font-normal w-[40%] mb-12 leading-snug">
                        Descubre nuestras últimas noticias
                    </h1>
                    <div className="flex gap-4 h-[500px]">
                        <div className="flex flex-col">
                            <div className="w-full h-[60%] relative">
                                <Image
                                    fill={true}
                                    src="/images/landing/blog1.jpg"
                                    alt="blog"
                                />
                            </div>
                            <div className="p-12 h-[40%] bg-custom-cream text-custom-grey">
                                <h3>Noviembre 2023</h3>
                                <p className="font-medium text-xl">
                                    ¡Recibimos la Visita de estudiantes de la
                                    UNI en nuestra sede Ica!
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full h-[60%] relative">
                                <Image
                                    fill={true}
                                    src="/images/landing/blog2.jpg"
                                    alt="blog"
                                />
                            </div>
                            <div className="p-12 h-[40%] bg-custom-cream text-custom-grey">
                                <h3>Octubre 2023</h3>
                                <p className="font-medium text-xl">
                                    Oficializamos Nuevas Concesiones en Piura y
                                    Lambayeque
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full h-[60%] relative">
                                <Image
                                    fill={true}
                                    src="/images/landing/blog3.jpg"
                                    alt="blog"
                                />
                            </div>
                            <div className="p-12 h-[40%] bg-custom-cream text-custom-grey">
                                <h3>Agosto 2023</h3>
                                <p className="font-medium text-xl">
                                    Nuestros compañeros nos representaron en la
                                    HackaCoes
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="self-end text-2xl mt-12 cursor-pointer text-custom-cream">
                        + Ver todas las entradas
                    </p>
                </section>
                <section className="w-full h-[400px] bg-custom-cream px-6 py-12 md:p-24 lg:px-48 items-center flex justify-between">
                    <Link href="https://www.coes.org.pe/Portal" target="_blank">
                        <Image
                            alt="coes"
                            src="/images/landing/coes.png"
                            width={160}
                            height={120}
                        />
                    </Link>
                    <Link href="https://www.gob.pe/osinergmin" target="_blank">
                        <Image
                            alt="osinergmin"
                            src="/images/landing/osinergmin.png"
                            width={280}
                            height={100}
                        />
                    </Link>
                    <Link href="https://www.gob.pe/minem" target="_blank">
                        <Image
                            alt="ministerio de energia y minas"
                            src="/images/landing/minas.png"
                            width={280}
                            height={120}
                        />
                    </Link>
                </section>
            </div>
        </>
    );
}
