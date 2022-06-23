import React from 'react'

// assets
import lightbulb from '../../../assets/icons/lightbulb.png'
import close from '../../../assets/icons/close.png'

// styles
import './ModalGeneral.css'

const ModalGeneral = () => {
  return (
    <>
    <div id='ModalGeneral'>
        <div className='modalContainer'>
        <div className='close'>
          <img src={close} alt='close' className='closeIcon' />
        </div>
            <div className='modalContent'>
                <img src={lightbulb} alt="Aviso" />
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestias magni eveniet nostrum reiciendis? Eligendi.</h3>
                <button>Aceptar</button>
            </div>
        </div>
    </div> 
    </>
  )
}

export default ModalGeneral
