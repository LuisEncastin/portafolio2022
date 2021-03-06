import React from 'react'


// estilos
import './Intro.css'
// assets
// const introBgImage = lazy(()=> import('../../assets/images/pexels-arina-krasnikova-5950165.jpg'));
import introBgImage from '../../assets/images/pexels-arina-krasnikova-5950165.jpg'

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
                <p>Disfruto construir diferentes proyectos inspiradores, <br />
                 desde proyectos para negocios locales hasta aplicaciones web a la medida de la mano de equipos globales. 
                La innovación es mi pasión.</p>
                <button><a href="#aboutUs">Conoce más de mi trabajo</a></button>  
            </div> 
        </div>
    </section>
    </>
  )
}

export default Intro