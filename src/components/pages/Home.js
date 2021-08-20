import React from 'react';
import '../../App.css';
import GithubCards from '../GithubCards';
import Navbar from '../Navbar';


function Home() {
  return (
    <div class="home">
      <Navbar/>
      <GithubCards/>
    </div>
  );
}

export default Home;