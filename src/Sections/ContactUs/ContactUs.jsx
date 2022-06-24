import React, {useRef, useState, useEffect} from 'react'

// assets
import location from '../../assets/icons/location.png';
import email from '../../assets/icons/email.png';
import phone from '../../assets/icons/phone.png';

// context
import { ObserverContext } from '../../context/observerContext';

// styles
import './ContactUs.css'

const ContactUs = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current)
    const data = {
      username: formData.get('username')
    }
    console.log(data)
  }

  const form = useRef(null);

  const [contactUsSectionAnimation, setContactUsSectionAnimation] = useState(false)

  const {
    generalYOffset,
  } = React.useContext(ObserverContext);

  const contactUsSectionRef= useRef();

  useEffect(() => {
      const contactUsSectionLimiteOffsetUp = (contactUsSectionRef.current.offsetTop)-600;
      const contactUsSectionLimiteOffsetDown = (contactUsSectionRef.current.offsetTop)+(contactUsSectionRef.current.offsetHeight)+100;
      
      if (
        generalYOffset > contactUsSectionLimiteOffsetUp && generalYOffset  < contactUsSectionLimiteOffsetDown 
        ) {
        setContactUsSectionAnimation(true);
      } else {
        setContactUsSectionAnimation(false)
      }
  
    }, [generalYOffset])


  return (
    <>
      <section 
      id='contactUs'
      ref={contactUsSectionRef}
      className={`${contactUsSectionAnimation ? 'slide-in-right' : null} `} 
      >
        <div className='contactUsWrapper'>
            <h1>Contáctame</h1>
            <p>Si tienes alguna pregunta acerca de mis servicios, puedes contactarme.</p>
        </div>
        <div className="contactMainContainer">
          <div className='contactLeftContainer'>
            <div className='contactLeftBox contactAddress'>
              <img src={location} alt="direccion" />
              <div>
                <h1>Dirección</h1>
                <p>Toluca, Estado de México</p>
              </div>
            </div>
            <div className='contactLeftBox contactEmail'>
              <img src={email} alt="correo" />
              <div>
                <h1>Correo</h1>
                <p>contacto@luisencastin.com</p>
              </div>
            </div>
            <div className='contactLeftBox contactPhone'>
              <img src={phone} alt="telefono" />
              <div>
                <h1>Teléfono</h1>
                <p>722 5 63 48 12</p>
              </div>
            </div>

          </div>


          <div className='formContainer'>

            <form method='post' action="/" className='form' ref={form}> 

              <div className='formInputsContainer'>
                <div className='contactFormInput'>
                  <label htmlFor="username"></label>
                  <input type="text" name='username' placeholder='Nombre' className='input input-name'/>
                </div>
                <div className='contactFormInput'>
                  <label htmlFor="email"></label>
                  <input type="text" name='email' placeholder='Correo electrónico' className='input  input-email'/>
                </div>
              </div>

              <div className='formInputsContainer'>
                <div className='contactFormInput'>
                  <label htmlFor="phone"></label>
                  <input type="number" name='phone' placeholder='Teléfono' className='input  input-phone'/>
                </div>
                <div className='contactFormInput'>
                  <label htmlFor="subject"></label>
                  <input type="text" name='subject' placeholder='Asunto' className='input input-subject'/>
                </div>
              </div>
              <div className='contactFormInput'>
                  <label htmlFor="message"></label>
                  <input type="text" name='message' placeholder='Cuéntame tu mensaje' className='input input-message'/>
              </div>
              <div className='buttonFormContainer'>
                  <button type='submit' onClick={handleSubmit}>Enviar</button> 
              </div>

            </form>

          </div>
        </div>
        {/* <GoogleMaps
        apiKey={'AIzaSyB7VwDTTcL14mXE5Zy-xl0-bcIEBYf6CfA'}
        style={{height:'500px', width: '100%'}}
        zoom={13}
        center={{
          lat: 19.262211536259024, 
          lng: -99.67696844508455,
        }}
        markers={{
          lat: 19.262211536259024, 
          lng: -99.67696844508455,
        }}
        />  */}
      </section>
    </>
  )
}

export default ContactUs