import React from 'react'

// styles
import './OurPrices.css'

const OurPrices = () => {
  return (
    <>
        <section id='ourPrices'>
            <div className='ourPricesWrapper'>
                <h1>Nuestro precios</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum non <br /> 
                asperiores ratione cumque iure!</p>
            </div>
            <div className='buttonsContainer'>
                <div className='buttonsContainer-buttons'>
                    <button>Desarrollo web</button>
                    <button>Marketing digital</button>
                </div>
            </div>
            <div className='pricesContainer'>
                <div className='priceCard'>priceCard</div>
            </div>
        </section>
    </>
  )
}

export default OurPrices