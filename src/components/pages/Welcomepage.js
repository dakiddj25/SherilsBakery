import React, { useEffect } from 'react';
import './page.css';
import cake1 from '../images/cake1.JPG'
import cake2 from '../images/IMG_0259.JPG'
import cake3 from '../images/cakeslogo.png'
import cake4 from '../images/IMG_0240.JPG'
import cake5 from '../images/IMG_0256.JPG'
import animate from 'animate.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Button } from '../Button';

const Welcome =()=> {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
      

  return (
      <div className='pageOne'>
    <div className='welcomeBox'>
        <div className='Box1' data-aos='fade-right'>
            <p>Indulge yourself with a special treat for all your hard work or just for being you! 
            At Sheril’s Bakery everyone deserves something sweet! everything is still made from scratch.
            It’s as real as our grandmothers used to make. For us, that look when you see your cake is as important as the taste.
             </p>
        </div>

        <div data-aos='fade-left' className='Pic1'>
            <img  src={cake1}  ></img>
        </div>

        <div className='Pic2' data-aos='fade-right'>
            <img src={cake2} width="300" height="400"></img>
        </div>

        <div className='Box2' data-aos='fade-left'>
            <p>Be our guest and surrender to the sensational aroma of sweet delights at Mia’s Bakery. From freshly baked pies and pastries, to breathtaking cakes, 
            we offer something special for every occasion! </p>
        </div>
    </div>
    {/* middle Imgae to separate  */}
    <img className='imgBorder' src={cake3}/>

    <div className='welcomeBox'>
        <div className='Box1' data-aos='fade-right'>
            <h1>Shop with us</h1>
            <p> 
            Treat yourself to my delisous cakes. Visit our contact me page and place your order for pickup today!
             </p>
             <button>Order Cakes</button>
             

        </div>

        <div data-aos='fade-left' className='Pic1'>
            <img  src={cake4}  ></img>
        </div>

        <div className='Pic2' data-aos='fade-right'>
            <img src={cake5} width="300" height="400"></img>
        </div>

        <div className='Box2' data-aos='fade-left'>
        <h1>Check out our Gallery</h1>
            <p>Check out our gallery and look at all the delisous cakes that were made for other customers! </p>
        </div>
    </div>
    </div>
  );
}

export default Welcome;