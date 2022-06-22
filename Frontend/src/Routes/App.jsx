// Router
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// context
import { ObserversProvider } from "../context/observerContext";
// styles
import '../styles/bootstrap.css'
import '../styles/index.css';

// Components
import Home from '../Pages/Home/Home';
// import Nosotros from "../pages/Nosotros/Nosotros";
// import Servicios from "../pages/Servicios/Servicios";
// import Contacto from "../pages/Contacto/Contacto";
// import Contratos from "../pages/Contratos/Contratos"
// import Terminos from "../sections/Terminos/Terminos";
// import AvisoPrivacidad from "../sections/AvisoPrivacidad/AvisoPrivacidad";
import NavBar from "../Sections/NavBar/NavBar";
import Footer from '../Sections/Footer/Footer';

function App() {
  return (
    <>
    <ObserversProvider>
      <div className="App">
        <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route exact path="/" element={<Home/>}/> 
            {/* <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/servicios" element={<Servicios/>} />
            <Route path="/contratos" element={<Contratos/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/terminos-y-condiciones" element={<Terminos/>} />
            <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad/>} /> */}
            <Route path="*" element={<Home/>} />
          </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </ObserversProvider>
    </>

  );
}

export default App;
