import React from 'react'
import style from '../styles/Navbar.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <main className={style["navbar-Wrapper"]}>      
        <NavLink className={style["logo-Wrapper"]} to='/'> <img alt='logo' src={logo} className={style["logo"]}/> </NavLink>
        <NavLink to='/'> About </NavLink>
        <NavLink to='/'> Contact </NavLink>
        <NavLink to='/'> About </NavLink>
      </main>
        <NavLink className={style["feedback"]} to='/'> Feedback </NavLink>
    </div>
  )
}

export default Navbar