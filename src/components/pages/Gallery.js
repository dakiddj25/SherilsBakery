import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';

import '../css/Gallery.css';

const Gallery = (props) =>{
  return (
    <div  className="gallery">
    <h1 className='SkillsHero'>Wonderfull Cakes</h1>

    <div className="container">
    <div><img src='/images/cake1.JPG' className='BakeryImg'/></div>
    {/* <div><img src={cake2} className='BakeryImg'/></div>
    <div><img src={cake3} className='BakeryImg'/></div>
    <div><img src={cake4} className='BakeryImg'/></div>
    <div><img src={cake5} className='BakeryImg'/></div>
    <div><img src={cake6} className='BakeryImg'/></div>
    <div><img src={cake7} className='BakeryImg'/></div> */}

    </div>

      <Footer/>
    </div>
  );
}

export default Gallery;