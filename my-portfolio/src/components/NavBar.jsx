import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <div className='navbar'>
        <NavLink to='/' className='nav-link'>Welcome</NavLink>
        <NavLink to='/Home' className='nav-link'>Home</NavLink>
        <NavLink to='/Projects' className='nav-link'>Projects</NavLink>
        <NavLink to='/Contact' className='nav-link'>Contact Me</NavLink>
      </div>
    </nav>
  )
}

export default NavBar