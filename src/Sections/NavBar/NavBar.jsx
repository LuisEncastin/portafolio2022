import React, {useState} from 'react'

// assets
import burguerMenuIcon from '../../assets/icons/burguerMenuIcon.png'

// styles
import './NavBar.css'

const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          Luis Encastin
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <img src={burguerMenuIcon} alt="hamburguerIcon" />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
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
      </nav>
    );
  }

export default NavBar