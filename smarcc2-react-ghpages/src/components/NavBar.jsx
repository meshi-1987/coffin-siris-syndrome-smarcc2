import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/DNA_icon_2.svg" alt="DNA" />
          <span>SMARCC2 • Research & Support</span>
        </div>
        <nav style={{display:'flex', gap: 8}}>
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/donate" className={({isActive}) => isActive ? 'active' : ''}>Donate</NavLink>
          <NavLink to="/articles" className={({isActive}) => isActive ? 'active' : ''}>Articles</NavLink>
          <NavLink to="/experts" className={({isActive}) => isActive ? 'active' : ''}>Experts</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
        <div className="spacer" />
        <a className="btn secondary" href="https://chat.whatsapp.com/Kv01mcZ4" target="_blank" rel="noreferrer">WhatsApp Group</a>
      </div>
    </header>
  )
}
export default NavBar
