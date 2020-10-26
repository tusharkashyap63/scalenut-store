import React from 'react';
import './Header.css';
import logo from '../../images/Scalenut-Store.png';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
    </header>
  );
}
