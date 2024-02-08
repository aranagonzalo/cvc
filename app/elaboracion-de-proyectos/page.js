"use client";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
    {
        title: "Ingeniería",
        text: "Brindamos el servicio de ingeniería especializada para proyectos de distribución, generación y transmisión eléctrica a nivel nacional, garantizando la calidad de nuestros servicios.",
        color: "bg-custom-blue",
        img: "1",
    },
    {
        title: "Estudio de Coordinación de Protecciones (ECP)",
        text: "Realizamos la ingeniería, pruebas y verificación del comportamiento de los elementos del sistema de protección en Redes de Distribución para buscar la menor afectación de la continuidad de la operación ante el desarrollo de fallas por corto circuito y así garantizar la confiabilidad, selectividad y seguridad de los sistemas eléctricos.",
        color: "bg-custom-sky",
        img: "2",
    },
    {
        title: "Esquema de Rechazo Automático de Carga y Generación (ERACG)",
        text: "Realizamos la ingeniería, pruebas e implementación del ERAGG con la finalidad de preservar la estabilidad y seguridad del Sistema Eléctrico. Recuerda que esta implementación es obligación de todos los clientes libres.",
        color: "bg-custom-red",
        img: "3",
    },
    {
        title: "Operación y mantenimiento",
        text: "Realizamos la operación y el mantenimiento de los sistemas eléctricos en baja, media y alta tensión propios o de terceros en sistemas de Transmisión, Generación y Distribución. ",
        color: "bg-custom-green",
        img: "4",
    },
    {
        title: "Asesoría",
        text: "Brindamos asesoramiento en optimización energética industrial y en desarrollo de proyectos eléctricos de media, alta y muy alta tensión.",
        color: "bg-custom-yellow",
        img: "5",
    },
];

const page = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Trafos en planta eléctrica"
                src="/images/elaboracion-de-proyectos/Trafo60MVA TN 1.jpg"
                title="Elaboración de proyectos"
            />
            {sections.map(({ title, text, color, img }) => (
                <section key={img} className="w-full flex h-[50vw]">
                    <div className="relative w-1/2">
                        <Image
                            className="object-cover"
                            fill
                            src={`/images/elaboracion-de-proyectos/${img}.jpg`}
                            alt="Ingeniero de obra con brazos cruzados"
                        />
                    </div>
                    <div
                        className={`px-28 py-24 ${color} flex flex-col w-1/2 relative justify-between`}
                    >
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
                            className={`${
                                img === "5"
                                    ? "text-custom-grey"
                                    : "text-custom-cream"
                            } font-normal ${
                                img === "2" || img === "3" ? "w-full" : "w-3/4"
                            } text-4xl leading-tight`}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            initial={{ x: 15, opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.4,
                                    delay: 0.1,
                                },
                            }}
                            className={`text-lg ${
                                img === "5"
                                    ? "text-custom-grey"
                                    : "text-custom-cream"
                            } font-normal pt-4 leading-normal text-justify w-3/4`}
                        >
                            {text}
                        </motion.p>
                    </div>
                </section>
            ))}

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
                    target="blank"
                    className="text-4xl font-normal rounded-[60px] bg-custom-grey text-custom-cream px-16 h-fit py-8 hover:scale-105 hover:shadow-lg transition-all"
                >
                    Escríbenos
                </Link>
            </section>
        </div>
    );
};

export default page;
