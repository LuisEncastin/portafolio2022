import React from 'react'
// import { Link } from 'react-router-dom';

// assets
import logo from '../../assets/images/logos/oie_transparent.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import whatsapp from '../../assets/icons/whatsapp.png'
 
// styles
import './Footer.css'

const Footer = () => {
  return (
    <>
 <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className='circle'>
          <div className="logoContainer">
            <a href="/" className="brand-name">
              <img src={logo} alt="Logotipo" className='logotipo'/>
            </a>
          </div>
        </div>

        <div className="col-lg-3 py-3">
          <h5>Contacto</h5>
          <p>Dirección</p>
          <p>Toluca, Estado de México.</p>
          <p>Email: contacto@luisencastin.com <br />
          luisencastin@gmail.com </p>
          <p>Teléfono de contacto: <br/>
           +52 722 5 63 48 12 <br/>
           </p>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Navegación</h5>
          <ul className="footer-menu">
            <li className="nav-item">
              <a href="#OurServices" className="nav-link">Servicios</a>
            </li>
            <li className="nav-item">
              <a href="#aboutUs" className="nav-link">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a href="#ourPrices" className="nav-link">Precios</a>
            </li>
            <li className="nav-item">
              <a href="#contactUs" className="nav-link">Contacto</a>
            </li> 
          </ul>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Legal</h5>
          <ul className="footer-menu">
            <li className="nav-item">
              <a href="/" target="_blank">Términos y condiciones</a>
            </li>
            <li className="nav-item">
              <a href="/" target="_blank">Aviso de privacidad</a>
            </li>
          </ul>
        </div>
      </div>

      <hr/>

      <div className="endBar">
        <div className="copyright">
          <p><strong>Copyright 2022.</strong><br />
          Website designed by<a href="/" target="_blank" className='author'> Luis Encastin</a>
          </p>
        </div>
        <div className="socialMediaButtons">
            <a href="/" className='rsIconC'>
              <img src={linkedin} className="rsIcon linkedin" alt="Linkedin" />
            </a>
            <a href="/" className='rsIconC'>
              <img src={github} className="rsIcon github" alt="github" />
            </a>
            <a href="https://wa.me/+5217225634812" target="_blank" rel="noopener noreferrer" className='rsIconC'>
              <img src={whatsapp} className="rsIcon whatsapp" alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
  </footer>
    </>
  )
}

export default Footer;