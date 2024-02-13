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
                        Somos CVC energía (antes Coelvisac), una empresa peruana
                        fundada en 1994 por el Ing. Percy Ortiz Espinoza, con el
                        propósito de brindar soluciones energéticas, innovadoras
                        y sostenibles de manera eficiente para la contribución
                        del desarrollo de nuestros clientes y del país.
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
                        Estamos encaminados hacia el cambio de la matriz
                        energética, promoviendo activamente el uso de fuentes
                        renovables para impulsar la atención eléctrica en zonas
                        sin acceso. Comprometidos, además, con generar polos de
                        desarrollo que no solo potencien el suministro de
                        energía, sino que también generen empleo y desarrollo en
                        las diversas comunidades en las que operamos.
                    </motion.p>
                    <div className="absolute bottom-8 right-8 font-extralight text-3xl text-right text-custom-cream">
                        <p>Ing. Percy</p>
                        <p>Ortiz Espinoza</p>
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
                    text=""
                    date="1994"
                    title="Fundación"
                />
                <StoryCardLeft
                    text="Es la zona de concesión de distribución más desarrollada, dado que fue otorgada a CVC energía en el año 1995. En ese entonces, tan sólo existían 500 hectáreas cultivadas. Ahora, existen más de 40,000 hectáreas cultivadas que generan más de 160,000 puestos de trabajo, gracias al soporte energético que promovió CVC energía"
                    date="1995"
                    title="Otorgamiento Villacurí"
                />
                <StoryCardRight
                    text="El 5 de agosto de 1995, se realizó la puesta en servicio de la primera subestación: Coelvisac 1"
                    date="1995"
                    title="SE Coelvisac 1"
                />
                <StoryCardLeft
                    text="Fue otorgada en el 2001, atiende suministros residenciales y operaciones productivas de agricultura"
                    date="2001"
                    title="Otorgamiento Andahuasi"
                />
                <StoryCardRight
                    text="Pusimos en servicio la línea de transmisión Independencia Coelvisac 1 de 60 kV entre la Subestación Independencia y la subestación Coelvisac 1, en eldepartamento de Ica"
                    date="2010"
                    title="LT Independencia - Coelvisac 1"
                />
                <StoryCardLeft
                    text="Fue puesta en operación comercial en septiembre del 2013 con una capacidad instalada de 1.6 MW en el Distrito de Huaura, provincia de Sayan, departamentode Lima"
                    date="2013"
                    title="Central Hidroeléctrica Coelvihidro 1 - Quipico"
                />
                <StoryCardRight
                    text="Fue otorgada en el año 2014, el crecimiento dinámico de su demanda de potencia fue más rápida gracias a los proyectos del gobierno que incentivaron las inversiones por más de $ 1,000 millones para el proyecto de irrigación de Olmos, que se encuentra en parte de la zona de concesión de distribución"
                    date="2014"
                    title="Otorgamiento Lambayeque"
                />
                <StoryCardLeft
                    text="El 30 de octubre del 2014, se realizó la puesta en servicio de las SE TierrasNuevas y SE Félam"
                    date="2014"
                    title="SE Tierras Nuevas y SE Félam"
                />
                <StoryCardRight
                    text="Pusimos en servicio la línea de transmisión Felam Tierras Nuevas de 220 kV entre la Subestación Felam y la SubestaciónTierras Nuevas, en el departamento de Lambayeque"
                    date="2015"
                    title="LT Felam - Tierras Nuevas"
                />
                <StoryCardLeft
                    text="Contrato por alquiler, operación y mantenimiento desde enero 2010 a julio 2017 en distrito de El Alto, provincia de Talara, departamento de Piura"
                    date="2017"
                    title="Central Termoeléctrica El Alto"
                />
                <StoryCardRight
                    text="Fue puesta en operación comercial en mayo del 2019, termoeléctrica de ciclo simple a gas natural con una capacidad instalada: 9.99 MW en el distrito de Salas, provincia de Ica, departamento de Ica"
                    date="2019"
                    title="Central Termoeléctrica Villacurí"
                />
                <StoryCardLeft
                    text="Pusimos en servicio la línea de transmisión de 60 kV entre la Subestación Tierras Nuevas y la Subestación Pampa Pañala, en el departamento de Lambayeque"
                    date="2020"
                    title="LT Tierras Nuevas - Pampa Pañala"
                />
                <StoryCardRight
                    text="Fue otorgada en el 2021, cuenta con 74,000 hectáreas y una inversión en activos de más de 12 millones. Tenemos el objetivo de suministrar energía eléctrica para impulsar proyectos de agroexportación que generen un mayor desarrollo en las comunidades y comercios"
                    date="2021"
                    title="Otorgamiento Tacna"
                />
                <StoryCardLeft
                    text="En junio del 2022, tras más de 20 años de operaciones, decidimos evolucionar y cambiar nuestro nombre comercial a CVC energía. Junto con ello, iniciamos la construcción de una imagen más moderna e innovadora, manteniendo nuestra esencia y el compromiso de potenciar el desarrollo de nuestro país"
                    date="2022"
                    title="Renovamos nuestra imagen"
                />
                <StoryCardRight
                    text="Fue puesta en operación comercial en febrero del 2023, termoeléctrica de ciclo simple a gas natural con una capacidad Instalada: 9.95 MW en el distrito de Salas, provincia de Ica, departamento de Ica"
                    date="2023"
                    title="Central Termoélectrica Salas"
                />
                <StoryCardLeft
                    last={true}
                    text="En el 2023 nos otorgaron ambas concesiones. Piura con 78,000 hectáreas y con una inversión aproximada de 13 millones de dólares. Mientras que Moquegua, con 215,000 hectáreas y una inversión aproximada de 9 millones. De esta manera podremos abastecer miles de hectáreas rurales que aún no tienen acceso a electricidad"
                    date="2023"
                    title="Otorgamiento Piura y Moquegua"
                />
            </section>
        </div>
    );
};

export default page;
