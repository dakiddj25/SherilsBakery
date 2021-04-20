import React from 'react';
import '../../App.css';
import HeroSection from '../pages/HeroSection';
import Footer from './Footer';
import Welcome from '../pages/Welcomepage';

function Home() {
  return (
    <>
      <HeroSection />
      <Welcome/>
    </>
  );
}

export default Home;