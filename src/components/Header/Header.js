import React from 'react';
import logo from '../../assets/investment-calculator-logo.png';
import styeles from './Header.module.css';
const Header = () => {
  return (
    <header className={styeles.header}>
      <img src={logo} alt='logo' />
      <h1>Investment Calculator</h1>
    </header>
  );
};
export default Header;
