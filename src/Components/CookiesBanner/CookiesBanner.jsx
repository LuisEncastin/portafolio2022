import React, {useState, useEffect} from 'react'

// estilos
import './CookiesBanner.css'

const CookiesBanner = () => {

const [showCookies, setShowCookies] = useState(false);

useEffect(()=>{
 setShowCookies(true);
}, [])

const handleClick = () =>{
   setShowCookies(!showCookies);
}

  return (
    <>
    {showCookies 
    ?    
    <div className='cookiesBannerContainer'>
        <p>Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios. <br /> 
        Si acepta o continúa navegando, consideramos que acepta su uso. Puede conocer más consultando nuestro <a href="/">Aviso de privacidad.</a> </p>    
        <div className='cookiesButtonsContainer'>
            <button onClick={handleClick}>Aceptar</button>
        </div> 
    </div> 
    : null}
    </>
  )
}

export default CookiesBanner
