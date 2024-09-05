"use client"
import React from 'react';
import Cita from '../Cita';

const Listado = ({citas = "", setCitas}) => {

    return citas.map(n => {
   
    return <Cita mascota = {n.NombreMascota} duenio = {n.NombreDueño} fecha = {n.Fecha} hora = {n.Hora} sintomas = {n.Sintomas} citas = {citas} setCitas = {setCitas}/>;
    });
    
    
}

export default Listado;