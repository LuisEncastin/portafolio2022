import React, {useRef, useEffect, useState} from 'react'

// context
import { ObserverContext } from '../../context/observerContext';

// images
import profilePic from '../../assets/images/profilePic.jpg'

// estilos
import './AboutUs.css'; 

const AboutUs = () => {

  const [animation, setAnimation] = useState(false)

  const {
    generalYOffset,
  } = React.useContext(ObserverContext);
  console.log('general offset',generalYOffset)

  const fotoPerfilRef=useRef()
  
  useEffect(() => {
    const fotoPerfilLimiteOffsetTop = (fotoPerfilRef.current.offsetTop)-100;
    console.log('limte superior', fotoPerfilLimiteOffsetTop);
    const fotoPerfilLimiteOffsetDown = (fotoPerfilRef.current.offsetTop)+(fotoPerfilRef.current.offsetHeight)+100;
    console.log('limite inferior', fotoPerfilLimiteOffsetDown);
    
    if (generalYOffset > fotoPerfilLimiteOffsetTop && generalYOffset  < fotoPerfilLimiteOffsetDown ) {
      setAnimation(true);
    } else {
      setAnimation(false)
    }

  }, [generalYOffset])

  console.log(animation)

  return (
    <>
    <section id='aboutUs'>
        <div className='aboutUsWrapper'>
            <h1>Sobre mí</h1>
            <p>Soy un <strong>desarrollodor web fullstack</strong> con experiencia en el stack <strong>MERN: MongoDB, Express, ReactJS and Node.js </strong> </p>
        </div>
        <div className='aboutUsInfo'>
          <div className='aboutUsDescription'>
              <h2>¿Qué es lo que me define con respecto a otras agencias/desarrolladores?</h2>
              <p>Siempre me ha gustado ser parte del desarrollo de ideas valiosas que impacten en el estilo de vida de los clientes.</p>
              <p>Mi experiencia incluye habilidades en el desarrollo web con librerías Front-end, conexión con bases de datos relacionales y no relacionales, manejo de CMS y gestión de proyectos con metodologías ágiles con herramientas como Asana, Trello y Slack.</p>
              {/* <p>También suelen llamarme diseñador de productos, diseñador de experiencias, interacción, UI, UX o por cualquier otro título que mejor convenga en el mercado. Lo cierto es que soy un creador multidisciplinario con más de 10 años de experiencia en una amplia gama de disciplinas: diseño, ventas, voluntario, emprendedor, desarrollador front-end, entusiasta del arte, viajero y más.</p>
              <p>No me gusta definirme por el trabajo que he hecho, sino por el trabajo que quiero hacer. Siempre he pensado que las habilidades se pueden enseñar, la personalidad y actitud de una persona es lo realmente valioso. Es por eso que prefiero seguir aprendiendo, seguir desafiándome y hacer cosas interesantes que importen.</p> */}
              <p>Puedes conocer más de mí, mi trayectoria laboral y habilidades en mi CV disponible en el siguiente enlace:</p>
              <button> Descargar CV </button>
          </div>
          <div 
            ref={fotoPerfilRef}
            className={`aboutUsImage ${animation ? 'slide-in-left' : null}`} 
            //className='aboutUsImage'
            style={{backgroundImage: `url(${profilePic})`}}>
          </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs