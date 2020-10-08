import React from 'react';
import './page.css';
import cake1 from '../images/cake1.JPG'

function Welcome() {
  return (
    <div className='welcomeBox'>
        <div className='Box1'>
            <p>Indulge yourself with a special treat for all your hard work or just for being you! 
            At Sheril’s Bakery everyone deserves something sweet! </p>
        </div>

        <div className='Pic1'>
            <img src={cake1}  width="300" height="400"></img>
        </div>

        <div className='Pic2'>
            <img src={cake1} width="300" height="400"></img>
        </div>

        <div className='Box2'>
            <p>Indulge yourself with a special treat for all your hard work or just for being you! 
            At Sheril’s Bakery everyone deserves something sweet! </p>
        </div>

    </div>
  );
}

export default Welcome;