"use client";
import React, { useState } from "react";
import "./App.css";
import Titulo from "@/components/Titulo";
import Subtitulo from "@/components/Subtitulo";

export default function Home(props) {
  const [citas, setCitas] = useState([]);
  return (
    <div className="contenedor" style={{marginTop:'10%'}}>
      <Titulo text="Bienvenido a nuestra pagina de reservas"></Titulo>
      <Subtitulo text="Agenda el turno para tu mascota aquí"></Subtitulo>
      <a href="/reservas" style={{textDecoration:"underline", color:"white", fontWeight:"bold"}}> RESERVAS</a>
    </div>
  );
}
