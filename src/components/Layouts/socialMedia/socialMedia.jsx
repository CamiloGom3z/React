import React from 'react';
import './socialMedia.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare,FaGithub,FaLinkedin } from "react-icons/fa";




export const SocialMedia = () => {
  return (
    <div class="redes-sociales">
        <IoLogoWhatsapp />
        <FaInstagramSquare />
        <FaGithub />
        <FaLinkedin />
    </div>
  )
}
