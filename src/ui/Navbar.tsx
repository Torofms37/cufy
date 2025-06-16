import '../index.css'

import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo del sitio" className='logo'/>
      <div className='navbar-links'>
        <button>Iniciar sesión</button>
        <div className='div'></div>
        <button>Registrarse</button>
      </div>
    </div>
  )
}
