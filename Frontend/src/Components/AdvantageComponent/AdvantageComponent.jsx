import React from 'react'

// estilos
import './AdvantageComponent.css'

const AdvantageComponent = ({
  ourServicesRef,
  ourServiceSectionVisibility,
  advantageIcon,
  advantageTitle,
  advantageDescription,
}) => {
  return (
    <>
    <div className={`advantageComponentWrapper ${ourServiceSectionVisibility ? 'advantageComponentAnimation' : null}  `} ref={ourServicesRef}>
        <img src={advantageIcon} alt="advantageIcon" />
        <h1>{advantageTitle}</h1>
        <p>{advantageDescription}</p>
    </div>
    </>
  ) 
}

export default AdvantageComponent