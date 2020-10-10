import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import cake1 from '../images/cake1.JPG'
import cake2 from '../images/cake2.jpg'
import cake3 from '../images/cake3.png'
import cake4 from '../images/cake4.png'
import cake5 from '../images/cake5.png'
import cake6 from '../images/cake6.jpg'
import cake7 from '../images/cake7.png'

import '../css/Gallery.css';

const Gallery = (props) =>{
  return (
    <div  className="gallery">
    <h1 className='SkillsHero'>Wonderfull Cakes</h1>

    <div className="container">
    <div><img src={cake1} className='BakeryImg'/></div>
    <div><img src={cake2} className='BakeryImg'/></div>
    <div><img src={cake3} className='BakeryImg'/></div>
    <div><img src={cake4} className='BakeryImg'/></div>
    <div><img src={cake5} className='BakeryImg'/></div>
    <div><img src={cake6} className='BakeryImg'/></div>
    <div><img src={cake7} className='BakeryImg'/></div>

    </div>

      <Footer/>
    </div>
  );
}

export default Gallery;