import './Features.css'
import Welcome from './Welcome'
import React from 'react'
import Review from './Review';
import Footer from './Footer';
import copy from '../img/copy.png'

export default function Features() {
  return (
    <div >
      <Welcome sectionName="FEATURE"/>
      <div className='feature-container'>
        <div className='feaute'>
            <p >Features</p>
        </div>
            <p className='head'>THE FEATURES TO CREATE YOUR</p>
            <ul className='ul'>
                <li className='feature-card'>
                    <div className='ellipse'>
                        <div className='circle'>
                            <img className='copyy' src={copy} alt="tr" />
                        </div>
                    </div>
                    <p>Easy Copy And Paste </p>
                    <div className='lineee'></div>
                    <p className='pp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>
                <li className='feature-card'>
                    <div className='ellipse'>
                        <div className='circle'>
                            <img className='copyy' src={copy} alt="tr" />
                        </div>
                    </div>
                    <p>Easy Copy And Paste </p>
                    <div className='lineee'></div>
                    <p className='pp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>                
                <li className='feature-card'>
                    <div className='ellipse'>
                        <div className='circle'>
                            <img className='copyy' src={copy} alt="tr" />
                        </div>
                    </div>
                    <p>Easy Copy And Paste </p>
                    <div className='lineee'></div>
                    <p className='pp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>
                <li className='feature-card'>
                    <div className='ellipse'>
                        <div className='circle'>
                            <img className='copyy' src={copy} alt="tr" />
                        </div>
                    </div>
                    <p>Easy Copy And Paste </p>
                    <div className='lineee'></div>
                    <p className='pp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>
                <li className='feature-card'>
                    <div className='ellipse'>
                        <div className='circle'>
                            <img className='copyy' src={copy} alt="tr" />
                        </div>
                    </div>
                    <p>Easy Copy And Paste </p>
                    <div className='lineee'></div>
                    <p className='pp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>
                <li className='feature-card'>
                    <div className='ellipse'>
                        <div className='circle'>
                            <img className='copyy' src={copy} alt="tr" />
                        </div>
                    </div>
                    <p>Easy Copy And Paste </p>
                    <div className='lineee'></div>
                    <p className='pp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>
            </ul>
      </div>
      <Review />
      <Footer />
    </div>
  )
}
