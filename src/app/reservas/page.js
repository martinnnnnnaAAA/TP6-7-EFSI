// Reservas.js

"use client";

import Formulario from "@/components/Formulario";
import React, { useState, useEffect } from "react";
import Listado from "@/components/Listado";
import styles from "./reservas.module.css"; 
import Titulo from "@/components/Titulo";
import Subtitulo from "@/components/Subtitulo";

export default function Reservas() {
  const [citas, setCitas] = useState([]);


  useEffect(() => {
    const citasGuardadas = localStorage.getItem("citas");
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);


  useEffect(() => {
    if (citas.length > 0) {
      localStorage.setItem("citas", JSON.stringify(citas));
    }
  }, [citas]);

  return (
    <>
      <Titulo className={styles.Titulo} text="RESERVAS" />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles['one-half']} column`}>
            <Subtitulo text="Crear mi cita" />
            <Formulario
              citas={citas}
              setCitas={setCitas}
              tipoFormulario="citas"
            />
          </div>
          <div className={`${styles['one-half']} column`}>
            <Subtitulo text="Administra tus citas" />
            <Listado citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}
