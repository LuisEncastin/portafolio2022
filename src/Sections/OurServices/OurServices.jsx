import React from 'react'

// components
import AdvantageComponent from '../../Components/AdvantageComponent/AdvantageComponent'
import ServiceComponent from '../../Components/ServiceComponent/ServiceComponent'

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
            <div className='ourServicesWrapper'>
                <h1>Servicios</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa perferendis optio reiciendis <br/>
                 saepe repudiandae repellendus natus recusandae illo ducimus.</p> 
            </div>
            <div className='servicesGrid'>
                <ServiceComponent class="service1 service"/>
                <ServiceComponent class="service2 service"/>
                <ServiceComponent class="service3 service"/>
                <ServiceComponent class="service4 service"/>
                <ServiceComponent class="service5 service"/>
                <ServiceComponent class="service6 service"/>
            </div>
        </section>
    </>
  )
}

export default OurServices