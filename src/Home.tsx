import React from 'react'
import AboutExperts from './cryptoview-structure/AboutExperts';
import FirstSec from './cryptoview-structure/FirstSec';
import Footer from './cryptoview-structure/Footer';
import Header from './cryptoview-structure/Header';
import HowItWorks from './cryptoview-structure/HowItWorks';
import Pricing from './cryptoview-structure/Pricing';
import SecondSec from './cryptoview-structure/SecondSec';
import Sponsors from './cryptoview-structure/Sponsors';
import ThirdSec from './cryptoview-structure/ThirdSec';

const Home = () => {
  return (
    <div>
      <Header/>
      <FirstSec/>
      <Sponsors/>
      <SecondSec/>
      <HowItWorks/>
      <ThirdSec/>
      <Pricing/>
      <AboutExperts/>
      <Footer/>
    </div>
  )
}

export default Home