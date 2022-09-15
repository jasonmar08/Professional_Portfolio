import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Howdy, I'm Jason!</h1>
      <h2>I'm a Full-Stack Software Engineer based in Florida</h2>
      <div className="welcome-link">
        <NavLink to="/Home" className="welcome-nav">
          Enter My World!
        </NavLink>
      </div>
    </div>
  )
}

export default Welcome
