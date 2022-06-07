import React from 'react'

const ModalGeneral = () => {
  return (
    <>
    <div id='ModalGeneral'>
        <div className='backgroundlayer'></div>
        <div className='modalContainer'>
            <div className='closeButton'>
                <i>X</i>
            </div>
            <div className='modalContent'>
                <i>icon</i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestias magni eveniet nostrum reiciendis? Eligendi.</p>
                <button>Aceptar</button>
            </div>
        </div>
    </div> 
    </>
  )
}

export default ModalGeneral
