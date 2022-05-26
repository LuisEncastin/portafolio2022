import React from 'react'

// Componentes
import Intro from '../../Sections/Intro/Intro'
import OurServices from '../../Sections/OurServices/OurServices'
import OurWorks from '../../Sections/OurWorks/OurWorks'

// styles
import './Home.css'

const Home = () => {
  return (
    <>
    <section id='Home'>
      <Intro/>
      <OurServices/>
      <OurWorks/>

    </section>
    </>
  )
}

export default Home