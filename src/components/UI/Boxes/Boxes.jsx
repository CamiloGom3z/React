import React from 'react';
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import './Boxes.css'; 

export const IconosConBarra = () => {
  return (
    <div className="container">
      <div className="icono-con-barra">
        <FaJava className='icono' />
        <div className="barra">
          <div className="nivel" style={{ width: '70%' }}></div>
          <p>Avanzado</p>
        </div>
      </div>
      <div className="icono-con-barra">
        <FaReact className='icono' />
        <div className="barra">
          <div className="nivel" style={{ width: '80%' }}></div>
          <p>intermedio</p>
        </div>
      </div>
      <div className="icono-con-barra">
        <FaNodeJs className='icono' />
        <div className="barra">
          <div className="nivel" style={{ width: '60%' }}></div>
          <p>Avanzado</p>
        </div>
      </div>
      <div className="icono-con-barra">
        <SiPostgresql className='icono' />
        <div className="barra">
          <div className="nivel" style={{ width: '90%' }}></div>
          <p> avanzado</p>
        </div>
      </div>
    </div>
  );
};
