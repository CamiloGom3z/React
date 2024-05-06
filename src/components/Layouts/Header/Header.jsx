
import { Navbar } from '../../UI/Navbar/Navbar';
import './Header.css'
import {SocialMedia} from '../socialMedia/socialMedia'

export const Header = () => {
  return (
    <header className='header-page'>
      <img src="/imgs/352288521_285315697283977_5581102758671511971_n.jpg" alt="" />
      <Navbar />
      <img src="/imgs/sena.jpeg" alt="" />
      <SocialMedia />
    </header>
    
  )
}
