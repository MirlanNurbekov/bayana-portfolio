import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div className='container'>
      <h1 className='title'>Hello, I'm <span>Bakytbekova Bayana.</span></h1>
      <h2 className='title'>I'm web developer</h2>
      <button className='btn' onClick={handleClick}>Click</button>
    </div>
  );
  
}

export default Header;
