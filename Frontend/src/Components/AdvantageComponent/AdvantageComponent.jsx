import React from 'react'

// context
import { ObserverContext } from '../../context/observerContext';

// estilos
import './AdvantageComponent.css'

const AdvantageComponent = ({
  advantageIcon,
  advantageTitle,
  advantageDescription,
}) => {

  const {
    ourServicesRef,
    observerState: ourServiceSectionVisibility,
} = React.useContext(ObserverContext);

  return (
    <>
    <div 
    className={`advantageComponentWrapper ${ourServiceSectionVisibility ? 'advantageComponentAnimation' : null}  `} 
    ref={ourServicesRef}>
        <img src={advantageIcon} alt="advantageIcon" />
        <h1>{advantageTitle}</h1>
        <p>{advantageDescription}</p>
    </div>
    </>
  ) 
}

export default AdvantageComponent