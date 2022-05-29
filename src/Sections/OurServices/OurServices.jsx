import React from 'react';

// icons advantages
import features from '../../assets/icons/archery-64.png';
import design from '../../assets/icons/diseño-64.png';
import support from '../../assets/icons/support-64.png';

// icons services
import sitioWeb from '../../assets/icons/navegador-de-internet-64.png';
import landinPage from '../../assets/icons/landing-page-64.png';
import webApp from '../../assets/icons/webApp.png';

// components
import AdvantageComponent from '../../Components/AdvantageComponent/AdvantageComponent';
import ServiceComponent from '../../Components/ServiceComponent/ServiceComponent';


// estilos
import './OurServices.css'

const OurServices = () => {
  return (
    <>
        <section id='OurServices'> 
            <div className='advantages'>
                <AdvantageComponent 
                advantageIcon={features}
                advantageTitle={'Soluciones efectivas'}
                advantageDescription={'Nos centramos en tus requerimientos para diseñar soluciones que ayuden a cumplir tus objetivos de forma efectiva.'}
                />
                <AdvantageComponent 
                advantageIcon={design}
                advantageTitle={'Diseños estéticos'}
                advantageDescription={'Procuramos entender tu negocio para dar una estética y que atrape la atención de tus clientes.'}
                />
                <AdvantageComponent 
                advantageIcon={support}
                advantageTitle={'Soporte confiable'}
                advantageDescription={'Desde un inicio definimos una comunicación transparente, con objetivos y resultados claros que te permitan tener un soporte confiable.'}
                />
            </div>
            <div className='ourServicesWrapper'>
                <h1>Servicios</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa perferendis optio reiciendis <br/>
                 saepe repudiandae repellendus natus recusandae illo ducimus.</p> 
            </div>
            <div className='servicesGrid'>
                {/* <div className='service1 service'></div> */}
                <ServiceComponent 
                estilos={'service1 serviceComponentWrapper'}
                serviceIcon={sitioWeb}
                nombreServicio={'Creación de sitios web.'}
                descripcionServicio={'Crea tu sitio web a la medida, ya sea con React o con con algún CMS como Wordpress o Elementor. '}
                />
                <ServiceComponent 
                estilos={'service2 serviceComponentWrapper'}
                serviceIcon={landinPage}
                nombreServicio={'Desarrollo de aplicaciones web.'}
                descripcionServicio={'¿Tienes una idea que puede ser el próximo airbnb? Crea la aplicación web de tus sueños desde cero.'}
                />
                <ServiceComponent 
                estilos={'service3 serviceComponentWrapper'}
                serviceIcon={webApp}
                nombreServicio={'Creación de Landing pages.'}
                descripcionServicio={'Hazte notar con una página de bien diseñada y receptiva para tu sitio web.'}
                />
                {/* <ServiceComponent estilos={'service4 serviceComponentWrapper'}/>
                <ServiceComponent estilos={'service5 serviceComponentWrapper'}/>
                <ServiceComponent estilos={'service6 serviceComponentWrapper'}/> */}
            </div>
        </section>
    </>
  )
}
 
export default OurServices