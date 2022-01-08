import React from 'react';
import './footer.scss';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <div className='footer_container'>
            <h3>Tasck was developed by William Lengenfelder</h3>
                    <a href='https://github.com/willfelder' target='_blank'>
                        <p>Visit my Github page </p>
                    </a>
        </div>
    )
}

export default Footer;