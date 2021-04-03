import React from 'react';
import './css/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <div className='footer-container'>

      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Like what you see? Let me know by notifing me 
        </p>
        <p className='footer-subscription-text'>
          Just Enter you name and press the button!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Name'
            />
            <Button buttonStyle='btn--outline'>+1</Button>
          </form>
        </div>
      </section> */}

      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <AiFillLinkedin color='red' size='5em'/>
            <AiFillGithub color='red' size='5em'/>
          </div>
        </div>
      </div> */}


      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AcessSoar Media
              <i class='fab fa-typo3' />
            </Link>
          </div>
          
          
          <div class='social-icons'>
          <small class='website-rights'> © 2020</small>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;