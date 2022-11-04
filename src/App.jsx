import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import './components/Header/Header.jsx'
import Header from "./components/Header/Header.jsx";
import Inicio from "./components/Inicio/Inicio";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import Register from "./components/Register/Register";
import Signed from "./components/Signed/Signed";

function App() {
  return (
    
    <div className="App">

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          
          <Route path="/product/:id" element={<Product/>}></Route>

          <Route path="/register" element={<Register/>}></Route>

          <Route path="/login" element={<Login/>}></Route>

          <Route path="/signed" element={<Signed/>}></Route>


        </Routes>
      </BrowserRouter> 
    </div>
  );
}
export default App;
