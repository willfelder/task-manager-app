import React from 'react';
import './footer.scss';

const Footer = () => {

    return(
        <div className='footer_container'>
            <h3 data-testid='footer_title'>Tasck was developed by William Lengenfelder</h3>
            <a href='https://github.com/willfelder' 
                target='_blank'
                data-testid='footer_link'>
            <p data-testid='footer_paragraph'>Visit my Github page</p>
            </a>
        </div>
    )
}

export default Footer;