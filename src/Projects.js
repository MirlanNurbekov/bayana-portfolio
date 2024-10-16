import React from 'react';
import Navbar from './Navbar'; 
import './Navbar.css'
import './About.css';
import photo from '../src/assets/img.png';
import photo1 from '../src/assets/img1.png';
function Projects() {
  return (
    <div className='projectsContent'>
      <Navbar /> 
      <h1 className='projectsTitle'>My works</h1>   
      <div className='projectsImage'>
        <a href='https://github.com/BkBayana/CS25-24-Intro-to-Python/tree/main/dae'><img src={photo} alt="prPhoto" className="photo" /></a>
        <a href='https://www.instagram.com*/_bakytbekova_b'><img src={photo1} alt="prPhotoOne" className="photo" /></a>
      </div>   
    </div>
  );
}

export default Projects;