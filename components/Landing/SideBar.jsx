"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SideBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="overflow-hidden z-40 absolute flex -right-[101px] top-[490px] bg-custom-blue text-custom-cream gap-4 py-2 px-3 -rotate-90 items-center rounded-t-lg"
            >
                <p className="text-lg font-light mr-8">Contáctanos</p>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                    className="cursor-pointer"
                >
                    <Image
                        className="rotate-90"
                        src="/images/landing/contact.svg"
                        alt="Icono de contacto"
                        width={28}
                        height={28}
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="cursor-pointer"
                >
                    <Image
                        src="/images/landing/whatsapp.svg"
                        alt="Icono de contacto"
                        width={28}
                        height={28}
                    />
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`cursor-pointer transition-all absolute top-1/2 translate-y-1 p-2 pr-6 ${
                    isHovered ? "right-8" : "-right-28"
                } bg-custom-cream text-custom-blue rounded-lg z-20`}
            >
                +51 987 654 321
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                className={`cursor-pointer transition-all absolute top-1/2 translate-y-12 p-2 pr-6 ${
                    isHovered2 ? "right-8" : "-right-28"
                } bg-custom-cream text-custom-blue rounded-lg z-20`}
            >
                Contáctanos
            </motion.div>
        </>
    );
};

export default SideBar;
