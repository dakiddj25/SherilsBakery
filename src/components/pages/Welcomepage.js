import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './page.css';
import animate from 'animate.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Button } from '../Button';

const Welcome =()=> {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    const history = useHistory();

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
            <img  src='/images/cake1.JPG' alt='cake'  ></img>
        </div>

        <div className='Pic2' data-aos='fade-right'>
            <img src='/images/IMG_0259.JPG' width="300" height="400" alt='cake'></img>
        </div>

        <div className='Box2' data-aos='fade-left'>
            <p>Be our guest and surrender to the sensational aroma of sweet delights at Mia’s Bakery. From freshly baked pies and pastries, to breathtaking cakes, 
            we offer something special for every occasion! </p>
        </div>
    </div>
    {/* middle Imgae to separate  */}
    <img className='imgBorder' src='/images/cakeslogo.png' alt='logo'/>

    <div className='welcomeBox'>
        <div className='Box1' data-aos='fade-right'>
        <h1>Shop with us</h1>
             <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>history.push("/ContactUs")}
             >
             Order Cakes</Button>
             <p> 
            Treat yourself to my delisous cakes. Visit our contact me page and place your order for pickup today!
             </p>
        </div>

        <div data-aos='fade-left' className='Pic1'>
            <img  src='/images/IMG_0240.JPG'  alt='cake'></img>
        </div>

        <div className='Pic2' data-aos='fade-right'>
            <img src='/images/IMG_0256.JPG' width="300" height="400" alt='cake'></img>
        </div>

        <div className='Box2' data-aos='fade-left'>
        <h1>Check out our Gallery</h1>
            <p>Check  out our gallery and look at all the delisous cakes that were made for other customers! </p>
            
                    
             <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>history.push("/Gallery")}>
             Gallery</Button>
        </div>
    </div>

    {/* <div className='welcomeBox2'>
        <div className='Box3' data-aos='fade-right'>
            <h1>Shop with us</h1>
            <p> 
            Treat yourself to my delisous cakes. Visit our contact me page and place your order for pickup today!
             </p>
             <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>history.push("/ContactUs")}
             >
             Order Cakes</Button>
             

        </div>

        <div data-aos='fade-left' className='Pic3'>
            <img  src='/images/IMG_0240.JPG' ></img>
        </div>

        <div className='Pic4' data-aos='fade-right'>
            <img src='/images/IMG_0256.JPG' width="300" height="400"></img>
        </div>

        <div className='Box4' data-aos='fade-left'>
        <h1>Check out our Gallery</h1>
            <p>Check  out our gallery and look at all the delisous cakes that were made for other customers! </p>


                
             <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>history.push("/Gallery")}>
             Gallery</Button>

             
             
        </div>
    </div> */}
    </div>
  );
}

export default Welcome;