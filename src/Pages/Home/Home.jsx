import React from 'react'


// Componentes
import Intro from '../../Sections/Intro/Intro'
import AboutUs from '../../Sections/AboutUs/AboutUs'
import TechStack from '../../Sections/TechStack/TechStack'
import OurPrices from '../../Sections/OurPrices/OurPrices'
import OurServices from '../../Sections/OurServices/OurServices'
import ContactUs from '../../Sections/ContactUs/ContactUs'
// import OurWorks from '../../Sections/OurWorks/OurWorks'
import CookiesBanner from '../../Components/CookiesBanner/CookiesBanner'

// styles
import './Home.css'

const Home = () => {
  return (
    <>
    <section id='Home'>
      <Intro/>
      <OurServices/>
      {/* <OurWorks/> */}
      <AboutUs/>
      <TechStack/>
      <OurPrices/>
      <ContactUs/>
      <CookiesBanner/>
    </section>
    </> 
  )
}

export default Home