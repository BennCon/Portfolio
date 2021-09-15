import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import AboutMe from '../AboutMe';


function Home() {
  return (
    <div class="home">
      <Navbar/>
      <AboutMe/>
    </div>
  );
}

export default Home;