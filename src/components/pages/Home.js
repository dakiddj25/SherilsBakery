import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Welcome from './Welcomepage';

function Home() {
  return (
    <>
      <HeroSection />
      <Welcome/>
      <Footer />
    </>
  );
}

export default Home;