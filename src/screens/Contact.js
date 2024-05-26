import React from 'react'
import '../css/Contact.css'
import Welcome from '../components/Welcome'
import Review from '../components/Review';
import Footer from '../components/Footer';
import location from '../img/location.png'
import map from '../img/map.png'

export default function Contact() {
  return (
    <div>
      <Welcome sectionName="FEATURE"/>
      <div className='contact-div'>
        <div className='feaute'>
            <p >Features</p>
        </div>
        <p className='head f'>CONTACT US</p>
        <div className='contact-card'>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' className='contact-input' />
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id='phone' className='contact-input' />
                <label htmlFor="email">Email</label>
                <input type="text" id='email' className='contact-input' />
                <label htmlFor="msg">Your Message</label>
                <input type="text" id='msg' className='contact-inputt' />
                <button className='read-more-button send'>Send</button>
            </form>
            <div className='line-verticall'></div>
            <div className='info-div'>
                <div className='visit-div'>
                    <img src={location} alt="sd" />
                    <div>
                        <h4  style={{margin:"0"}}> Visit us :</h4>
                        <p  style={{margin:"8px"}}>27 Division St, New York, NY 10002, USA</p>
                    </div>
                </div>
                <div className='visit-div'>
                <img src={location} alt="sd" />
                    <div>
                        <h4  style={{margin:"0"}}>Phone Number :</h4>
                        <p  style={{margin:"8px"}}>+1 (800) 123 456 789</p>
                    </div>
                </div>
                <div className='visit-div'>
                <img src={location} alt="sd"/>
                    <div>
                        <h4 style={{margin:"0"}}>Phone Number :</h4>
                        <p style={{margin:"8px"}}>admin@admin.com</p>
                    </div>
                </div>
            <img className='map' src={map} alt="a" />
            </div>
        </div>
      </div>
      <Review />
      <Footer />
    </div>
  )
}
