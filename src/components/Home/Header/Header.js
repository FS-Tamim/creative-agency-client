import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css'
import HeaderMain from './HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className='header '>
            <div className="container">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;