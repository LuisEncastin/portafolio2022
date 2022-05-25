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
            <div className='ourServicesWrapper'>
                <h1>Servicios</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa perferendis optio reiciendis <br/>
                 saepe repudiandae repellendus natus recusandae illo ducimus.</p> 
            </div>
            <div className='servicesGrid'>
                <div class="service1 service"> service1 </div>
                <div class="service2 service"> service2 </div>
                <div class="service3 service"> service3 </div>
                <div class="service4 service"> service4 </div>
                <div class="service5 service"> service5 </div>
                <div class="service6 service"> service6 </div>
            </div>
        </section>
    </>
  )
}

export default OurServices