import React from 'react'

// estilos
import './OurWorks.css'

const OurWorks = () => {
  return (
    <>
    <section id='ourWorks'>
        <div className='ourWorksWrapper'>
            <h1>Nuestro trabajo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum non <br /> 
            asperiores ratione cumque iure!</p>
        </div>
        <div className='projectsGrid'>
            <div class="project1 project"> project1 </div>
            <div class="project2 project"> project2 </div>
            <div class="project3 project"> project3 </div>
            <div class="project4 project"> project4 </div>
            <div class="project5 project"> project5 </div>
            <div class="project6 project"> project6 </div>
        </div>
    </section>
    </>
  )
}

export default OurWorks