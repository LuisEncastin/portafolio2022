// hooks
import React, {useState} from "react";
import { Link } from 'react-router-dom';

// assets
// import logo from '../../assets/img/CiplaLogo.jpeg';

// style
import './NavBar.css'

function NavBar() {
    
  const [toggle, setToggle] = useState(false);

  const handleToggle= () => {
		setToggle(!toggle);
	}

    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">

            {/* <Link to="/" className="navbar-brand"><img src={logo} alt="Logo Cipla Abogados" /></Link> */}

            <button className="navbar-toggler" onClick={handleToggle}  data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse ${toggle ? 'collapse-open' : 'collapse-closed'}`} id="navbarContent">
              <ul className="navbar-nav ml-auto pt-3 pt-lg-0">
                <li className="nav-item">
                  <Link to="/nosotros" className="nav-link">Nosotros</Link>
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
                {/* <li className="nav-item">
                  <a href="/" className="nav-link">Recursos</a>
                  <ul>
                    <li><a href="/faq.html">Preguntas frecuentes</a></li>
                    <li><a href="/blog.html">Blog</a></li>
                  </ul>  
                </li> */}
              </ul>
            </div>
          </div>
        </nav>          
      </div>
    );
  };

  export default NavBar;