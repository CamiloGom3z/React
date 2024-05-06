import React from 'react'
import './Section.css'
import { Containers } from '../../UI/Containers/Containers';
import {Tittles} from '../../UI/Tittles/Tittles';
export const Section = () => {
  return (
    <section className='section'>
      <Tittles>
        <img src="public\imgs\352288521_285315697283977_5581102758671511971_n.jpg" alt="" />
        <h2>PERFIL</h2>
      </Tittles>
      <Containers>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident numquam blanditiis animi reprehenderit quam sint, enim est iusto distinctio omnis dolor, quisquam itaque! Ipsa, necessitatibus reiciendis sit rem perspiciatis quas.</p>
      </Containers>
      
    </section>
  )
}
