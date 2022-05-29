import React from 'react'

// assets
import introBgImage from '../../assets/images/pexels-arina-krasnikova-5950165.jpg'

// estilos
import './Intro.css'

const Intro = () => {
  return (
    <>
    <section id='Intro'>
        <div className='introBackground' style={{backgroundImage: `url(${introBgImage})`}} >
            <div className='introWrapper'>
                <h2>¡Hola!</h2>
                <h1>Soy <strong className='strong'>LUIS ENCASTIN</strong>,
                 <br/> desarrollador web Fullstack.
                </h1>
                <p>Disfruto construir diferentes proyectos inspiradores, desde proyectos para negocios locales hasta aplicaciones web a la medida de la mano de equipos globales. <br /> 
                La innovación es mi pasión.</p>
                <button>Conoce más de mi trabajo</button>  
            </div> 
        </div>
    </section>
    </>
  )
}

export default Intro