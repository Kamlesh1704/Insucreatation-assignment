import '../css/Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { MdFeaturedPlayList } from "react-icons/md";
import { MdContactPage } from "react-icons/md";

export default function Header() {
  return (
    <>
      <nav className='navbar-container'>
        <Link id='Link' to="/">
          <p className='nav-links'>Home</p>
        </Link>
        <Link id='Link' to="/about">
          <p className='nav-links'>About us</p>
        </Link>
        <Link id='Link' to="/features">
          <p className='nav-links'>Feature</p>
        </Link>
        <Link id='Link' to="/contact">
          <p className='nav-links'>Contact</p>
        </Link>
      </nav>
      <nav className='navbar-mobile'>
        <Link id='Link' to="/">
          <p className='nav-links'><IoHome /></p>
        </Link>
        <Link id='Link' to="/about">
          <p className='nav-links'><FaCircleInfo /></p>
        </Link>
        <Link id='Link' to="/features">
          <p className='nav-links'><MdFeaturedPlayList /></p>
        </Link>
        <Link id='Link' to="/contact">
          <p className='nav-links'><MdContactPage /></p>
        </Link>
      </nav>
    </>
  )
}
