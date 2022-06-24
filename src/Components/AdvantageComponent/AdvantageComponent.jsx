import React from 'react'

// estilos
import './AdvantageComponent.css'

const AdvantageComponent = ({ 
  advantageIcon,
  advantageTitle,
  advantageDescription,
  advantageComponentAnimation
}) => {

  return (
    <>
    <div 

    className={` ${advantageComponentAnimation ? 'scale-up-center advantageComponentWrapper' : null}`} 
    >
        <img src={advantageIcon} alt="advantageIcon" />
        <h1>{advantageTitle}</h1>
        <p>{advantageDescription}</p>
    </div>
    </>
  ) 
}

export default AdvantageComponent