import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"
import Header from './Header'
import Review from './Review';
import faceb from '../img/faceb.svg'
import follow from '../img/follow.svg'
import insta from '../img/insta.svg'
import twi from '../img/twi.svg'
import Vector from '../img/Vector 5.svg';
import girl from '../img/girl 1girl.png'
import dsd from '../img/dsd-2 1zig.png'
import Group from '../img/Group 6.png'
import grp from '../img/grp.png'
import grpp from '../img/grpp.png'
import dsdd from '../img/dsdd.png'
import cont from '../img/cont.png'
import line from '../img/line.png'
import man2 from '../img/man2.png'
import profile from '../img/profile.png'
import sit from '../img/sit.png'
import phone1 from '../img/phone1.png'
import phone2 from '../img/phone2.png'
import phone3 from '../img/phone3.png'
import phone4 from '../img/phone4.png'
import phone5 from '../img/phone5.png'
import dot1 from '../img/dot1.png'
import dot2 from '../img/dot2.png'
import Footer from './Footer';
import laptop from '../img/laptop.png'
import arr from '../img/arr.png'

export default function Home() {

  return (
    <>
    <div className='container-1'>
        <div className='header-div'>
            <Header />
        </div>
        <div className='follow-container'>
           <img src={faceb } alt='faceb'/>
           <img src={twi } alt='faceb'/>
           <img src={insta } alt='faceb'/>
           <img src={Vector} alt='faceb' />
           <img src={follow } alt='faceb' />
        </div>
        <div className='home-1'>
            <h1 className='best-mobile'>Best Mobile App Showcase</h1>
            <p className='para'>Aenean dictum odio dapibus turpis dapibus vestibulum. 
                Mauris quis massa nisi. Nullam porta lorem at volutpat euismod. 
                Proin in ex nunc.</p>
            <button className='read-more-button'>Read More</button>
        </div>   
    </div>
    <div className='container-2'>
        <div className='cont-2-1'>
            <div className='cont-2-1-1'>
                <h4 className='engaging'>Engaging & Spacious School Campus</h4>
                <img className='zig' src={dsd} alt="zig" />
                <p className='paraa'>Hise sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget. 
                    Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida.</p>
            </div>
            <div>
                <img className='girl' src={girl} alt="girl" />
            </div>
        </div>
        <div className='card-cont'>
            <div className='card-external'>
                <div className='card-internal'>
                    <div className='img-div'>
                        <img src={laptop} alt="laptop" />
                    </div>
                    <h1>Perfect UI Design</h1>
                    <div className='yellow-line'></div>
                    <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. 
                        Ut vitae ante ut mi vehicula vulputate.</p>
                    <button className='right-arrow'>
                        <img src={arr} alt="" />
                    </button>
                </div>
            </div>
            <div className='card-external'>
                <div className='card-internal bg-green'>
                    <div className='img-div'>
                        <img src={laptop} alt="laptop" />
                    </div>
                    <h1>Perfect UI Design</h1>
                    <div className='yellow-line'></div>
                    <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. 
                        Ut vitae ante ut mi vehicula vulputate.</p>
                    <button className='right-arrow'>
                        <img src={arr} alt="" />
                    </button>
                </div>
            </div>
            <div className='card-external'>
                <div className='card-internal '>
                    <div className='img-div'>
                        <img src={laptop} alt="laptop" />
                    </div>
                    <h1>Perfect UI Design</h1>
                    <div className='yellow-line'></div>
                    <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. 
                        Ut vitae ante ut mi vehicula vulputate.</p>
                    <button className='right-arrow'>
                        <img src={arr} alt="" />
                    </button>
                </div>
            </div>
        </div>
        <img className='zig-2' src={dsdd} alt="cs" />

    <div className='container-3'>
        <img className="man" src={cont} alt="man" />
        <div className='container-3-1'>
            <h1 className='easy'>Easy And Perfect Solution For Your Business App</h1>
            <img src={line} alt="" />
            <p className='paraa'>Aliquam aliquet purus a est consequat lobortis. Etiam vehicula suscipit purus, eget ullamcorper augue blandit vitae. Ut eu euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed fermentum a lacus bibendum convallis. Consequat purus aliquet a est aliquam lobortis. 
                Etiam vehicula suscipit purus, eget ullamcorper augue blandit vitae....</p>
            <button className='read-more-button'>Read More</button>
        </div>

    </div>
    </div>
    <div className='container-4'>
        <div className='ddd'>
        <h2>How does This App Work?</h2>
        <img src={dsd} alt=""/>
            <ul>
                <li className='li'>
                 <img src={profile} alt="x" />
                 <div>
                 <h1>Make A Profile</h1>
                 <p>Aliquam varius ligula nec leo tempus porta.
                  Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                 </div>
                </li>
                <li className='li'>
                 <img src={profile} alt="x" />
                 <div>
                 <h1>Make A Profile</h1>
                 <p>Aliquam varius ligula nec leo tempus porta.
                  Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                 </div>
                </li>
                <li className='li'>
                 <img src={profile} alt="x" />
                 <div>
                 <h1>Make A Profile</h1>
                 <p>Aliquam varius ligula nec leo tempus porta.
                  Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                 </div>
                </li>
                <li className='li'>
                 <img src={profile} alt="x" />
                 <div>
                 <h1>Make A Profile</h1>
                 <p>Aliquam varius ligula nec leo tempus porta.
                  Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                 </div>
                </li>
            </ul>
        </div>
            <img className='man-2' src={man2} alt="man-2" />
    </div>
    <div className='container-5'>
        <img src={sit} alt="sit" className='man-3'/>
        <div className='container-5-2'>
            <p className='design'>Designed & Worked By The Latest Partners</p>
            <p className='para-2'>Aliquam varius ligula nec leo tempus porta.</p>
            <p className='para-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries,
                  but also the leap into electronic typesetting,</p>
            <p className='para-2'>Suspendisse vitae varius diam, a vulputate urna.</p>
            <p className='para-2'>Aliquam aliquet purus eget lacus pretium.</p>
        </div>
    </div>
    <div className='container-6'>
        <div style={{textAlign:"center"}}>

        <h1>App Screenshots</h1>
        <img src={dsd} alt="" />
        <p>Saepe quo labore aenean dictumst expedita commodi <br/>auctor,
             nisl, lorem iusto feugiat nemo reiciendis laboris.</p>
        </div>
        <div className='phone-div-1'>
            <img className='phone' src={phone1} alt="phone" />
            <img  className='phone' src={phone5} alt="phone" />
            <img className='phone phone2'  src={phone3} alt="phone" />
            <img  className='phone' src={phone2} alt="phone" />
            <img className='phone'  src={phone4} alt="phone" />
        </div>
        <div className='dot'>
            <img src={dot2} alt="dt" className='dot'/>
            <img src={dot1} alt="dt" className='dot'/>
            <img src={dot1} alt="dt" className='dot'/>
        </div>
    </div>
    <Review />
    <Footer />
    </>
  )
}
