import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo del sitio" className='logo'/>
      <div className='navbar-links'>
        <Link to="/loginpage" className='nav-link'>
          <button className='btn-nav'>Iniciar sesión</button>
        </Link>
        <div className='div'></div>
        <Link to="/registerpage" className='nav-link'>
          <button className='btn-nav'>Registrarse</button>
        </Link>
      </div>
    </div>
  )
}
