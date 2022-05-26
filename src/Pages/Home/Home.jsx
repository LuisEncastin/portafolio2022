import React from 'react'
import AboutUs from '../../Sections/AboutUs/AboutUs'

// Componentes
import Intro from '../../Sections/Intro/Intro'
import OurPrices from '../../Sections/OurPrices/OurPrices'
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
      <AboutUs/>
      <OurPrices/>
    </section>
    </>
  )
}

export default Home