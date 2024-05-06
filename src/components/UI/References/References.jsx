import React from 'react';
import './References.css'

export const ReferenciaPersonal = () => {
  // Datos quemados en lugar de useState
  const nombre = 'Juan Perez';
  const cargo = 'Gerente de Ventas';
  const telefono = '123-456-7890';
  const correo = 'juan.perez@example.com';

  return (
    <div className='contenido'>
      <h2>Referencia Personal</h2>
      <div>
        <label>Nombre:</label>
        <span>{nombre}</span>
      </div>
      <div>
        <label>Cargo:</label>
        <span>{cargo}</span>
      </div>
      <div>
        <label>Teléfono:</label>
        <span>{telefono}</span>
      </div>
      <div>
        <label>Correo:</label>
        <span>{correo}</span>
      </div>
    </div>
  );
};
