import React from 'react'

// componentes
import PriceCardComponent from '../../Components/PriceCardComponent/PriceCardComponent'

// styles
import './OurPrices.css'

const OurPrices = () => {
  return (
    <>
        <section id='ourPrices'>
            <div className='ourPricesWrapper'>
                <h1>Nuestro precios</h1>
                <p>Conoce los diferentes <strong>servicios</strong> que ofrecemos y los diferentes <strong>planes de negocio</strong> <br />
                 que hemos creado según tus necesidades.</p>
            </div>
            <div className='buttonsContainer'>
                <div className='buttonsContainer-buttons'>
                    <button>Sitios web</button>
                    <button>Aplicaciones web</button>
                    <button>Landing pages</button>
                </div>
            </div>
            <div className='pricesContainer'>
                <PriceCardComponent
                
                />
                <div className='priceCard'>priceCard</div>
                <div className='priceCard'>priceCard</div>
            </div>
        </section> 
    </>
  )
}

export default OurPrices