"use client";

import React, { Component, useEffect, useState, useRef } from "react";
import { User2, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredSection, setHoveredSection] = useState(null);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const handleHoverSection = (section) => {
        setHoveredSection(section);
    };

    const isActive = (section) => hoveredSection === section;

    const navbarRef = useRef(null);

    useEffect(() => {
        const showNav = gsap
            .fromTo(navbarRef.current, { y: -100 }, { y: 0, duration: 0.3 })
            .progress(1);
        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                self.direction === -1 ? showNav.play() : showNav.reverse();
            },
        });
    }, []);

    return (
        <motion.header
            ref={navbarRef}
            className={`transition-[padding] fixed z-50 w-full items-center hidden lg:flex lg:flex-col ${
                isHovered ? "px-0" : "px-5"
            }`}
        >
            <motion.nav
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                className={`transition-all flex w-full text-custom-cream bg-custom-grey/[.95] backdrop-blur text-sm font-normal px-16 py-3 rounded-b-2xl ${
                    isHovered ? "items-start" : "items-center"
                }`}
            >
                <Link href="/" className="w-[14%] flex items-center">
                    <Image
                        src="/images/logo/logo.png"
                        alt="Logo CVC Energía"
                        width={132}
                        height={128}
                    />
                </Link>
                <ul
                    className={`flex justify-evenly w-[61%] ${
                        isHovered ? "pt-[9px] items-start" : "pt-0 items-center"
                    }`}
                >
                    <li>
                        <div
                            className={`w-20 transition-all ${
                                !isActive("nosotros")
                                    ? "text-custom-grey-300"
                                    : "text-custom-cream"
                            }`}
                            onMouseEnter={() => handleHoverSection("nosotros")}
                            onMouseLeave={() => handleHoverSection(null)}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`${
                                    isHovered
                                        ? "pb-8"
                                        : "pb-0 text-custom-cream"
                                }`}
                            >
                                Nosotros
                            </motion.p>
                            <motion.ul
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`font-light text-sm ${
                                    isHovered ? "flex flex-col pb-4" : "hidden"
                                }`}
                            >
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="pb-2 w-full"
                                        href="/historia"
                                    >
                                        Historia
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="py-2 w-full"
                                        href="/cultura"
                                    >
                                        Cultura CVC
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="pt-2 w-full"
                                        href="/activos"
                                    >
                                        Nuestros activos
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="pt-2 w-full"
                                        href="/noticias"
                                    >
                                        Noticias
                                    </Link>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`w-20 transition-all ${
                                !isActive("soluciones")
                                    ? "text-custom-grey-300"
                                    : "text-custom-cream"
                            }`}
                            onMouseEnter={() =>
                                handleHoverSection("soluciones")
                            }
                            onMouseLeave={() => handleHoverSection(null)}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`${
                                    isHovered
                                        ? "pb-8"
                                        : "pb-0 text-custom-cream"
                                }`}
                            >
                                Soluciones
                            </motion.p>
                            <motion.ul
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`font-light text-sm ${
                                    isHovered ? "flex flex-col pb-4" : "hidden"
                                }`}
                            >
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="pb-2 w-full"
                                        href="/distribucion"
                                    >
                                        Distribución
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="py-2 w-full"
                                        href="/transmision"
                                    >
                                        Transmisión
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="py-2 w-full"
                                        href="/generacion"
                                    >
                                        Generación
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="py-2 w-full"
                                        href="/elaboracion-de-proyectos"
                                    >
                                        Diseño y construcción de proyectos
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="pt-2 w-full"
                                        href="/ahorra-energia"
                                    >
                                        Comercialización de energía
                                    </Link>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`w-20 transition-all ${
                                !isActive("zona-cliente")
                                    ? "text-custom-grey-300"
                                    : "text-custom-cream"
                            }`}
                            onMouseEnter={() =>
                                handleHoverSection("zona-cliente")
                            }
                            onMouseLeave={() => handleHoverSection(null)}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`${
                                    isHovered
                                        ? "pb-8"
                                        : "pb-0 text-custom-cream"
                                }`}
                            >
                                Zona Cliente
                            </motion.p>
                            <motion.ul
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`font-light text-sm ${
                                    isHovered ? "flex flex-col pb-4" : "hidden"
                                }`}
                            >
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="pb-2 w-full"
                                        href="/canales-de-atencion"
                                    >
                                        Canales de Atención
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="py-2 w-full"
                                        href="/beneficiarios-fise"
                                    >
                                        Beneficiarios FISE
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="py-2 w-full"
                                        href="/guia-de-reclamos"
                                    >
                                        Reclamos
                                    </Link>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`w-20 transition-all ${
                                !isActive("mi-cuenta")
                                    ? "text-custom-grey-300"
                                    : "text-custom-cream"
                            }`}
                            onMouseEnter={() => handleHoverSection("mi-cuenta")}
                            onMouseLeave={() => handleHoverSection(null)}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`${
                                    isHovered
                                        ? "pb-8"
                                        : "pb-0 text-custom-cream"
                                }`}
                            >
                                <Link
                                    href="http://190.187.233.82/iscon/Login.aspx"
                                    target="_blank"
                                >
                                    Mi Cuenta
                                </Link>
                            </motion.p>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`w-20 transition-all ${
                                !isActive("canal-etico")
                                    ? "text-custom-grey-300"
                                    : "text-custom-cream"
                            }`}
                            onMouseEnter={() =>
                                handleHoverSection("canal-etico")
                            }
                            onMouseLeave={() => handleHoverSection(null)}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`${
                                    isHovered
                                        ? "pb-8"
                                        : "pb-0 text-custom-cream"
                                }`}
                            >
                                Canal ético
                            </motion.p>
                            <motion.ul
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`font-light text-sm ${
                                    isHovered ? "flex flex-col pb-4" : "hidden"
                                }`}
                            >
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="pb-2 w-full"
                                        href="http://190.187.233.86:83/LINEA_ETICA_FORM/Otherfiles/CodigoDeEtica.pdf"
                                        target="_blank"
                                    >
                                        Código de ética
                                    </Link>
                                </motion.li>
                                <motion.li
                                    className="flex"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        className="py-2 w-full"
                                        href="http://190.187.233.86:83/LINEA_ETICA_FORM"
                                        target="_blank"
                                    >
                                        Linea ética
                                    </Link>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </li>
                </ul>
                <ul
                    className={`flex justify-end gap-4 items-center w-3/12 ${
                        isHovered && "pt-1"
                    }`}
                >
                    <li>
                        <Link
                            target="_blank"
                            href="https://pagolink.niubiz.com.pe/pagoseguro/CVCenergia/1603339"
                            className="flex items-center bg-custom-cream text-custom-grey text-xs rounded-full px-4 py-[7px] font-medium"
                        >
                            Paga tu recibo aquí
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="http://190.187.233.82/iscon/Login.aspx"
                            target="_blank"
                        >
                            <User2 fill="#fefdf4" color={"#1d1d1d"} size={20} />
                        </Link>
                    </li>
                    <li>
                        <Search size={16} />
                    </li>
                    <li>
                        <select className="bg-transparent focus:outline-none text-xs">
                            <option>ES</option>
                            <option>EN</option>
                        </select>
                    </li>
                </ul>
            </motion.nav>
        </motion.header>
    );
};

export default Navbar;
