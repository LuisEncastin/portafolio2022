import React from 'react'

// Componentes
import Intro from '../../Sections/Intro/Intro'
import OurServices from '../../Sections/OurServices/OurServices'

// styles
import './Home.css'

const Home = () => {
  return (
    <>
    <section id='Home'>
      <Intro/>
      <OurServices/>

    </section>
    </>
  )
}

export default Home