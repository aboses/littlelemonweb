import React from 'react';
import logo from '../images/Logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }


  return (

    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <a href='/' className='logo'>
            <img src={logo} alt='logo' />
        </a>
        <div className='menu-icon'  onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "visible": ""}`}>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Reservations</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
        </ul>
    </nav>
    )
}

export default Nav;