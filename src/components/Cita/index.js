
"use client"


import React from 'react';
import styles from './Cita.module.css'; 
import Button from '../Button'; 

const Cita = ({ mascota = "default", duenio = "default", fecha = "default", hora = "default", sintomas = "default", citas = [], setCitas }) => {
    const citaActual = {
        mascota: mascota,
        duenio: duenio,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas
    };

    const EliminarCita = () => {
        if (window.confirm("¿Seguro deseas eliminar esta cita?")) {
            const nuevasCitas = citas.filter(cita => {
                return !(cita.NombreMascota === citaActual.mascota &&
                    cita.NombreDueño === citaActual.duenio &&
                    cita.Fecha === citaActual.fecha &&
                    cita.Hora === citaActual.hora &&
                    cita.Sintomas === citaActual.sintomas);
            });

            setCitas(nuevasCitas);
        }
    }

    return (
        <div className={styles.cita}>
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{duenio}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Síntomas: <span>{sintomas}</span></p>
            <Button type="button" text="Eliminar ×" className="Eliminar" EliminarCita={EliminarCita} />
        </div>
    );
}

export default Cita;
