const ContactSocialsCard = () => {


  return (
    <div className="contact-me-socials-grid">
      <div className="contact-me-socials">
        <a href="mailto:martinez.jasonc@gmail.com" target="_blank" rel="noreferrer" className="contact-me-email">
          <img src="../../assets/email_flat_icon.png" alt="Email" id="ct-me-email-icon"/>
          <div className="contact-me-email-text">
            <h3>Get in touch via email!</h3>
            {/* <h4>Send Email</h4> */}
          </div>
        </a>
        <a href="https://linkedin.com/in/martinez-jason" target="_blank" rel="noreferrer" className="contact-me-linkedin">
          <img src="../../assets/linkedin_flat_icon.png" alt="LinkedIn" id="ct-me-linkedin-icon"/>
          <div className="contact-me-linkedin-text">
            <h3>Let's Connect on LinkedIn!</h3>
            {/* <h4>Connect</h4> */}
          </div>
        </a>
        <a href="https://github.com/jasonmar08" target="_blank" rel="noreferrer" className="contact-me-github">
          <img src="../../assets/github_flat_icon.png" alt="GitHub" id="ct-me-github-icon"/>
          <div className="contact-me-github-text">
            <h3>Check out my codes!</h3>
            {/* <h4>Repos</h4> */}
          </div>
        </a>
      </div>
    </div>
  )
}

export default ContactSocialsCard