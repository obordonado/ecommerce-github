import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderSigned.scss';
import auth from '../../functions/auth';


const HeaderSigned = (props) => {
  return(
    <header>
      <img className='logo' src="/logo.jpg"/>

      <NavLink to="/me">
      <span className="me">My account</span>
      </NavLink>

      <NavLink to="/orders">
      <span className="me">Previous Purchases</span>
      </NavLink>

      <NavLink to= "/">
      <span className="logout" onClick={auth.logout()}>Logout</span>
      </NavLink>

      <NavLink to="/purchase">
      <img src='/carro.png' className="purchase"></img>
      </NavLink>


    </header>
  )
}

export default HeaderSigned;