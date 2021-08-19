import React from 'react';
import '../../App.css';
import GithubCards from '../GithubCards';
import Navbar from '../Navbar';


function Home() {
  return (
    <>
      <Navbar/>
      <GithubCards/>
    </>
  );
}

export default Home;