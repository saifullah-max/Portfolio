import React from 'react'
import { NavLink  } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {

    const navBarStyles = ({ isActive }) => {
        return {
            fontWeight: isActive? 'bold' : '',
            textDecoration: isActive? 'underline' : 'none',
            textDecorationColor: isActive? '#C8A2C8' : 'none',
            textDecorationThickness: isActive? '3px' : '',
        }
    }
  return (
    <nav className='primary-nav'>
      <div className='navbar'>
        <h3>Saifullah Ahmed</h3>
      </div>

    <div>     
    <NavLink to='/' style={navBarStyles}>
        Home
    </NavLink>
    <NavLink to='about' style={navBarStyles}>
        About
    </NavLink>
    <NavLink to='project' style={navBarStyles}>
      Projects
    </NavLink>
    <NavLink to='contact' style={navBarStyles}>
        Contact Me
    </NavLink>
    </div>
    </nav>
  )
}