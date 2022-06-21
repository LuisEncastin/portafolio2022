import React, { useRef, useEffect, useState } from 'react'

// hooks/librerias
// import { useInView } from 'react-intersection-observer';

// Componentes
import Intro from '../../Sections/Intro/Intro'
import AboutUs from '../../Sections/AboutUs/AboutUs'
import TechStack from '../../Sections/TechStack/TechStack'
import OurPrices from '../../Sections/OurPrices/OurPrices'
import OurServices from '../../Sections/OurServices/OurServices'
import ContactUs from '../../Sections/ContactUs/ContactUs'
import Maps from '../../Sections/Maps/Maps'
// import OurWorks from '../../Sections/OurWorks/OurWorks'
import CookiesBanner from '../../Components/CookiesBanner/CookiesBanner'
// import ModalGeneral from '../../Components/Modales/ModalGeneral/ModalGeneral'

// styles
import './Home.css'

const Home = () => {

  // const { ref, inView, entry } = useInView(options);
  const ourServicesRef = useRef(); 
  const [ourServiceSectionVisibility, setOurServiceSectionVisibility] = useState(false);
  console.log('my element is visible', ourServiceSectionVisibility)
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setOurServiceSectionVisibility(entry.isIntersecting)
    });
    observer.observe(ourServicesRef.current)
  }, []);

  return (
    <>
    <section id='Home'>
      <Intro/>
      <OurServices 
      ourServicesRef={ourServicesRef} 
      ourServiceSectionVisibility={ourServiceSectionVisibility}/>
      {/* <OurWorks/> */}
      <AboutUs/>
      <TechStack/>
      <OurPrices/>
      <ContactUs/>
      <CookiesBanner/>
      <Maps/>
      {/* <ModalGeneral/> */}
    </section>
    </> 
  )
}

export default Home