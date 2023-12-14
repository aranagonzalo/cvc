"use client";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import CustomFileInput from "./CustomFileInput";

const ExtraForm = ({ reclamo, denuncia, color }) => {
    const initialFormData = {
        name: "",
        number: "",
        suministro: "",
        email: "",
        file: null,
        message: "",
        ...(reclamo && { reclamo: "" }),
        ...(denuncia && { denuncia: "" }),
    };

    const [formData, setFormData] = useState(initialFormData);

    const [focused, setFocused] = useState({
        name: false,
        number: false,
        email: false,
    });

    const onBlur = ({ target }) => {
        setFocused({ ...focused, [target.name]: false });
    };
    const onFocus = ({ target }) => {
        setFocused({ ...focused, [target.name]: true });
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = new FormData();
        data.set("data", JSON.stringify(formData));
        try {
            await axios.post("/api/contact", data);
            setIsLoading(false);
            toast.success("Mensaje enviado exitosamente");
            setFocused({});
            setFormData(initialFormData);
        } catch (error) {
            setIsLoading(false);
            toast.error("Hubo un error al enviar el mensaje");
            console.error("Error submitting form:", error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex pb-36">
                <div className="flex flex-col w-1/2 gap-12">
                    <Input
                        color="cream"
                        backgroundColor={`${color}`}
                        name="name"
                        required
                        type="text"
                        fieldName="Nombre Completo"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        color="cream"
                        backgroundColor={`${color}`}
                        name="number"
                        required
                        type="number"
                        fieldName="Teléfono"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        color="cream"
                        backgroundColor={`${color}`}
                        name="email"
                        required
                        type="email"
                        fieldName="Correo Electrónico"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        color="cream"
                        backgroundColor={`${color}`}
                        name="suministro"
                        type="number"
                        fieldName="Nro. de suministro"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    {reclamo && (
                        <Select
                            color="cream"
                            backgroundColor={`${color}`}
                            name="reclamo"
                            required
                            fieldName="Tipo de reclamo"
                            handleChange={handleChange}
                            options={[
                                "Negativa a la instalación del suministro",
                                "Excesivo consumo",
                                "Excesiva facturación",
                                "Recupero de energía",
                                "Cobro indebido",
                                "Corte del servicio",
                                "Negativa al incremento de potencia",
                                "Negativa al cambio de opción tarifaria",
                                "Reembolso de aportes o contribuciones",
                                "Reubicación de instalaciones que se encuentren bajo responsabilidad de la concesionaria",
                                "Mala calidad (tensión, interrupciones)",
                                "Deudas de Terceros",
                                "Otras cuestiones vinculadas a la prestación de los servicios públicos de electricidad y gas natural",
                            ]}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            formData={formData}
                            focused={focused}
                        />
                    )}
                    {denuncia && (
                        <Select
                            color="cream"
                            backgroundColor={`${color}`}
                            name="denuncia"
                            required
                            fieldName="Tipo de denuncia"
                            handleChange={handleChange}
                            options={[
                                "Por interrupción del suministro",
                                "Por deterioro de artefactos eléctricos",
                                "Por procesos de facturación irregular",
                                "Por deficiencias típicas del servicio de alumbrado público",
                                "Por riesgo eléctrico en la vía pública",
                            ]}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            formData={formData}
                            focused={focused}
                        />
                    )}
                    <CustomFileInput
                        color="cream"
                        reclamo={reclamo}
                        denuncia={denuncia}
                    />
                </div>
                <div className="flex flex-col w-1/2 gap-4">
                    <textarea
                        required
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        className={`h-full placeholder:text-custom-cream/80 border-[2.5px] w-full border-custom-cream bg-custom-${color} text-custom-cream p-4 text-2xl font-medium focus:outline-none rounded-lg`}
                        placeholder="Escribenos los detalles aquí"
                    ></textarea>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col w-1/2 gap-4 text-custom-cream font-normal text-2xl">
                    <p className="w-3/4">
                        Al apretar el botón, usted está aceptando los{" "}
                        <Link href="/terminos">Términos y Condiciones</Link>
                    </p>
                </div>
                <div className="flex flex-col w-1/2 gap-4">
                    <button
                        disabled={
                            isLoading ||
                            !formData.name ||
                            !formData.email ||
                            !formData.number
                        }
                        type="submit"
                        className={`cursor-pointer flex items-center justify-center text-2xl py-3 px-8 font-normal !text-custom-${color} bg-custom-cream rounded-full max-w-max ${
                            !formData.email &&
                            "bg-custom-grey-100 cursor-not-allowed"
                        } ${
                            !formData.name &&
                            "bg-custom-grey-100 cursor-not-allowed"
                        }`}
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="20"
                                visible={true}
                            />
                        ) : (
                            "Enviar"
                        )}
                        <Toaster richColors />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ExtraForm;
