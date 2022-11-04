import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = (props) => {
  return(
    <header>
      <img className='logo' src="https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-cono-helado-concepto-icono-comida-dulce-aislado-estilo-dibujos-animados-plana_138676-2924.jpg?w=826&t=st=1667561736~exp=1667562336~hmac=708538e54237dd546bf7266d5f858dee6e916584327045eab7b3404fbe59962e"/>
      <NavLink to= "/">
      <span className="inicio">Home</span>
      </NavLink>

      <NavLink to="/register">
      <span className="register">Sing up</span>
      </NavLink>

      <NavLink to="/login">
      <span className="login">Sign in</span>
      </NavLink>


    </header>
  )
}

export default Header;