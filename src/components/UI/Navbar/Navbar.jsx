import React from 'react'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <ItemNavbar style='nav-home' content='Camilo Gomez' />
        <ItemNavbar content='Perfil' />
        <ItemNavbar content='proyectos' />
        <ItemNavbar content='Referencias' />
        <ItemNavbar content='Experiencias' />
      </ul>
    </nav>
  )
}
