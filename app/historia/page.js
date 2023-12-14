"use client";
import Hero from "@/components/Hero.jsx";
import StoryCardRight from "@/components/Historia/StoryCardRight.jsx";
import StoryCardLeft from "@/components/Historia/StoryCardLeft.jsx";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Generadores eléctricos a lo lejos con efecto de color pastel"
                src="/images/historia/historia.jpg"
                title="Conoce nuestra historia"
            />
            <section className="w-full flex h-[100vh]">
                <div className="px-28 py-40 bg-custom-sky flex flex-col w-1/2 gap-8 items-center relative">
                    <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-custom-cream font-thin leading-tight text-lg text-justify"
                    >
                        CVC energía (antes Coelvisac) fue un proyecto que se
                        inició en su fase de estudio desde 1992 liderado por el
                        Ing. Percy Ortiz Espinoza, actual Presidente de la
                        empresa, que en un trabajo coordinado con la Asociación
                        de Agricultores de Villacuri y como producto de su
                        interés en el desarrollo eléctrico de esta zona agrícola
                        de Ica donde primaba la utilización del Petróleo como
                        fuente de energía para las actividades de esa industria.
                    </motion.p>
                    <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.4,
                            },
                        }}
                        className="text-custom-cream font-thin leading-tight text-lg text-justify"
                    >
                        En 1995, CVC energía obtuvo su primera Concesión de
                        Distribución Eléctrica para la zona de Villacurí,
                        otorgada por el Estado Peruano. A la fecha, CVC energía
                        cuenta con varias Concesiones de distribución producto
                        de la dinámica y emprendimiento empresarial del grupo.
                    </motion.p>
                    <div className="absolute bottom-8 right-8 font-extralight text-3xl text-right text-custom-cream">
                        <p>Ing. Percy</p>
                        <p>Ortiz Mendoza</p>
                    </div>
                </div>
                <div className="relative w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/historia/Percy Ortiz.jpg"
                        alt="Ingeniero Percy Ortiz Mendoza"
                    />
                </div>
            </section>
            <section className="w-full flex flex-col bg-custom-cream py-32 relative">
                <StoryCardRight
                    first={true}
                    last={false}
                    text=""
                    date="1994"
                    title="Fundación"
                />
                <StoryCardLeft
                    text="Es la zona de concesión de distribución más desarrollada, dado que fue otorgada a CVC energía en el año 1995. En ese entonces, tan sólo existían 500 hectáreas cultivadas. Ahora, existen más de 40,000 hectáreas cultivadas que generan más de 160,000 puestos de trabajo, gracias al soporte energético que promovió CVC energía."
                    date="1995"
                    title="Otorgamiento Villacurí"
                />
                <StoryCardRight
                    text="Fueron otorgadas en el 2001. Ambas concesiones albergan suministros residenciales y operaciones de agricultura producto de concesiones y autorizaciones."
                    date="2001"
                    title="Otorgamiento Andahuasi e Íllimo"
                />
                <StoryCardLeft
                    text="Fue otorgada en el año 2014, el crecimiento dinámico de su demanda de potencia fue más rápida gracias a los proyectos del gobierno que incentivaron las inversiones por más de $ 1,000 millones para el proyecto de irrigación de Olmos, parte de la zona de concesión de distribución."
                    date="2014"
                    title="Otorgamiento Olmos"
                />
                <StoryCardRight
                    text=" Fue otorgada en el 2021 con una inversión en activos de más de 13 millones y una demanda proyectada de 420 kW. Tenemos el objetivo de suministrar energía eléctrica para impulsar proyectos de agroexportación que generen un mayor desarrollo en las comunidades y comercios."
                    date="2021"
                    title="Otorgamiento Tacna"
                />
                <StoryCardLeft
                    text="Después de más de 20 años de operar, cambiamos nuestra imagen, pero siempre manteniendo la esencia de nuestro trabajo."
                    logo
                    date="2022"
                    title="Renovamos nuestra imagen"
                />
                <StoryCardRight
                    first={false}
                    last={true}
                    text="En el 2023 nos otorgaron ambas concesiones. Piura contará con una inversión de 18 millones de dólares y una potencia demandada de 1200 kw. 
Mientras que Moquegua, con una inversión de más de 11 millones y una potencia demandada de 160 kW. De esta manera podremos abastecer a más de 80 mil hectáreas rurales que aún no tienen acceso a electricidad."
                    date="2023"
                    title="Otorgamiento Moquegua y Piura"
                />
            </section>
        </div>
    );
};

export default page;
