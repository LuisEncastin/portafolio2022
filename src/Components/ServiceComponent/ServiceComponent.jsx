import React from 'react'

// styles
import './ServiceComponent.css'

const ServiceComponent = ({
  estilos,
  serviceIcon,
  nombreServicio,
  descripcionServicio,
}) => {
  return (
    <>
    <div className={estilos}>
        <img src={serviceIcon} alt="serviceIcon" />
        <h1>{nombreServicio}</h1>
        <p>{descripcionServicio}</p>
    </div>
    </>
  )
}

export default ServiceComponent