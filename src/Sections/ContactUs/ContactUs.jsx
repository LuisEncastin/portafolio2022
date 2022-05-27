import React, {useRef} from 'react'

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

  return (
    <>
      <section id='contactUs'>
        <div className='contactUsWrapper'>
            <h1>Contáctanos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum non <br /> 
            asperiores ratione cumque iure!</p>
        </div>
        <div className="contactMainContainer">
          <div className='socialMediaContainer'>
            <p>social media container</p>
          </div>
          <div className='formContainer'>

            <form action="/" className='form' ref={form}> 

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
                  <input type="text" name='message' placeholder='Cuéntanos tu mensaje' className='input input-message'/>
              </div>
              <div className='buttonFormContainer'>
                  <button type='submit' onClick={handleSubmit}>Enviar</button> 
              </div>

            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs