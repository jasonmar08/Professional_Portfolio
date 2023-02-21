import { NavLink } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Welcome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div data-aos="slide-down" className="welcome-container">
      <div className="welcome-info">
        <h1 data-aos="slide-right">Jason Martinez</h1>
        <h2 data-aos="flip-up">Full-Stack Software Engineer</h2>
      </div>
      <div className="welcome-btn">
        <NavLink to="/Projects" className="btn-txt">
          Explore My Work
        </NavLink>
      </div>
      <div className="built-scratch">
        <h4>Built From Scratch with React</h4>
      </div>
      <div className="comp-logo">
        <img data-aos="zoom-in" src="assets/comp.png" alt="computer" />
      </div>
    </div>
  )
}

export default Welcome
