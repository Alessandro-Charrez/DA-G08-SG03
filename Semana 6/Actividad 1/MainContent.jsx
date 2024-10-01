import React, { useState, useEffect } from 'react';
import './MainContent.css';

const MainContent = () => {
    const [mensaje, setMensaje] = useState('');
    const [textoBoton, setTextoBoton] = useState('Cambiar Texto');

    const personajes = [
        { id: 1, nombre: 'Daniels', rol: 'Jefa de terraformación' },
        { id: 2, nombre: 'Walter', rol: 'Android' },
        { id: 3, nombre: 'Tennessee', rol: 'Piloto de la nave' },
        { id: 4, nombre: 'David', rol: 'Android (anterior)' }
    ];

    useEffect(() => {
        console.log('Componente montado o actualizado');
    }, [mensaje, textoBoton]);

    const mostrarMensaje = () => {
        setMensaje('Has hecho clic en el botón Mostrar Mensaje');
    };

    const cambiarTexto = () => {
        setTextoBoton('Texto Cambiado');
    };

    return (
        <main className="main-content">
            <h2>Personajes de Alien Covenant</h2>
            <ul>
                {personajes.map(personaje => (
                    <li key={personaje.id}>
                        <strong>{personaje.nombre}</strong>: {personaje.rol}
                    </li>
                ))}
            </ul>
            <button onClick={mostrarMensaje}>Mostrar Mensaje</button>
            <p>{mensaje}</p>
            <button onClick={cambiarTexto}>{textoBoton}</button>
        </main>
    );
};

export default MainContent;
