import React from 'react';
import NavbarTop from '../components/NavbarTop';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';

// About Page
const AboutPage = () => {
  return (
    <div>
      <NavbarTop />
      <Announcement />
      <Navbar />
      <div className='content'>
        <h1>About Page</h1>
        <p>This is the About Page</p>
      </div>
    </div>
  );
};

export default AboutPage;
