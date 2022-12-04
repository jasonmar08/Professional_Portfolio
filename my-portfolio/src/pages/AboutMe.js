import ContactForm from '../components/ContactForm'
import FloatingContact from '../components/FloatingContact'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="about-page">
      <FloatingContact />
      <h2>About Me</h2>
      <div className="profile-container">
        <div className="profile-info">
          <div data-aos="slide-down" className="profile-photo">
            <img src="assets/IMG_4156.jpeg" alt="profile photo" />
          </div>
          <div data-aos="slide-down" className="bio">
            <p>
              I am a Miami based Software Engineer with a background
              collaborating in biological sciences and healthcare. I find
              satisfaction in empathetic work that incorporates evidence-based
              solutions and transparent set goals. I frequently challenge myself
              to update my repertoire of technical practices with the latest
              advancements in science and tech, while applying these skills to a
              personalized proposal that prioritizes the individual needs of
              clients. Being a life-long Miami native has allowed me to
              appreciate diversity and the unique experiences every individual
              brings to the table.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="stack-icons">
          <img src="assets/javascript_icon.png" alt="javascript" />
          <img src="assets/react_icon.png" alt="react" />
          <img src="assets/redux_icon.png" alt="redux" />
          <img src="assets/vue_icon.png" alt="vue" />
          <img src="assets/node_icon.png" alt="node" />
          <img src="assets/postgresql_icon.png" alt="postgresql" />
          <img src="assets/mongodb_icon.png" alt="mongodb" />
          <img src="assets/python_icon.png" alt="python" />
          <img src="assets/django_icon.png" alt="django" />
          <img src="assets/html_icon.png" alt="html" />
          <img src="assets/css_icon.png" alt="css" />
        </div>
        <div className="experience">
          <div data-aos="fade-right" className="skills">
            <h3>Frontend Stack</h3>
            <ul>
              <li>JavaScript (ES6)</li>
              <li>Typescript</li>
              <li>HTML5 / CSS3</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Vue.js</li>
            </ul>
          </div>
          <div data-aos="fade-left" className="skills">
            <h3>Backend Stack</h3>
            <ul>
              <li>Python</li>
              <li>Django</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Sequelize</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
        <div className="education-container">
          <div data-aos="fade-right" className="education-history">
            <h3>Education</h3>
            <div className="ga-eduaction">
              <h4>General Assembly</h4>
              <h4>
                <span>Full-Stack Software Engineering Immersive</span>
              </h4>
              <p>
                Completed 500+ hours of expert-led instruction in JavaScript,
                Node, Express, React, Vue, Python, Django, MongoDB, PostgreSQL,
                and hands-on learning of web and mobile application fundamentals
                using the industry's most in-demand technologies.
              </p>
            </div>
            <div className="fiu-education">
              <h4>Florida International University</h4>
              <h4>
                <span>B.S. in Biological Sciences with Minor in Chemistry</span>
              </h4>
              <p>Second Major in Interdisciplinary Studies</p>
              <p>Emphasis: Pre-Medical Sciences</p>
            </div>
          </div>
          <img
            data-aos="fade-up"
            id="right-arrow"
            src="/assets/right_arrow.png"
            alt="arrow"
          />
          <div data-aos="fade-left" className="resume-grid">
            <a
              href="assets/Jason_Martinez_Resume.pdf"
              target="_blank"
              alt="resume"
            >
              <img
                src="/assets/resume_thumbnail.png"
                id="resume-thumbnail"
                alt="resume"
              />
            </a>
          </div>
        </div>
        {/* <ContactForm /> */}
      </div>
      {/* <img id="about-comp" src="/assets/comp.png" alt="comp" /> */}
    </div>
  )
}

export default AboutMe
