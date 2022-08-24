import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <div>
        <NavLink to='/'>Welcome</NavLink>
        <NavLink to='/Home'>Home</NavLink>
        <NavLink to='/Projects'>Projects</NavLink>
        <NavLink to='/ContactMe'>Contact Me</NavLink>
      </div>
    </nav>
  )
}

export default NavBar