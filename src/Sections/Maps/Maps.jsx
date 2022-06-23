import React from 'react'

// context
import { ObserverContext } from '../../context/observerContext';

// styles
import './Maps.css'

const Maps = () => {

  const {
    mapsRef,
    mapsObserverState,
    //generalYOffset,
} = React.useContext(ObserverContext);

  return (
    <>
    <div 
    ref={mapsRef}
    className={`maps-container ${mapsObserverState ? 'slide-in-left' : null} `} 
    //className="maps-container"
    >
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15065.874322573898!2d-99.68574463022462!3d19.261978600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd890046b71c7f%3A0xca22d0df2bbe4aca!2sMariano%20Mart%C3%ADnez%20113%2C%20H%C3%A9roes%20del%205%20de%20Mayo%2C%2050170%20Toluca%20de%20Lerdo%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1655780411055!5m2!1ses-419!2smx" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title='mapaLuisEncastinGoogle'
        id='mapaLuisEncastinGoogle'
        >
        </iframe>
    </div>
    </>
  )
}

export default Maps