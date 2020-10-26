import React from 'react';
import '../App.css';
import { Button } from './Button';
import { useHistory } from 'react-router-dom';
import './HeroSection.css';
import video1 from './videos/CakeAd.mp4'

function HeroSection() {
  const history = useHistory();
  return (
    <div className='hero-container'>

      <video src={video1} autoPlay loop muted type="video/mp4"/>
      <h1>Cakes by Sheril</h1>
      <p>Indulge yourself a little!</p>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={()=>history.push("/AboutMe")}
        >
          Order Some Cakes?
        </Button>

        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;