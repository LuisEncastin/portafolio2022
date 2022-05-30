import React from 'react'

// assets

import reloj from '../../assets/icons/reloj.png';
import proceso from '../../assets/icons/proceso.png';
import checkmark from '../../assets/icons/checkmark.png';

// styles
import './PriceCardComponent.css'

const PriceCardComponent = ({
    nombreDelPlan,
    precio,
    breveDescripcion,
    descripcion1,
    descripcion2,
    serviciosArr
}) => {
console.log(serviciosArr)
  return (
    <>
    <section className='priceCard'>
        <div className='priceCardWrapper'>
            <h1>{nombreDelPlan}</h1>
            <h2>Precio: <span style={{color:'var(--mainColor)'}}>{precio}</span></h2> 
            <h3>{breveDescripcion}</h3>
            <div className='serviceFeaturesContainer'>
                <div className='serviceFeature'>
                    <i>
                        <img src={reloj} alt="clock" className='featureIcon' />
                    </i>
                    <p className='featureDescription'>{descripcion1}</p>
                </div>
                <div className='serviceFeature'>
                    <i>
                        <img src={proceso} alt="process" className='featureIcon'/>
                    </i>
                    <p className='featureDescription'>{descripcion2}</p>
                </div>
            </div>
        </div>
        <div className='priceCardWrapperSecondary'>
            <div className='featuresList'>
                {serviciosArr.map(item=><div className='listItem'> <i><img src={checkmark} alt="checkmark" className='checkmark' /></i> <p>{item}</p> </div>)}
            </div>
            <div className='buttonBox'>
                <button>Continuar</button>
            </div>
        </div>

    </section>
    </>
  )
}

export default PriceCardComponent