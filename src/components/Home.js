import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import HeroSection2 from './HeroSection2';
import Login2 from './Login2';

function Home({ userRole, onLogin }) {
  return (
    <>
      <Navbar userRole={userRole} />
      {/* <HeroSection /> */}
      <HeroSection2 userRole={userRole} onLogin={onLogin} />
      <Footer />
    </>
  );
}

export default Home;
