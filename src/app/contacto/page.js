"use client"
import Titulo from "@/components/Titulo";
import React, { useState } from "react";
import Formulario from "@/components/Formulario";
export default function contacto() {
    const [citas, setCitas] = useState([]);

    return (
        <>
            <Titulo text = "CONTACTO" ></Titulo>
            <Formulario tipoFormulario="contacto" />
        </>
    );
}