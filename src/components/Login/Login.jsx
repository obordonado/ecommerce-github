
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../functions/auth";
import Header from "../Header/Header";
import './login.scss';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");

  const navigate = useNavigate();

  // const signedIn = () => {

  //   return (JSON.parse(localStorage.getItem("user")))};
    
  //   signedIn();  

  const handleLogin = async (e) => {  
    e.preventDefault();

    try {
      await auth.login(email, password).then( () => { 


          setTimeout (function() {
            console.log("inside setTimeout");
            console.log(localStorage.user);

            navigate("/");

           },1500)

          // navigate("/signed");
          // window.location.reload();

        },
        (error) => {
          setMsgError(error.response.data.message);
        }
      );
    } catch (err) {}
  };

  return (
    
    <div>
      <div className="box">
      <div className="form">
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="btn btn-success"> Send </button>
          <div className="error">{msgError}</div>
        </form>
      </div>

      </div>

    </div>
  );
};

export default Login;