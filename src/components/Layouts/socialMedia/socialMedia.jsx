import React from 'react';
import './socialMedia.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare,FaGithub,FaLinkedin } from "react-icons/fa";




export const SocialMedia = () => {
  return (
    <div className="redes-sociales">
        <IoLogoWhatsapp className='iconos'/>
        <FaInstagramSquare className='iconos' />
        <FaGithub className='iconos' />
        <FaLinkedin className='iconos' />
    </div>
  )
}
