"use client";

import Image from "next/image";
import SideBar from "@/components/SideBar";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <SideBar />
            <div className="w-full flex flex-col">
                <section className="w-full flex flex-col relative bg-custom-grey px-6 py-12 md:p-24 lg:p-32 justify-center">
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="z-10 text-custom-grey bg-custom-cream py-3 px-5 w-fit rounded-full"
                    >
                        Descubre los beneficios
                    </motion.button>
                </section>
            </div>
        </>
    );
}
