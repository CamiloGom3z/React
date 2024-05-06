import React, { useState } from 'react';
import './References.css'

export const ReferenciaPersonal = () => {
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCargoChange = (e) => {
    setCargo(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  return (
    <div className='contenido'>
      <h2>Referencia Personal</h2>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
      </div>
      <div>
        <label htmlFor="cargo">Cargo:</label>
        <input type="text" id="cargo" value={cargo} onChange={handleCargoChange} />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" value={telefono} onChange={handleTelefonoChange} />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input type="text" id="correo" value={correo} onChange={handleCorreoChange} />
      </div>
    </div>
  );
};

