import React from 'react'
import { Link } from 'react-router-dom';

// assets
// import logo from '../../assets/img/CiplaLogo.jpeg';
 
// styles
import './Footer.css'

const Footer = () => {
  return (
    <>
 <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 py-3">
          {/* <Link to="/" className="navbar-brand"><img src={logo} alt="Logo Cipla Abogados" /></Link> */}
        </div>
        <div className="col-lg-3 py-3">
          <h5>Contacto</h5>
          <p>Dirección</p>
          <p>Av. Paseo Tollocan, #1213, Colonia El Seminario, C.P. 50170, Toluca, Estado de México.</p>
          <p>Email: contacto@ciplabogados.com</p>
          <p>Teléfonos de oficina: <br/>
           +52 722 2 80 97 76 <br/>
           +52 722 5 67 67 32  <br/>
           55 62 22 14 27  <br/>
           </p>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Navegación</h5>
          <ul className="footer-menu">
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link">Sobre nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/servicios" className="nav-link">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link to="/contratos" className="nav-link">Contratos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li> 
          </ul>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Legal</h5>
          <ul className="footer-menu">
            <li className="nav-item">
              <Link to="/terminos-y-condiciones" target="_blank">Términos y condiciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/aviso-de-privacidad" target="_blank">Aviso de privacidad</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr/>

      <div className="endBar">
        <div className="copyright">
          <p><strong>Copyright 2022.</strong><br />
          Website designed by<a href="/" target="_blank"> Luis Encastin</a>
          </p>
        </div>
        <div className="socialMediaButtons">
            <a href="/" className='rsIconC'><div className="rsIcon facebook"></div></a>
            <a href="/" className='rsIconC'><div className="rsIcon twitter"></div></a>
            <a href="/" className='rsIconC'><div className="rsIcon youtube"></div></a>
            <a href="/" className='rsIconC'><div className="rsIcon linkedin"></div></a>
          </div>
        </div>
      </div>
  </footer>
    </>
  )
}

export default Footer;