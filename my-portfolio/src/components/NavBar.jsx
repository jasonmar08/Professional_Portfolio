import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
  const location = useLocation()

  // Change NavBar color when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return location.pathname === '/' ? null : (
    <nav>
      <div className={color ? 'navbar-colored' : 'navbar'}>
        <NavLink to='/AboutMe' className='logo'><img src='assets/my_logo.png' alt='logo' /></NavLink>
        <div className='navbar-links'>
          <NavLink to='/' className='nav-link'>Welcome</NavLink>
          <NavLink to='/AboutMe' className='nav-link'>About Me</NavLink>
          <NavLink to='/Projects' className='nav-link'>Projects</NavLink>
          <NavLink to='/Contact' className='nav-link'>Contact Me</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar