
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../functions/auth";
import Header from '../Header/Header';
import './Register.scss';

const Register = ()=>{
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [payment_type, setPayment_type] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");


const navigate = useNavigate();

const handleRegister = async (e) => {
    
  e.preventDefault();

  try {

    await auth.register(name, surname, phone_number, payment_type, address, email, password).then( () => {

        navigate("/signed");
        window.location.reload();
      },
      (error) => {
        console.log(error);
        setMsgError(error.response.data);
      }
    );
  } catch (err) {console.log(err);}
};

  return (
    <div className="register">
      
<>
<div className = "contenedor">
              
        <div className="form">
          <form onSubmit={handleRegister}>
            <input required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input required type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            <input required type="text" placeholder="Phone number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)}/>
            <input required type="text" placeholder="Bizum / Paypal" value={payment_type} onChange={(e) => setPayment_type(e.target.value)}/>
            <input required type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input required type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='submit' type="submit" value="Enviar">Send</button>
          </form>
          <div className="error">{msgError}</div>

        </div>
      </div>
    </>
</div>
  );

};

export default Register;