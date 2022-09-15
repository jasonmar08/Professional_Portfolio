import React, { useRef } from 'react';
import { useState } from 'react'
import emailjs from 'emailjs-com'
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

const ContactForm = () => {
  const [sentMessageAlert, setSentMessageAlert] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, `${PUBLIC_KEY}`)

    e.target.reset()
    setSentMessageAlert(true)

    setTimeout(() => {
      setSentMessageAlert(false)
    }, 5000)
  }

  // const sentConfirmation = () => {
  //   return (
  //     <div className='msg-sent-conf'>
  //       <h5>Message Sent!</h5>
  //     </div>
  //   )
  // }

  if (sentMessageAlert === false) {
    return (
      <div className="contact-container">
        {/* <h2>Contact Me</h2> */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type='text' name='name' placeholder='Your Full Name' required className="input-fields"></input>
          <input type='email' name='email' placeholder="Your Email" required className="input-fields"></input>
          <input type='tel' name='phone' placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="input-fields"></input>
          <input type='text' name='subject' placeholder="Subject" required className="input-fields"></input>
          <textarea type='text' name='message' placeholder="Your Message" required className="textarea"></textarea>
          <button type='submit' className="contact-btn">Send Message</button>
        </form>
        <div className='msg-sent-conf-hidden'>
          <h3>Message Sent!</h3>
        </div>
      </div>
    )
  } else if (sentMessageAlert === true) {
    return (
      <div className="contact-container">
        {/* <h2>Contact Me</h2> */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type='text' name='name' placeholder='Your Full Name' required className="input-fields"></input>
          <input type='email' name='email' placeholder="Your Email" required className="input-fields"></input>
          <input type='tel' name='phone' placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="input-fields"></input>
          <input type='text' name='subject' placeholder="Subject" required className="input-fields"></input>
          <textarea type='text' name='message' placeholder="Your Message" required className="textarea"></textarea>
          <button type='submit' className="contact-btn">Send Message</button>
        </form>
        <div className='msg-sent-conf-visible'>
          <h3>Message Sent!</h3>
        </div>
      </div>
    )
  }
}

export default ContactForm