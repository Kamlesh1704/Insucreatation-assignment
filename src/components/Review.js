import React from 'react'
import './Home.css'
import comma from '../img/comma.png'
import girlp from '../img/girlp.png'
import arrow2 from '../img/arrow2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dsd from '../img/dsd-2 1zig.png'

export default function Review() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 1
      };
      var settingss = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1
      };
  return (
    <div className='container-7'>
        <h1 className='review'>Review's From Students</h1>
        <img src={dsd} alt="asli" className='xi'/>
        <div className='slider-container'>
        <Slider {...settings}>
        <div className='slider-card'>
            <p className='paraaa'>Per sed, mattis. Integer viverra euismod maecenas <br/>incidunt, phasellus consequatur aliquam nihil temporibus<br/> in assumenda? 
                Aute praesentium fugiat. Perspiciatis, <br/>
                ultrices deserunt convallis, eius at non.
                </p>
                <img src={arrow2} alt="d" className='arrow2' />
            <div className='comma-div'>
               <img className='comma' src={comma} alt="df" />
               <div>
                <div className='name-div'>
                    <p>Jenny Wilson</p>  
                    <img className='girlp' src={girlp} alt="" />
                </div>
               </div>
            </div>
        </div>
        <div className='slider-card'>
            <p className='paraaa'> Per sed, mattis. Integer viverra euismod maecenas <br/>incidunt, phasellus consequatur aliquam nihil temporibus<br/> in assumenda?
                 Aute praesentium fugiat. Perspiciatis, <br/>
                 ultrices deserunt convallis, eius at non.</p>
                 <img src={arrow2} alt="d" className='arrow2'/>
            <div className='comma-div'>
               <img className='comma'  src={comma} alt="df" />
               <div>
                <div className='name-div'>
                    <p>Jenny Wilson</p>
                    <img  className='girlp' src={girlp} alt="" />
                </div>
               </div>
            </div>
        </div>
        </Slider>
        </div>
        <div className='slider-container-mobile'>
        <Slider {...settingss}>
        <div className='slider-card'>
            <p className='paraaa'>Per sed, mattis. Integer viverra euismod maecenas <br/>incidunt, phasellus consequatur aliquam nihil temporibus<br/> in assumenda? 
                Aute praesentium fugiat. Perspiciatis, <br/>
                ultrices deserunt convallis, eius at non.
                </p>
                <img src={arrow2} alt="d" className='arrow2' />
            <div className='comma-div'>
               <img className='comma' src={comma} alt="df" />
               <div>
                <div className='name-div'>
                    <p>Jenny Wilson</p>  
                    <img className='girlp' src={girlp} alt="" />
                </div>
               </div>
            </div>
        </div>
        <div className='slider-card'>
            <p className='paraaa'> Per sed, mattis. Integer viverra euismod maecenas <br/>incidunt, phasellus consequatur aliquam nihil temporibus<br/> in assumenda?
                 Aute praesentium fugiat. Perspiciatis, <br/>
                 ultrices deserunt convallis, eius at non.</p>
                 <img src={arrow2} alt="d" className='arrow2'/>
            <div className='comma-div'>
               <img className='comma'  src={comma} alt="df" />
               <div>
                <div className='name-div'>
                    <p>Jenny Wilson</p>
                    <img  className='girlp' src={girlp} alt="" />
                </div>
               </div>
            </div>
        </div>
        </Slider>
        </div>
    </div>
  )
}
