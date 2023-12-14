"use client";
import { useState } from "react";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import Link from "next/link";
import ExtraForm from "@/components/Form/ExtraForm";

const Page = () => {
    const [openMenu, setOpenMenu] = useState({
        quejas: false,
        reclamos: false,
        denuncias: false,
    });

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Personal atendiendo consultas"
                src="/images/guia-de-reclamos/foto-general.jpg"
                title="Guía de reclamos"
            />
            <section className="w-full flex flex-col bg-custom-sky">
                <div
                    onClick={() =>
                        setOpenMenu({
                            quejas: !openMenu.quejas,
                            reclamos: false,
                            denuncias: false,
                        })
                    }
                    className={`cursor-pointer flex justify-between px-24 pt-24 ${
                        openMenu.quejas ? "pb-12" : "pb-24"
                    }`}
                >
                    <h1 className="font-medium text-custom-cream text-5xl">
                        Quejas
                    </h1>
                    <Image
                        alt="Simbolo +"
                        src={`/images/guia-de-reclamos/${
                            openMenu.quejas ? "minus" : "plus"
                        }.png`}
                        height={68}
                        width={68}
                    />
                </div>
                {openMenu.quejas && (
                    <>
                        <div className="px-24 pb-24">
                            <p className="font-light text-custom-cream w-[60%] text-2xl">
                                Manifestación que un usuario realiza ante la
                                distribuidora expresando una disconformidad que
                                no se encuentra relacionada al servicio público
                                de electricidad; o, expresando su malestar o
                                descontento respecto a la atención al público.
                            </p>
                            <h2 className="pt-24 pb-16 font-medium text-3xl text-custom-cream">
                                Formulario
                            </h2>
                            <ExtraForm
                                reclamo={false}
                                denuncia={false}
                                color="sky"
                            />
                        </div>
                        <div className="p-24 flex bg-custom-cream">
                            <div className="w-2/5 flex flex-col gap-24">
                                <h1 className="text-4xl">Formatos</h1>
                                <h1 className="text-4xl">
                                    ¿Tienes alguna duda?
                                </h1>
                            </div>
                            <div className="w-3/5 flex flex-col gap-24">
                                <div>
                                    <Link
                                        href="public/pdf/formato-de-reclamo.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Formato de Quejas
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-2xl font-normal pb-6">
                                        Llámanos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            (01) 640-0770
                                        </li>
                                        <li className="text-xl font-light">
                                            (056) 640-001
                                        </li>
                                        <li className="text-xl font-light">
                                            (074) 640-771
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
            <section className="w-full flex flex-col bg-custom-red ">
                <div
                    onClick={() =>
                        setOpenMenu({
                            quejas: false,
                            reclamos: !openMenu.reclamos,
                            denuncias: false,
                        })
                    }
                    className={`cursor-pointer flex justify-between px-24 pt-24 ${
                        openMenu.reclamos ? "pb-12" : "pb-24"
                    }`}
                >
                    <h1 className="font-medium text-custom-cream text-5xl">
                        Reclamos
                    </h1>
                    <Image
                        alt="Simbolo +"
                        src={`/images/guia-de-reclamos/${
                            openMenu.reclamos ? "minus" : "plus"
                        }.png`}
                        height={68}
                        width={68}
                    />
                </div>
                {openMenu.reclamos && (
                    <>
                        <div className="px-24 pb-24">
                            <p className="font-light text-custom-cream w-[60%] text-2xl">
                                Acción del usuario con la finalidad de obtener
                                un pronunciamiento sobre cualquier conflicto de
                                carácter particular derivado de la prestación
                                del servicio público de electricidad.
                            </p>
                            <h2 className="pt-24 pb-12 font-medium text-3xl text-custom-cream">
                                Formulario
                            </h2>
                            <ExtraForm
                                reclamo={true}
                                denuncia={false}
                                color="red"
                            />
                        </div>
                        <div className="p-24 flex bg-custom-cream">
                            <div className="w-2/5 flex flex-col gap-[214px]">
                                <h1 className="text-4xl">Guía y formatos</h1>
                                <h1 className="text-4xl">Recursos legales</h1>
                                <h1 className="text-4xl">
                                    ¿Tienes alguna duda?
                                </h1>
                            </div>
                            <div className="w-3/5 flex flex-col gap-24">
                                <div className="flex flex-col">
                                    <Link
                                        href="/pdf/guia-de-reclamos.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Guía de Reclamos
                                    </Link>
                                    <Link
                                        href="/pdf/formato-de-reclamo.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Formato de Reclamo
                                    </Link>
                                    <Link
                                        href="/pdf/solicitud-de-medida-cautelar.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Solicitud de Medida Cautelar
                                    </Link>
                                    <Link
                                        href="/pdf/recursos-administrativos.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Formato de Recurso Administrativo
                                    </Link>
                                </div>
                                <div className="flex flex-col">
                                    <Link
                                        href="/pdf/precedente-de-observancia.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Precedente de Observancia
                                    </Link>
                                    <Link
                                        href="/pdf/lineamientos-resolutivos-jaru-001-2011.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Lineamientos Resolutivos - JARU 001-2011
                                    </Link>
                                    <Link
                                        href="/pdf/lineamientos-resolutivos-jaru-001-2009.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Lineamientos Resolutivos - JARU 001-2009
                                    </Link>
                                    <Link
                                        href="/pdf/lineamientos-resolutivos-jaru-001-2006.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Lineamientos Resolutivos - JARU 001-2006
                                    </Link>
                                    <Link
                                        href="/pdf/osinergmin-269-2014-os-cd.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Osinergmin No.269-2014-OS-CD
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-2xl font-normal pb-6">
                                        Llámanos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            (01) 640-0770
                                        </li>
                                        <li className="text-xl font-light">
                                            (056) 640-001
                                        </li>
                                        <li className="text-xl font-light">
                                            (074) 640-771
                                        </li>
                                    </ul>
                                    <p className="text-2xl font-normal pb-6 pt-10">
                                        Escríbenos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            reclamos@cvcenergia.com.pe
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
            <section className="w-full flex flex-col bg-custom-green ">
                <div
                    onClick={() =>
                        setOpenMenu({
                            quejas: false,
                            reclamos: false,
                            denuncias: !openMenu.denuncias,
                        })
                    }
                    className={`cursor-pointer flex justify-between px-24 pt-24 ${
                        openMenu.denuncias ? "pb-12" : "pb-24"
                    }`}
                >
                    <h1 className="font-medium text-custom-cream text-5xl">
                        Denuncias
                    </h1>
                    <Image
                        alt="Simbolo +"
                        src={`/images/guia-de-reclamos/${
                            openMenu.denuncias ? "minus" : "plus"
                        }.png`}
                        height={68}
                        width={68}
                    />
                </div>
                {openMenu.denuncias && (
                    <>
                        <div className="px-24 pb-24">
                            <p className="font-light text-custom-cream w-[60%] text-2xl">
                                Acción del usuario cuyo objetivo es la atención
                                de deficiencias en la prestación del servicio
                                eléctrico, originadas por fallas en el sistema
                                eléctrico o por procesos de facturación
                                irregular bajo responsabilidad de la
                                distribuidora, que afecten intereses colectivos
                                o difusos de los usuarios del servicio público
                                de electricidad.
                            </p>
                            <h2 className="pt-24 pb-12 font-medium text-3xl text-custom-cream">
                                Formulario
                            </h2>
                            <ExtraForm
                                reclamo={false}
                                denuncia={true}
                                color="green"
                            />
                        </div>
                        <div className="p-24 flex bg-custom-cream">
                            <div className="w-2/5 flex flex-col gap-[88px]">
                                <h1 className="text-4xl">Guías</h1>
                                <h1 className="text-4xl">Recursos legales</h1>
                                <h1 className="text-4xl">
                                    ¿Tienes alguna duda?
                                </h1>
                            </div>
                            <div className="w-3/5 flex flex-col gap-24">
                                <div className="flex flex-col">
                                    <Link
                                        href="/pdf/guia-de-denuncias.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Guía de Denuncias
                                    </Link>
                                </div>
                                <div className="flex flex-col">
                                    <Link
                                        href="/pdf/procedimiento-de-denuncias.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Resolución de Procedimientos de
                                        Denuncias
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-2xl font-normal pb-6">
                                        Llámanos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            (01) 640-0770
                                        </li>
                                        <li className="text-xl font-light">
                                            (056) 640-001
                                        </li>
                                        <li className="text-xl font-light">
                                            (074) 640-771
                                        </li>
                                    </ul>
                                    <p className="text-2xl font-normal pb-6 pt-10">
                                        Escríbenos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            atencion_denuncias@cvcenergia.com.pe
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </div>
    );
};

export default Page;
