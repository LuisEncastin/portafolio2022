import React from 'react'

// assets
import introBgImage from '../../assets/images/pexels-arina-krasnikova-5950165.jpg'

// estilos
import './Intro.css'

const Intro = () => {
  return (
    <>
    <section id='Intro'>
        <div className='introLayer'></div>
        <div className='introBackground' style={{backgroundImage: `url(${introBgImage})`}} >
            <div className='introWrapper'>
                <h2>Clean and creative</h2>
                <h1>We are a creative agency</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero numquam cupiditate exercitationem velit repellat.</p>
                <button>Get started</button>  
            </div>   
        </div>
    </section>
    </>
  )
}

export default Intro