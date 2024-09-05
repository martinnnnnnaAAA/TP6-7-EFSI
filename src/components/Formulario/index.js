"use client"
import React, {useState} from 'react';
import Input from '../Input';
import Button from '../Button';


const Formulario = ({ citas = [], setCitas, tipoFormulario }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tipoFormulario === 'citas') {
            handleCitaSubmit(e);
        } else if (tipoFormulario === 'contacto') {
            handleContactoSubmit(e);
        }
    };

    const handleCitaSubmit = (e) => {
        if (e.target.mascota.value.length < 3) {
            alert("El nombre de la mascota debe tener al menos 3 caracteres");
        } else if (e.target.propietario.value.length < 3) {
            alert("El nombre del dueño debe tener al menos 3 caracteres");
        } else if (e.target.fecha.value === "") {
            alert("Debes ingresar una fecha");
        } else if (e.target.hora.value === "") {
            alert("Debes ingresar una hora");
        } else if (e.target.sintomas.value === "") {
            alert("Debes ingresar los sintomas");
        } else if (window.confirm("¿Seguro deseas agregar esta cita?")) {
            setCitas([
                ...citas,
                {
                    NombreMascota: e.target.mascota.value,
                    NombreDueño: e.target.propietario.value,
                    Fecha: e.target.fecha.value,
                    Hora: e.target.hora.value,
                    Sintomas: e.target.sintomas.value
                }
            ]);
        }
    };

    const handleContactoSubmit = (e) => {
        alert(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {tipoFormulario === 'citas' && (
                    <div>
                        <Input label="Nombre Mascota" type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />
                        <Input label="Nombre Dueño" type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" />
                        <Input label="Fecha" type="date" name="fecha" className="u-full-width" placeholder={null} />
                        <Input label="Hora" type="time" name="hora" className="u-full-width" placeholder={null} />
                        <Input label="Síntomas" type="textarea" name="sintomas" className="u-full-width" placeholder={null} />
                        <Button text="Agregar Cita" type="submit" className="button-primary" />
                    </div>
                )}
                {tipoFormulario === 'contacto' && (
                    <div>
                        <Input label="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="u-full-width" placeholder="Tu nombre" />
                        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="u-full-width" placeholder="Tu correo electrónico" />
                        <Input label="Mensaje" type="textarea" value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="u-full-width" placeholder="Tu mensaje" />
                        <Button text="Enviar Contacto" type="submit" className="button-primary" />
                    </div>
                )}
            </form>
        </>
    );
};

export default Formulario;