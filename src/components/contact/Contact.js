import React from 'react'
import ContactForm from './ContactForm'
import Footer from '../footer/Footer'
import ConnectImage from '/Personal portfolio/portflio/src/components/images/connect.jpeg'

export function Contact() {
  return (
    <div>
      <div className='contactComponent'>
    <ContactForm />
      <div className='contactimage'>
    <img src={ConnectImage} alt='connect-image' />
      </div>
    </div>
    <Footer />
    </div>
  )
}


