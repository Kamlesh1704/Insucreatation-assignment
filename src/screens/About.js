import React from 'react'
import Welcome from '../components/Welcome'
import '../css/About.css'
import bank from '../img/bank.png'
import Review from '../components/Review';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className='about-container'>
      <Welcome sectionName="ABOUT US"/>
      <div className='about-1'>
        <div className='about-1-1'>
          <h1>Find Out More About<br/> Our Business Consulting</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean <br/>
          dictum arcu sed erat fringilla placerat. Proin fringilla lacinia<br/>
           risus sed porttitor. Quisque tincidunt lectus vitae massa <br/>
           vulputate pellentesque et vitae ligula. Sed eu leo odio. Aliquam erat <br/>
           volutpat. Praesent cursus quam purus, sed scelerisque orci tincidunt in.<br/>
            Donec a neque facilisis, lobortis tellus vitae, dictum nisl. Morbi sed lacus dui. <br/>
            Sed eu leo imperdiet, pulvinar massa ut, ullamcorper magna.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean <br/>
          dictum arcu sed erat fringilla placerat. Proin fringilla lacinia <br/>
          risus sed porttitor. Quisque tincidunt lectus vitae massa <br/>
          vulputate pellentesque et vitae ligula. Sed eu leo odio. Aliquam erat<br/> 
          volutpat. Praesent cursus quam purus, sed scelerisque orci tincidunt in. <br/>
          Donec a neque facilisis, lobortis tellus vitae, dictum nisl. Morbi sed lacus dui. <br/>
          Sed eu leo imperdiet, pulvinar massa ut, ullamcorper magna.</p>
        </div>
        <img src={bank} alt="" />
      </div>
      <Review /> 
      <Footer /> 
    </div>
  )
}
