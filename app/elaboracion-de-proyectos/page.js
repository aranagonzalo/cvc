"use client";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Trafos en planta eléctrica"
                src="/images/elaboracion-de-proyectos/Trafo60MVA TN 1.jpg"
                title="Elaboración de proyectos"
            />
            <section className="w-full flex h-[50vw]">
                <div className="relative w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src={`/images/elaboracion-de-proyectos/1.jpg`}
                        alt="Ingeniero de obra con brazos cruzados"
                    />
                </div>
                <div className="px-28 py-24 bg-custom-blue flex flex-col w-1/2 relative justify-between">
                    <motion.h1
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-custom-cream font-normal text-4xl leading-tight w-3/4"
                    >
                        Ingeniería
                    </motion.h1>
                    <motion.div
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-lg text-custom-cream font-normal pt-4 leading-normal text-justify w-3/4"
                    >
                        <p>
                            Brindamos el servicio de ingeniería especializada
                            para proyectos de distribución, generación y
                            transmisión eléctrica a nivel nacional, garantizando
                            la calidad de nuestros servicios.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="w-full flex h-[50vw]">
                <div className="relative w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src={`/images/elaboracion-de-proyectos/2.jpg`}
                        alt="Ingeniero de obra con brazos cruzados"
                    />
                </div>
                <div className="px-28 py-24 bg-custom-sky flex flex-col w-1/2 relative justify-between">
                    <motion.h1
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-custom-cream font-normal text-4xl leading-tight w-full"
                    >
                        Estudio de Coordinación de Protecciones (ECP)
                    </motion.h1>
                    <motion.div
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-lg text-custom-cream font-normal pt-4 leading-normal text-justify w-full"
                    >
                        <p>
                            Realizamos la ingeniería, pruebas y verificación del
                            comportamiento de los elementos del sistema de
                            protección en Redes de Distribución para buscar la
                            menor afectación de la continuidad de la operación
                            ante el desarrollo de fallas por corto circuito y
                            así garantizar la confiabilidad, selectividad y
                            seguridad de los sistemas eléctricos.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="w-full flex h-[50vw]">
                <div className="relative w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src={`/images/elaboracion-de-proyectos/2.jpg`}
                        alt="Ingeniero de obra con brazos cruzados"
                    />
                </div>
                <div className="px-28 py-24 bg-custom-red flex flex-col w-1/2 relative justify-between">
                    <motion.h1
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-custom-cream font-normal text-4xl leading-tight w-full"
                    >
                        Esquema de Rechazo Automático de Carga y Generación
                        (ERACG)
                    </motion.h1>
                    <motion.div
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-lg text-custom-cream font-normal pt-4 leading-normal text-justify w-full"
                    >
                        <p>
                            Realizamos la ingeniería, pruebas e implementación
                            del ERAGG con la finalidad de preservar la
                            estabilidad y seguridad del Sistema Eléctrico.
                        </p>
                        <p className="pt-6">
                            Recuerda que esta implementación es obligación de
                            todos los clientes libres.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="w-full flex h-[50vw]">
                <div className="relative w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src={`/images/elaboracion-de-proyectos/2.jpg`}
                        alt="Ingeniero de obra con brazos cruzados"
                    />
                </div>
                <div className="px-28 py-24 bg-custom-green flex flex-col w-1/2 relative justify-between">
                    <motion.h1
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-custom-cream font-normal text-4xl leading-tight w-3/4"
                    >
                        Operación y mantenimiento
                    </motion.h1>
                    <motion.div
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-lg text-custom-cream font-normal pt-4 leading-normal text-justify w-full"
                    >
                        <p>
                            Realizamos la operación y el mantenimiento de los
                            sistemas eléctricos en baja, media y alta tensión
                            propios o de terceros en sistemas de Transmisión,
                            Generación y Distribución.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="w-full flex h-[50vw]">
                <div className="relative w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src={`/images/elaboracion-de-proyectos/2.jpg`}
                        alt="Ingeniero de obra con brazos cruzados"
                    />
                </div>
                <div className="px-28 py-24 bg-custom-yellow flex flex-col w-1/2 relative justify-between">
                    <motion.h1
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-custom-grey font-normal text-4xl leading-tight w-full"
                    >
                        Asesoría
                    </motion.h1>
                    <motion.div
                        initial={{ x: 15, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 0.1,
                            },
                        }}
                        className="text-lg text-custom-grey font-normal pt-4 leading-normal text-justify w-full"
                    >
                        <p>
                            Brindamos asesoramiento en optimización energética
                            industrial y en desarrollo de proyectos eléctricos
                            de media, alta y muy alta tensión.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Add other sections similarly */}

            <section className="w-full flex p-32 bg-custom-cream justify-between items-center">
                <motion.h1
                    initial={{ x: 15, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            delay: 0.1,
                        },
                    }}
                    className="text-6xl text-custom-grey w-1/2 leading-tight font-normal"
                >
                    ¿Te gustaría solicitar nuestros servicios?
                </motion.h1>
                <Link
                    href="/#formContainer"
                    className="text-4xl font-normal rounded-[60px] bg-custom-grey text-custom-cream px-16 h-fit py-8 hover:scale-105 hover:shadow-lg transition-all"
                >
                    Escríbenos
                </Link>
            </section>
        </div>
    );
};

export default page;
