import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-info">
        <h1>Jason Martinez</h1>
        <h2>Full-Stack Software Engineer</h2>
      </div>
      <div className="welcome-btn">
        <NavLink to="/AboutMe" className="btn-txt">
          Explore My Work
        </NavLink>
      </div>
      {/* <div className="comp-logo">
        <img src="assets/comp.png" alt="computer" />
      </div> */}
    </div>
  )
}

export default Welcome
