"use client";

import { useState } from "react";
import { User2, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            className={`transition-[padding] fixed z-50 w-full items-center hidden lg:flex lg:flex-col ${
                isHovered ? "px-0" : "px-5"
            }`}
        >
            <motion.nav
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                className={`transition-all flex w-full text-custom-cream bg-custom-grey text-sm font-normal px-16 py-3 rounded-b-2xl ${
                    isHovered ? "items-start" : "items-center"
                }`}
            >
                <div className="w-[14%] flex items-center">
                    <Image
                        src="/images/logo/logo.png"
                        alt="Logo CVC Energía"
                        width={132}
                        height={128}
                    />
                </div>
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
                            <p
                                className={`${
                                    isHovered
                                        ? "pb-8"
                                        : "pb-0 text-custom-cream"
                                }`}
                            >
                                Nosotros
                            </p>
                            <motion.ul
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`font-light text-sm ${
                                    isHovered ? "flex flex-col pb-4" : "hidden"
                                }`}
                            >
                                <li className="flex">
                                    <Link
                                        className="pb-2 w-full"
                                        href="/historia"
                                    >
                                        Historia
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link
                                        className="py-2 w-full"
                                        href="/cultura"
                                    >
                                        Cultura CVC
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link
                                        className="py-2 w-full"
                                        href="/zonas-de-concesion"
                                    >
                                        Zonas de concesión
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link
                                        className="pt-2 w-full"
                                        href="/activos"
                                    >
                                        Activos (fotos)
                                    </Link>
                                </li>
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
                            <p
                                className={`${
                                    isHovered
                                        ? "pb-8"
                                        : "pb-0 text-custom-cream"
                                }`}
                            >
                                Soluciones
                            </p>
                            <motion.ul
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`font-light text-sm ${
                                    isHovered ? "flex flex-col pb-4" : "hidden"
                                }`}
                            >
                                <li className="flex">
                                    <Link className="pb-2 w-full" href="#">
                                        Distribución
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link className="py-2 w-full" href="#">
                                        Transmisión
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link className="py-2 w-full" href="#">
                                        Generación
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link className="py-2 w-full" href="#">
                                        Elaboración de Proyectos
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link className="pt-2 w-full" href="#">
                                        Comercialización de energía
                                    </Link>
                                </li>
                            </motion.ul>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`w-24 transition-all ${
                                !isActive("ahorra-energia")
                                    ? "text-custom-grey-300"
                                    : "text-custom-cream"
                            }`}
                            onMouseEnter={() =>
                                handleHoverSection("ahorra-energia")
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
                                <Link href="/">Ahorra Energía</Link>
                            </motion.p>
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
                            <p
                                className={`${
                                    isHovered
                                        ? "pb-8"
                                        : "pb-0 text-custom-cream"
                                }`}
                            >
                                Zona Cliente
                            </p>
                            <motion.ul
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`font-light text-sm ${
                                    isHovered ? "flex flex-col pb-4" : "hidden"
                                }`}
                            >
                                <li className="flex">
                                    <Link
                                        className="pb-2 w-full"
                                        href="/canales-de-atencion"
                                    >
                                        Canales de Atención
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link
                                        className="py-2 w-full"
                                        href="/beneficiarios-fise"
                                    >
                                        Beneficiarios FISE
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link
                                        className="py-2 w-full"
                                        href="/guia-de-reclamos"
                                    >
                                        Reclamos
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link
                                        className="pt-2 w-full"
                                        href="http://190.187.233.82/iscon/Login.aspx"
                                        target="_blank"
                                    >
                                        Mi cuenta
                                    </Link>
                                </li>
                            </motion.ul>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`w-20 transition-all ${
                                !isActive("linea-etica")
                                    ? "text-custom-grey-300"
                                    : "text-custom-cream"
                            }`}
                            onMouseEnter={() =>
                                handleHoverSection("linea-etica")
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
                                <Link href="/">Linea Ética</Link>
                            </motion.p>
                        </div>
                    </li>
                </ul>
                <ul
                    className={`flex justify-end gap-4 items-center w-3/12 ${
                        isHovered && "pt-1"
                    }`}
                >
                    <li>
                        <button className="flex items-center bg-custom-cream text-custom-grey text-xs rounded-full px-4 py-[7px]">
                            Paga tu recibo aquí
                        </button>
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
                        <select className="bg-custom-grey focus:outline-none text-xs">
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
