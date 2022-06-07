import React, {useState, useEffect, useRef} from 'react'

// custom hooks
import usePrevious from '../../Hooks/usePrevious/usePrevious'

// assets
import logo from '../../assets/images/logos/oie_transparent.png'
import burguerMenuIcon from '../../assets/icons/burguerMenuIcon.png'

// styles
import './NavBar.css'

const NavBar = () => {

    let navigationStyles ={ background : '', color: 'white'};

    // states
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      const onScroll = () => 
      setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);

    const previousOffset = usePrevious(offset);

    if (offset===0) {navigationStyles.background='red'; navigationStyles.borderRadius=0} else { navigationStyles.background = 'var(--mainColor)'; navigationStyles.color= 'white'};
    if (offset===0 && isNavExpanded) {navigationStyles.background =`var(--gradient04)`; navigationStyles.color= 'white'} ;
    if (isNavExpanded && (offset !== previousOffset)) {setIsNavExpanded(!isNavExpanded)};

    const ref = useRef()
    useEffect(() => {
      const checkIfClickedOutside = e => {
        if (isNavExpanded && ref.current && !ref.current.contains(e.target)) {
          setIsNavExpanded(false);
        }
      }
      document.addEventListener("mousedown", checkIfClickedOutside)
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [isNavExpanded])


    return (
      <nav className='navigation' style={{background: navigationStyles.background}} ref={ref}>
        <a href="/" className="brand-name">
          <img src={logo} alt="Logotipo" className='logotipo'/>
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