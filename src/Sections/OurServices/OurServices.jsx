import React from 'react'

// components
import AdvantageComponent from '../../Components/AdvantageComponent/AdvantageComponent'

// estilos
import './OurServices.css'

const OurServices = () => {
  return (
    <>
        <section id='OurServices'>
            <div className='advantages'>
                <AdvantageComponent/>
                <AdvantageComponent/>
                <AdvantageComponent/>
            </div>
            <div className='ourServicesWrapper'>servicios</div>
            <div className='servicesGrid'>servicios grid</div>
        </section>
    </>
  )
}

export default OurServices