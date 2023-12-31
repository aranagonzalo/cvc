"use client";
import Hero from "@/components/Hero.jsx";
import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Balones de gas"
                src="/images/beneficiarios-fise/beneficiarios-fise.jpg"
                title="Beneficiarios FISE"
            />
            <section className="w-full flex flex-col bg-custom-cream gap-16 px-28 py-32">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.8 },
                    }}
                    className="text-6xl font-medium"
                >
                    ¿Sábes qué es el FISE?
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.6 },
                    }}
                    className="text-4xl font-light w-[90%] leading-tight"
                >
                    Es el fondo de inclusión Social Energético (FISE) creado por
                    la ley Nº 29852, que asignara recursos para la compensación
                    social y promoción para el acceso al GLP de los sectores
                    vulnerables. Lo cual significa que a través de este Fondo se
                    entregara mensualmente vales a los ciudadanos de las
                    regiones con mayor nivel de pobreza, para que compren{" "}
                    <strong className="font-semibold">
                        un balón de GLP de 10 kg con S/. 25.00 de descuento.
                    </strong>
                </motion.p>
            </section>
            <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/BcuaXzBUfno?si=OrvY0TgsZjai6ln9&amp;controls=0"
                title="CVC Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            <section className="w-full flex h-[640px] relative overflow-hidden">
                <div className="w-1/2 flex justify-start items-end h-full">
                    <div className="flex justify-start items-end bg-custom-green h-full p-24 w-full">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="text-6xl text-custom-cream w-1/2"
                        >
                            ¿Quiénes serán los beneficiados?
                        </motion.h1>
                    </div>
                </div>
                <div className="w-1/2 flex h-full justify-center p-12 bg-custom-cream">
                    <ul className="flex flex-col justify-evenly items-center w-3/4 m-0">
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                            }}
                            className="list-disc font-light leading-tight text-4xl"
                        >
                            Los usuarios residenciales de electricidad con
                            consumo promedio anual menor o igual a 70 KWh y que
                            cuenten con cocina a GLP.
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                            }}
                            className="list-disc font-light leading-tight text-4xl"
                        >
                            Las personas que no cuentan con el servicio
                            residencial de electricidad pero si cuentan con una
                            cocina a GLP.
                        </motion.li>
                    </ul>
                </div>
            </section>
            <section className="w-full flex flex-col gap-16 relative overflow-hidden bg-custom-sky px-28 py-32">
                <h1 className="text-6xl font-medium text-custom-cream">
                    Requisitos para acceder
                </h1>
                <p className="text-4xl font-light w-[90%] leading-tight text-custom-cream">
                    El nuevo procedimiento de identificación de beneficiarios
                    del FISE permite que más viviendas en todo el país puedan
                    acceder a una energía menos contaminante y de manera
                    económica, para lo cual se debe cumplir con los siguientes
                    requisitos.
                </p>
                <ul className="self-center text-center flex flex-col gap-4 w-full">
                    <li className="px-32 py-8 text-2xl bg-custom-cream text-custom-grey rounded-full w-full text-center self-center">
                        Criterio socioeconómico y geográfico (distritos más
                        pobres)
                    </li>
                    <li className="px-32 py-8 text-2xl bg-custom-cream text-custom-grey rounded-full w-[90%] text-center self-center">
                        No contar con gas natural residencial en su distrito
                    </li>
                    <li className="px-32 py-8 text-2xl bg-custom-cream text-custom-grey rounded-full w-[80%] text-center self-center">
                        Consumo de electricidad: ≤ 70 Kwh mes{" "}
                    </li>
                    <li className="px-24 py-8 text-2xl bg-custom-cream text-custom-grey rounded-full w-[70%] text-center self-center">
                        Debidamente identificado en RENIEC
                    </li>
                    <li className="px-24 py-8 text-2xl bg-custom-cream text-custom-grey rounded-full w-[60%] text-center self-center">
                        Ingreso anual: S/.19.000 (SUNAT)
                    </li>
                    <li className="px-24 py-8 text-2xl bg-custom-cream text-custom-grey rounded-full w-[50%] text-center self-center">
                        Un solo beneficiario por familia
                    </li>
                    <li className="px-0 py-8 text-2xl bg-custom-cream text-custom-grey rounded-full w-[40%] text-center self-center">
                        Precariedad de vivienda
                    </li>
                    <li className="px-0 py-8 text-2xl bg-custom-cream text-custom-grey rounded-full w-[30%] text-center self-center">
                        Contar con cocina a gas
                    </li>
                    <li className="px-0 py-8 text-2xl bg-custom-cream text-custom-grey rounded-full w-[20%] text-center self-center">
                        Beneficiario
                    </li>
                </ul>
            </section>
            <section className="w-full flex h-[320px] relative overflow-hidden">
                <div className="w-1/2 flex justify-start items-end h-full">
                    <div className="flex justify-start items-end bg-custom-red h-full p-24 w-full">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="text-6xl text-custom-cream"
                        >
                            Conoce más
                        </motion.h1>
                    </div>
                </div>
                <div className="w-1/2 flex h-full justify-center p-12 bg-custom-cream">
                    <ul className="flex flex-col justify-evenly items-center w-3/4 m-0 text-custom-red">
                        <Link
                            href=""
                            className="font-normal leading-tight text-4xl"
                        >
                            Beneficiarios del programa
                        </Link>
                        <Link
                            href=""
                            className="font-normal leading-tight text-4xl"
                        >
                            Tríptico informativo del FISE
                        </Link>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Page;
