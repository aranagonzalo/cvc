"use client";
import Hero from "@/components/Hero.jsx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AhorroEnergiaForm from "@/components/Form/AhorroEnergiaForm";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const preguntasFrecuentes = [
    {
        id: 1,
        title: "¿Quiénes son los Clientes Libres?",
        text: "El mercado eléctrico se divide en dos tipos de clientes: los regulados y los libres. Los clientes regulados están supeditados a las tarifas fijadas por el Estado y deben adquirir su energía del distribuidor asignado a la zona en la que se encuentren. Por otro lado, los clientes libres tienen la oportunidad de negociar el costo de la energía con un proveedor y beneficiarse de precios más bajos de energía eléctrica.",
    },
    {
        id: 2,
        title: "¿Cuánto puedo ahorrar siendo Usuario Libre?",
        text: "Tu facturación eléctrica mensual se reduce entre 15%-30%, dependiendo de tu nivel de consumo.",
    },
    {
        id: 3,
        title: "¿Quiénes pueden ser Clientes Libres?",
        text: "Todas aquellas empresas que tengan una Máxima Demanda Anual de por lo menos 200kW. Esto puedes verificarlo rápidamente en tu último recibo de luz.",
    },
    {
        id: 4,
        title: "¿Mi distribuidor actual me cortará la luz o dejará de atender mis averías o solicitudes?",
        text: "La Ley de Concesiones Eléctricas y la Norma Técnica de Calidad de los Servicios Eléctricos respaldan esta condición. La calidad del servicio seguirá siendo la misma y el distribuidor está obligado a atender las averías y mantenimientos en su red de todos sus usuarios por igual, sino existe una multa de por medio. Nosotros facturamos tus consumos de luz y atendemos tus requerimientos para garantizar la continuidad y calidad del suministro.",
    },
];

const dots = [
    {
        left: "20px",
        top: "108px",
        number: "2",
    },
    {
        left: "26px",
        top: "150px",
        number: "11",
    },
    {
        left: "40px",
        top: "186px",
        number: "38",
    },
    {
        left: "74px",
        top: "194px",
        number: "1",
    },
    {
        left: "80px",
        top: "240px",
        number: "8",
    },
    {
        left: "134px",
        top: "220px",
        number: "1",
    },
    {
        left: "104px",
        top: "276px",
        number: "4",
    },
    {
        left: "124px",
        top: "330px",
        number: "82",
    },
    {
        left: "124px",
        top: "360px",
        number: "3",
    },
    {
        left: "228px",
        top: "290px",
        number: "3",
    },
    {
        left: "164px",
        top: "424px",
        number: "56",
    },
    {
        left: "184px",
        top: "384px",
        number: "1",
    },
    {
        left: "264px",
        top: "474px",
        number: "1",
    },
];

const Page = () => {
    const [isHovered, setIsHovered] = useState(false);

    const [dotData, setDotData] = useState({
        left: "",
        top: "",
        number: "",
    });

    const [activeQuestion, setActiveQuestion] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });

    const handleHover = (d) => {
        setIsHovered(true);
        setDotData({
            left: d.left,
            top: d.top,
            number: d.number,
        });
    };

    const handleExit = () => {
        setIsHovered(false);
    };

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

    const targetContainerRef = useRef(null);

    const scrollToContainer = () => {
        if (targetContainerRef.current) {
            targetContainerRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
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
                <motion.button
                    onClick={scrollToContainer}
                    target="blank"
                    className="text-4xl font-medium rounded-[40px] bg-custom-cream text-custom-grey px-16 h-fit py-8 mr-24 hover:scale-105 hover:shadow-lg transition-all"
                >
                    Empieza aquí
                </motion.button>
            </section>
            <section className="w-full flex relative overflow-hidden">
                <div className="w-1/2 flex justify-start items-end h-full">
                    <div className="flex flex-col justify-start items-end bg-custom-blue h-full p-28 w-full">
                        <h1 className=" self-start mb-12 text-4xl text-custom-cream font-light w-[85%]">
                            Potenciamos el desarrollo a lo largo del país
                        </h1>
                        <div className="w-full h-auto flex self-center relative">
                            <Image
                                width={380}
                                height={200}
                                className="self-center"
                                alt="Mapa político del Perú"
                                src="/images/zonas-de-concesion/mapa.svg"
                            />
                            {dots.map((d, i) => (
                                <div
                                    key={i}
                                    onMouseOver={() => handleHover(d)}
                                    onMouseLeave={() => handleExit()}
                                    className={`cursor-pointer items-center justify-center bg-custom-sky text-custom-sky hover:text-custom-cream text-sm hover:text-[1px] rounded-full w-[14px] h-[14px] absolute hover:h-14 hover:-translate-x-1/3 hover:-translate-y-1/3 hover:w-14 transition-all flex`}
                                    style={{ top: d.top, left: d.left }}
                                >
                                    <span
                                        className={`z-50 ${
                                            isHovered ? "text-xs" : "text-[1px]"
                                        }`}
                                    >
                                        {d.number}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center p-32 bg-custom-cream">
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
                            <h1 className="font-semibold text-7xl">+210</h1>
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
                            <h1 className="font-semibold text-7xl">+220</h1>
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
                            <h1 className="font-semibold text-7xl">+70M</h1>
                            <p className="font-extralight text-xl">
                                en ahorros anuales
                            </p>
                        </motion.li>
                    </ul>
                </div>
            </section>
            <section className="w-full h-[520px] flex">
                <div className="w-1/3 relative">
                    <Image
                        alt="Maquinaria"
                        src="/images/ahorra-energia/1.png"
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
            <section
                ref={targetContainerRef}
                className="w-full flex gap-48 relative overflow-hidden bg-custom-cream px-28 py-32"
            >
                <div className="w-1/2">
                    <h1 className="text-5xl font-normal text-custom-grey w-[65%] leading-tight">
                        ¡Déjanos tus datos para simular gratuitamente tu ahorro!
                    </h1>
                </div>
                <div className="w-1/2">
                    <AhorroEnergiaForm color="cream" />
                </div>
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
                    <div className="w-full">
                        <div className="flex justify-evenly">
                            <Image
                                width={140}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/backus.png"
                            />
                            <Image
                                width={120}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/nestle.png"
                            />
                            <Image
                                width={180}
                                height={0}
                                className="object-contain"
                                alt=""
                                src="/images/ahorra-energia/amcor.png"
                            />
                        </div>
                    </div>
                </Slider>
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
        </div>
    );
};

export default Page;
