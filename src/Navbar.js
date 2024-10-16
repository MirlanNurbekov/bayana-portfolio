
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/Certificate1.png';
import './About.css'; // Если у вас есть стили для заголовка

function Header() {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <img src={logo} alt="Логотип" className="logo" />
        <ul className='headerMenu'>
          <li><Link to="/header">MAIN</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
