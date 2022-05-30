import React, {useState} from 'react'

// componentes
import PriceCardComponent from '../../Components/PriceCardComponent/PriceCardComponent'

// styles
import './OurPrices.css'

const OurPrices = () => {

    const [displayPrices, setDisplayPrices] = useState({
        websitePricesDisplay: true,
        webAppPricesDisplay: false,
        landingPricesDisplay: false,
    })

    const websitePrices =[
        {
            nombreDelPlan: 'Plan Emprendedor',
            precio: '$ 1000.00 MXN',
            breveDescripcion: 'Sitio web de 1 página (3 a 5 secciones) - Diseño responsivo (celulares) - Formulario de contacto',
            descripcion1: 'Entrega en 3 días',
            descripcion2: '2 revisiones',
            serviciosArr: ['Sitio web funcional', '1 página', 'Personalización de diseño', 'Diseño adaptable', 'Incluye el código fuente' ],
        },
        {
            nombreDelPlan: 'Plan Negocios',
            precio: '$ 2500.00 MXN',
            breveDescripcion: 'Sitio web de 3 páginas - Diseño responsivo (celulares) - Formulario de contacto',
            descripcion1: 'Entrega en 6 días',
            descripcion2: '4 revisiones',
            serviciosArr: ['Sitio web funcional', '3 páginas', 'Personalización de diseño', 'Carga de contenido', 'Diseño adaptable', 'Incluye el código fuente' ],
        },
        {
            nombreDelPlan: 'Plan Profesional',
            precio: '$ 5000.00 MXN',
            breveDescripcion: 'Sitio web de 7 páginas - Diseño responsivo (celulares) - Formulario de contacto',
            descripcion1: 'Entrega en 8 días',
            descripcion2: '6 revisiones',
            serviciosArr: ['Sitio web funcional', '7 páginas', 'Personalización de diseño', 'Carga de contenido', 'Diseño adaptable', 'Incluye el código fuente' ],
        },
    ];

    const webAppPrices = [
        {
            nombreDelPlan: 'Plan Emprendedor',
            precio: '$ 1500.00 MXN',
            breveDescripcion: 'Aplicación básica Full-Stack, como una aplicación para notas de recordatorio.',
            descripcion1: 'Entrega en 3 días',
            descripcion2: '1 revisión',
            serviciosArr: ['Entrega en 3 días', '1 revisión', '3 páginas', 'Diseño adaptable', 'Incluye el código fuente'],
        },
        {
            nombreDelPlan: 'Plan Negocios',
            precio: '$ 5000.00 MXN',
            breveDescripcion: 'Aplicación de nivel intermedio, incluyendo diseño responsivo y un sistema de autenticación.',
            descripcion1: 'Entrega en 7 días',
            descripcion2: '3 revisiones',
            serviciosArr: ['Entrega en 7 días', '3 revisión', '5 páginas', 'Personalización de diseño', 'Carga de contenido', 'Diseño adaptable', 'Incluye el código fuente'],
        },
        {
            nombreDelPlan: 'Plan Profesional',
            precio: '$ 15,000.00 MXN',
            breveDescripcion: 'Aplicación de nivel avanzado, incluyendo autenticación, pasarela de pagos, correo y muchas funcionalidades adicionales.',
            descripcion1: 'Entrega en 14 días',
            descripcion2: '5 revisiones',
            serviciosArr: ['Entrega en 14 días', '5 revisión', '7 páginas', 'Personalización de diseño', 'Carga de contenido', 'Diseño adaptable', 'Incluye el código fuente'],
        },
    ];

    const landingPrices = [
        {
            nombreDelPlan: 'Plan Emprendedor',
            precio: '$ 500.00 MXN',
            breveDescripcion: 'Desarrollo de landing page básica.',
            descripcion1: 'Entrega en 3 días',
            descripcion2: '1 revisiones',
            serviciosArr: ['Formulario de suscripción', 'Íconos de redes sociales', '5 secciones incluidas', 'Diseño adaptable'],
        },
        {
            nombreDelPlan: 'Plan Negocios',
            precio: '$ 1,000.00 MXN',
            breveDescripcion: 'Desarrollo de landing page con integración de características especiales: servicio de integración de email.',
            descripcion1: 'Entrega en 3 días',
            descripcion2: '3 revisiones',
            serviciosArr: ['Formulario de suscripción', 'Integración de la respuesta automática', 'Íconos de redes sociales', '5 secciones incluidas', 'Diseño adaptable'],
        },
        {
            nombreDelPlan: 'Plan Profesional',
            precio: '$ 2,000.00 MXN',
            breveDescripcion: 'Desarrollo de landing page con integración de características especiales a la medida de los requerimientos del cliente.',
            descripcion1: 'Entrega en 4 días',
            descripcion2: '5 revisiones',
            serviciosArr: ['Formulario de suscripción', 'Integración de la respuesta automática', 'Íconos de redes sociales', '5 secciones incluidas', 'Diseño adaptable'],
        },
    ]

    const handleDisplayWebsitePrices =()=>{
        setDisplayPrices({
            websitePricesDisplay: true,
            webAppPricesDisplay: false,
            landingPricesDisplay: false,
        })
    }

    const handleDisplayWebAppPrices =()=>{
        setDisplayPrices({
            websitePricesDisplay: false,
            webAppPricesDisplay: true,
            landingPricesDisplay: false,
        })
    }

    const handleDisplayLandingPrices =()=>{
        setDisplayPrices({
            websitePricesDisplay: false,
            webAppPricesDisplay: false,
            landingPricesDisplay: true,
        })
    }


  return (
    <>
        <section id='ourPrices'>
            <div className='ourPricesWrapper'>
                <h1>Nuestro precios</h1>
                <p>Conoce los diferentes <strong>servicios</strong> que ofrecemos y los diferentes <strong>planes de negocio</strong> <br />
                 que hemos creado según tus necesidades.</p>
            </div>
            <div className='buttonsContainer'>
                <div className='buttonsContainer-buttons'>
                    <button onClick={handleDisplayWebsitePrices} style={ displayPrices.websitePricesDisplay ? { backgroundColor:'#ffc629', color: 'white' } : {backgroundColor: '#f5f8f9'} }  >Sitios web</button>
                    <button onClick={handleDisplayWebAppPrices} style={ displayPrices.webAppPricesDisplay ? { backgroundColor:'#ffc629', color: 'white' } : {backgroundColor: '#f5f8f9'} } >Aplicaciones web</button>
                    <button onClick={handleDisplayLandingPrices} style={ displayPrices.landingPricesDisplay ? { backgroundColor:'#ffc629', color: 'white' } : {backgroundColor: '#f5f8f9'} } >Landing pages</button>
                </div>
            </div>

            { 
                displayPrices.websitePricesDisplay
                ?   <div className='pricesContainer'>
                        <PriceCardComponent
                        nombreDelPlan={websitePrices[0].nombreDelPlan}
                        precio={websitePrices[0].precio}
                        breveDescripcion={websitePrices[0].breveDescripcion}
                        descripcion1={websitePrices[0].descripcion1}
                        descripcion2={websitePrices[0].descripcion2}
                        serviciosArr={websitePrices[0].serviciosArr}
                        />
                        <PriceCardComponent
                        nombreDelPlan={websitePrices[1].nombreDelPlan}
                        precio={websitePrices[1].precio}
                        breveDescripcion={websitePrices[1].breveDescripcion}
                        descripcion1={websitePrices[1].descripcion1}
                        descripcion2={websitePrices[1].descripcion2}
                        serviciosArr={websitePrices[1].serviciosArr}
                        />
                        <PriceCardComponent
                        nombreDelPlan={websitePrices[2].nombreDelPlan}
                        precio={websitePrices[2].precio}
                        breveDescripcion={websitePrices[2].breveDescripcion}
                        descripcion1={websitePrices[2].descripcion1}
                        descripcion2={websitePrices[2].descripcion2}
                        serviciosArr={websitePrices[2].serviciosArr}
                        />
                    </div>
                : null
            }

            { 
                displayPrices.webAppPricesDisplay
                ?   <div className='pricesContainer'>
                        <PriceCardComponent
                        nombreDelPlan={webAppPrices[0].nombreDelPlan}
                        precio={webAppPrices[0].precio}
                        breveDescripcion={webAppPrices[0].breveDescripcion}
                        descripcion1={webAppPrices[0].descripcion1}
                        descripcion2={webAppPrices[0].descripcion2}
                        serviciosArr={webAppPrices[0].serviciosArr}
                        />
                        <PriceCardComponent
                        nombreDelPlan={webAppPrices[1].nombreDelPlan}
                        precio={webAppPrices[1].precio}
                        breveDescripcion={webAppPrices[1].breveDescripcion}
                        descripcion1={webAppPrices[1].descripcion1}
                        descripcion2={webAppPrices[1].descripcion2}
                        serviciosArr={webAppPrices[1].serviciosArr}
                        />
                        <PriceCardComponent
                        nombreDelPlan={webAppPrices[2].nombreDelPlan}
                        precio={webAppPrices[2].precio}
                        breveDescripcion={webAppPrices[2].breveDescripcion}
                        descripcion1={webAppPrices[2].descripcion1}
                        descripcion2={webAppPrices[2].descripcion2}
                        serviciosArr={webAppPrices[2].serviciosArr}
                        />
                    </div>
                : null
            }

            { 
                displayPrices.landingPricesDisplay
                ?   <div className='pricesContainer'>
                        <PriceCardComponent
                        nombreDelPlan={landingPrices[0].nombreDelPlan}
                        precio={landingPrices[0].precio}
                        breveDescripcion={landingPrices[0].breveDescripcion}
                        descripcion1={landingPrices[0].descripcion1}
                        descripcion2={landingPrices[0].descripcion2}
                        serviciosArr={landingPrices[0].serviciosArr}
                        />
                        <PriceCardComponent
                        nombreDelPlan={landingPrices[1].nombreDelPlan}
                        precio={landingPrices[1].precio}
                        breveDescripcion={landingPrices[1].breveDescripcion}
                        descripcion1={landingPrices[1].descripcion1}
                        descripcion2={landingPrices[1].descripcion2}
                        serviciosArr={landingPrices[1].serviciosArr}
                        />
                        <PriceCardComponent
                        nombreDelPlan={landingPrices[2].nombreDelPlan}
                        precio={landingPrices[2].precio}
                        breveDescripcion={landingPrices[2].breveDescripcion}
                        descripcion1={landingPrices[2].descripcion1}
                        descripcion2={landingPrices[2].descripcion2}
                        serviciosArr={landingPrices[2].serviciosArr}
                        />
                    </div>
                : null
            }


        </section> 
    </>
  )
}

export default OurPrices