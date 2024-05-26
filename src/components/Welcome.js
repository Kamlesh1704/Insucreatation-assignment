import React from 'react'
import './Welcome.css'
import aboutman from '../img/aboutman.png'
import faceb from '../img/faceb.svg'
import follow from '../img/follow.svg'
import insta from '../img/insta.svg'
import twi from '../img/twi.svg'
import Vector from '../img/Vector 5.svg';
import Header from './Header.js'

export default function Welcome(props) {
    const {sectionName} = props
  return (
    <div className='welcome-container'>
    <Header />
    <div className='welcome-1'>
    <div className='welcome-1-1'>
        <img className='welcome-img' src={aboutman} alt="" />
    </div>
    <h1 className='sectionname'>{sectionName}</h1>
    <div className='follow-container' >
           <img src={faceb } alt='faceb'/>
           <img src={twi } alt='faceb'/>
           <img src={insta } alt='faceb'/>
           <img src={Vector} alt='faceb' />
           <img src={follow } alt='faceb' />
        </div>
    </div>
    </div>
  )
}
