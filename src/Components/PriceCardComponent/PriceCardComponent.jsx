import React from 'react'

// styles
import './PriceCardComponent.css'

const PriceCardComponent = () => {
  return (
    <>
    <section className='priceCard'>
        <div className='priceCardWrapper'>
            <h1>Nombre del plan</h1>
            <h2>Precio: $ 500 MXN</h2>
            <h3>Breve descripción de lo que contiene el servicio.</h3>
            <div className='serviceFeaturesContainer'>
                <div className='serviceFeature'>
                    <i className='featureIcon'>
                        '@'
                    </i>
                    <p>descripcion</p>
                </div>
                <div className='serviceFeature'>
                    <i className='featureIcon'>
                        '@'
                    </i>
                    <p className='featureDescription'>descripcion</p>
                </div>
            </div>
        </div>
        <div className='priceCardWrapperSecondary'>
            <div className='featuresList'>
                <div className='listItem'> <i>'/'</i> <p>Servicio</p> </div>
                <div className='listItem'> <i>'/'</i> <p>Servicio</p> </div>
            </div>
            <div>
                <button>Continuar</button>
            </div>
        </div>

    </section>
    </>
  )
}

export default PriceCardComponent