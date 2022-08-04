import React, { useState } from 'react'
import './Navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links__logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3__navabr-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatgpt3'>What GPT3?</a></p>
          <p><a href='#openai'>Open Ai</a></p>
          <p><a href='#casestudies'>Case Studies</a></p>
          <p><a href='#libary'>Libary</a></p>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign In</p>
          <button type='button' >Sign Up</button>
          <div className='gpt3__navbar-menu'>
            {toggleMenu 
            ? <RiCloseLine  color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line  color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#whatgpt3'>What GPT3?</a></p>
              <p><a href='#openai'>Open Ai</a></p>
              <p><a href='#casestudies'>Case Studies</a></p>
              <p><a href='#libary'>Libary</a></p>
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign In</p>
              <button type='button'>Sign Up</button>
            </div>
          </div>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar