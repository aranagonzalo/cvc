"use client";
import Hero from "@/components/Hero.jsx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AhorroEnergiaForm from "@/components/Form/AhorroEnergiaForm";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const preguntasFrecuentes = [
    {
        id: 1,
        title: "¿Qué es el mercado libre?",
        text: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.",
    },
    {
        id: 2,
        title: "¿Cuánto puedo ahorrar siendo Usuario Libre?",
        text: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.",
    },
    {
        id: 3,
        title: "¿Quiénes pueden ser Usuarios Libres?",
        text: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.",
    },
    {
        id: 4,
        title: "¿Mi distribuidor actual me cortará la luz o dejará de atender mis averías o solicitudes?",
        text: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.",
    },
];

const Page = () => {
    const [activeQuestion, setActiveQuestion] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });

    const handleClick = (p) => {
        setActiveQuestion({
            1: false,
            2: false,
            3: false,
            4: false,
            [p.id]: !activeQuestion[p.id],
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Balones de gas"
                src="/images/ahorra-energia/ahorra-energia.jpg"
                title="Ahorra energía en tu empresa"
            />
            <section className="w-full flex p-32 bg-custom-grey justify-between items-center">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.6,
                            delay: 0.2,
                        },
                    }}
                    className="text-6xl text-custom-cream w-1/2 leading-tight font-medium"
                >
                    Conviértete en cliente libre con nosotros.
                </motion.h1>
                <Link
                    href="https://www.bumeran.com.pe/perfiles/empresa_consorcio-electrico-de-villacuri-cvc-energia_13228415.html"
                    target="blank"
                    className="text-4xl font-medium rounded-[40px] bg-custom-cream text-custom-grey px-16 h-fit py-8 mr-24 hover:scale-105 hover:shadow-lg transition-all"
                >
                    Empieza aquí
                </Link>
            </section>
            <section className="w-full flex h-[640px] relative overflow-hidden">
                <div className="w-1/2 flex justify-start items-end h-full">
                    <div className="flex justify-start items-end bg-custom-blue h-full p-28 w-full">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="text-5xl text-custom-cream font-light leading-tight"
                        >
                            Si facturas{" "}
                            <strong className="font-bold">
                                más de 25 mil soles
                            </strong>{" "}
                            en luz puedes acceder al mercado libre de energía
                        </motion.h1>
                    </div>
                </div>
                <div className="w-1/2 flex h-full justify-center p-32 bg-custom-cream">
                    <ul className="flex flex-col justify-evenly gap-12 items-end w-full m-0">
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                            }}
                            className="text-right"
                        >
                            <h1 className="font-semibold text-7xl">+100</h1>
                            <p className="font-extralight text-xl">
                                clientes libres
                            </p>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                            }}
                            className="text-right"
                        >
                            <h1 className="font-semibold text-7xl">+150</h1>
                            <p className="font-extralight text-xl">
                                MW contratados
                            </p>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                            }}
                            className="text-right"
                        >
                            <h1 className="font-semibold text-7xl">
                                +S/. 110 M
                            </h1>
                            <p className="font-extralight text-xl">
                                ahorros anuales
                            </p>
                        </motion.li>
                    </ul>
                </div>
            </section>
            <section className="w-full h-[520px] flex">
                <div className="w-1/3 relative">
                    <Image
                        alt="Maquinaria"
                        src="/images/ahorra-energia/1.jpg"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="w-1/3 relative">
                    <Image
                        alt="Maquinaria"
                        src="/images/ahorra-energia/2.jpg"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="w-1/3 relative">
                    <Image
                        alt="Maquinaria"
                        src="/images/ahorra-energia/3.jpg"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>
            <section className="w-full flex gap-48 relative overflow-hidden bg-custom-cream px-28 py-32">
                <div className="w-1/2">
                    <h1 className="text-7xl font-medium text-custom-grey w-3/4 leading-tight">
                        ¡Déjanos tus datos para simular gratuitamente tu ahorro!
                    </h1>
                </div>
                <div className="w-1/2">
                    <AhorroEnergiaForm color="cream" />
                </div>
            </section>
            <section className="w-full flex h-[320px] relative overflow-hidden">
                <div className="w-3/4 flex justify-start items-center h-full">
                    <div className="flex flex-col justify-start bg-custom-green h-full pl-24 py-24 w-full">
                        <h1 className="text-5xl text-custom-cream leading-tight">
                            Más información
                        </h1>
                        <h1 className="text-5xl text-custom-cream leading-tight">
                            al +51 951 306 952
                        </h1>
                    </div>
                </div>
                <div className="w-1/4 flex h-full justify-end pr-24 py-24 bg-custom-green text-custom-cream items-center">
                    <Link
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=51951306952"
                        className="relative font-normal leading-tight text-4xl"
                    >
                        <Image
                            height={128}
                            width={128}
                            alt="WhatsApp"
                            src="/images/ahorra-energia/whatsapp.svg"
                        />
                    </Link>
                </div>
            </section>
            <section className="w-full flex relative overflow-hidden bg-custom-sky">
                <div className="relative w-[45%]">
                    <Image
                        fill
                        alt="Trabajador de CVC saludando"
                        src="/images/ahorra-energia/4.jpg"
                        className="object-cover"
                    />
                </div>
                <div className="w-[55%] flex flex-col p-32 gap-16 text-custom-cream">
                    <h1 className="leading-tight font-normal text-6xl w-3/4 pb-12">
                        Cambia tu condición en tres pasos
                    </h1>
                    <div className="flex gap-8 items-center">
                        <h1 className="font-semibold text-9xl pr-6">1</h1>
                        <p className="font-extralight text-lg w-1/4">
                            suscripción y firma del contrato
                        </p>
                    </div>
                    <div className="flex gap-8 items-center">
                        <h1 className="font-semibold text-9xl">2</h1>
                        <p className="font-extralight text-lg w-1/4">
                            notificación al distribuidor local y osinergmin
                        </p>
                    </div>
                    <div className="flex gap-8 items-center">
                        <h1 className="font-semibold text-9xl">3</h1>
                        <p className="font-extralight text-lg w-1/4">
                            inicio del nuevo contrato en 12 meses
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-custom-blue text-custom-cream flex-col p-32">
                <h1 className="font-medium text-5xl text-center pb-20">
                    Preguntas frecuentes
                </h1>
                {preguntasFrecuentes.map((p) => (
                    <div
                        key={p.id}
                        onClick={() => handleClick(p)}
                        className="flex flex-col font-normal text-3xl pb-8 gap-8 hover:scale-105 transition-all cursor-pointer"
                    >
                        <div className="flex items-center">
                            <Image
                                width={64}
                                height={64}
                                alt="Icono de +"
                                src={`/images/ahorra-energia/${
                                    activeQuestion[p.id] ? "minus" : "plus"
                                }.png`}
                            />
                            <h2>{p.title}</h2>
                        </div>

                        {activeQuestion[p.id] && (
                            <p className="text-lg font-extralight pl-[72px] pb-8 w-3/4">
                                {p.text}
                            </p>
                        )}
                    </div>
                ))}
            </section>
            <section className="flex flex-col p-32 bg-custom-cream">
                <h1 className="font-medium text-5xl text-center pb-20 text-custom-grey">
                    Algunos de nuestros clientes
                </h1>
                <Slider {...settings}>
                    <div className="w-full">
                        <div className="flex justify-evenly">
                            <Image
                                width={220}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/kimberly.png"
                            />
                            <Image
                                width={180}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/republica.png"
                            />
                            <Image
                                width={160}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/agromar.png"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-evenly">
                            <Image
                                width={140}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/dayr.png"
                            />
                            <Image
                                width={140}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/razzeto.png"
                            />
                            <Image
                                width={200}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/newton-college.png"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-evenly">
                            <Image
                                width={220}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/sol-de-laredo.png"
                            />
                            <Image
                                width={180}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/iron-mountain.png"
                            />
                            <Image
                                width={120}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/mali.png"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-evenly">
                            <Image
                                width={140}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/wenco.png"
                            />
                            <Image
                                width={120}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/agrovision.png"
                            />
                            <Image
                                width={180}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/chutana.png"
                            />
                        </div>
                    </div>
                </Slider>
            </section>
        </div>
    );
};

export default Page;
