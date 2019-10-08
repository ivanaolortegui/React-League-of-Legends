import React from 'react';
import logo from '../assets/logo-lol-letters.png'


import '../App.scss';
const Header = () => {
  return (
    <header className="header" >
      <figure>
        <img className="header__img" src={logo} alt="champion" />
      </figure>
    </header>
  );
}
export default Header;