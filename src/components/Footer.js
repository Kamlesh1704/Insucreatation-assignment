import '../css/Footer.css'
import green from '../img/green.png'
import yellow from '../img/yellow.png'
import location from '../img/location.png'
import time from '../img/time.png'

import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='container-8'>
        <div className='cont-8-1'>
            <div className='cont-8-1-1'>
                <h1>Subscribe Our Newsletter !</h1>
                <p>Elementum ex similique sollicitudin eveniet sem
                    <br/> eveniet proin, iste euismod! Quia! Fugiat molestie leo placerat, tenetur.</p>
            </div>
            <div className="vertical-line"></div>
            <div className='cont-8-1-2'>
                <div className='cont-88'>

                <input type="text"/>
                <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className='cont-8-2'>
        <p className='mo' style={{paddingTop:"50px", marginRight:"30px"}}>Vero, tempor morbi, adipiscing aliqua <br/>nonummy 
        proident perferendis? Laboris<br/> lacus quidem repellendus quasi.</p>
        <div>
            <p style={{margin:"0"}}>Quick Links</p>
            <img style={{marginBottom:"3px"}} src={yellow} alt="" />
            <div className='links-footer'>
                <img src={green} alt="" />
                <p style={{margin:"3px"}}>Home</p>
            </div>
            <div   className="links-footer">
                <img src={green} alt="" />
                <p style={{margin:"3px"}}>About Us</p>
            </div>
            <div  className='links-footer'>
                <img src={green} alt="" />
                <p style={{margin:"3px"}}>Career</p>
            </div>
            <div  className='links-footer'>
                <img src={green} alt="" />
                <p style={{margin:"3px"}}>News & articles</p>
            </div>
        </div>
        <div>
            <p style={{margin:"0"}}>Useful Links</p>
            <img style={{marginBottom:"3px"}}  src={yellow} alt="" />
            <div  className='links-footer'>
                <img src={green} alt="" />
                <p style={{margin:"3px"}}>Help center</p>
            </div>
            <div  className='links-footer'>
                <img src={green} alt="" />
                <p style={{margin:"3px"}}>Contact us</p>
            </div>
            <div  className='links-footer'>
                <img src={green} alt="" />
                <p style={{margin:"3px"}}>FAQ'S</p>
            </div>
            <div  className='links-footer'>
                <img src={green} alt="" />
                <p style={{margin:"3px"}}>Parent Community</p>
            </div>
            </div>
        <div>
            <p style={{margin:"0"}}>School Hours</p>
            <img style={{marginBottom:"3px"}}  src={yellow} alt="" />
            <div  className='links-footer'>
                <img src={time} alt="" />
                <p style={{margin:"3px"}}>8 AM - 5 PM , Monday - Saturday</p>
            </div>
            <div  className='links-footer'>
                <img src={location} alt="" />
                <p style={{margin:"3px"}}>Aut, quae convallis minim cum ornare! Pede ut rem, totam dictum convallis.</p>
            </div>
            </div>
         </div>
        </div>
         <div className='copyright-div'>
            <p className='co'>Copyright © 2022 Educator. All rights reserved.</p>
            <p className='copy'>PRIVACY POLICY | SUPPORT | TERMS & CONDITION</p>
         </div>
         </>
  )
}
