import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
    return <header>
       <img className="header__img" src={logo} alt="logo"/> 
    </header>
}

export default Header;