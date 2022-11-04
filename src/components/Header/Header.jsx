import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = (props) => {
  return(
    <header>
      <img className='logo' src="https://i.pinimg.com/originals/52/45/95/5245959f20a2d092cdde319bfe1b2d74.jpg"/>
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