import { NavLink } from 'react-router-dom'

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <NavLink to="/Contact">
        <img
          src="../../assets/email_flat_icon.png"
          alt="Email"
          id="email-icon"
        />
      </NavLink>
      <a
        href="https://linkedin.com/in/martinez-jason"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="../../assets/linkedin_flat_icon.png"
          alt="LinkedIn"
          id="linkedin-icon"
        />
      </a>
      <a href="https://github.com/jasonmar08" target="_blank" rel="noreferrer">
        <img
          src="../../assets/github_flat_icon.png"
          alt="GitHub"
          id="github-icon"
        />
      </a>
      <a
        href="assets/Jason_Martinez_Resume_Portfolio.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="../../assets/resume_flat_icon.png"
          alt="Resume"
          id="resume-icon"
        />
      </a>
    </div>
  )
}

export default FloatingContact
