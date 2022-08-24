import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <h1>Hi, I'm Jason!</h1>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Projects'>Projects</NavLink>
        <NavLink to='Contact'>Contact Me</NavLink>
      </div>
    </nav>
  )
}

export default NavBar