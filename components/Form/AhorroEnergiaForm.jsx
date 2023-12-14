"use client";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import CustomFileInput from "./CustomFileInput";

const AhorroEnergiaForm = ({ color }) => {
    const initialFormData = {
        name: "",
        number: "",
        empresa: "",
        email: "",
        location: "",
        file: null,
        message: "",
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
            <div className="flex pb-24">
                <div className="flex flex-col gap-12 w-full">
                    <Input
                        color="grey"
                        backgroundColor={`${color}`}
                        name="empresa"
                        type="text"
                        required
                        fieldName="Empresa"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        color="grey"
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
                        color="grey"
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
                        color="grey"
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
                        color="grey"
                        backgroundColor={`${color}`}
                        name="location"
                        required
                        type="text"
                        fieldName="Ubicación del proyecto"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <CustomFileInput color="grey" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-4 pb-6">
                    <button
                        disabled={
                            isLoading ||
                            !formData.name ||
                            !formData.email ||
                            !formData.number
                        }
                        type="submit"
                        className={`flex items-center justify-center text-2xl py-3 px-8 font-normal text-custom-cream bg-custom-grey rounded-full max-w-max ${
                            !formData.email &&
                            "bg-custom-grey-100 cursor-not-allowed text-custom-grey"
                        } ${
                            !formData.name &&
                            "bg-custom-grey-100 cursor-not-allowed text-custom-grey"
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
                <div className="flex flex-col gap-4 text-custom-grey font-normal text-2xl">
                    <p className="w-full">
                        Al apretar el botón, usted está aceptando los{" "}
                        <Link
                            href="/terminos"
                            className="font-semibold underline"
                        >
                            Términos y Condiciones
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default AhorroEnergiaForm;
