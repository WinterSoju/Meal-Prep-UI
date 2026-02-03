import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import LabTabs from '../Menu';
import WhyUs from '../WhyUs';
import Testimonial from '../testimonial';
import HowItWorks from '../HowItWorks';

function Home() {
  return (
    
      <div className='homepage'> 
        <HeroSection />
        <WhyUs />
        <Cards />
        <LabTabs />
        <Testimonial />
        <HowItWorks />
      </div>
  );
}

export default Home;
