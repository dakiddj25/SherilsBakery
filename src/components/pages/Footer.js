import React from 'react';
import '../css/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <div className='footer-container'>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              {/* AcessSoar Media */}
              Wilson & Jones
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