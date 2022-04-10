import React from 'react';
import './header.scss';

const Header = () => {

    return(
        
        <div className='header_container'>
            <div className='header_container-logo'>
                <h1 data-testid='headerLogo'>Tasck</h1>
            </div>
            <div className='header_container-content'>
                <h3 data-testid='headerSlogan'>A Task Manager to organize your duties</h3>
            </div>
        </div>
    )
}

export default Header;