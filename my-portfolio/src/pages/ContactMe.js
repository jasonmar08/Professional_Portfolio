import ContactForm from '../components/ContactForm'
import ContactSocialsCard from '../components/ContactSocialsCard'

const ContactMe = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-me-container">
        <ContactSocialsCard />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe
