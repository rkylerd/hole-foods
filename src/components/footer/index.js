import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer flex-col top-shadow">
            <div className="flex-row space-inb fa-icons-container">
                <a href="https://github.com/cheeaun/repokemon">
                    <FontAwesomeIcon id="gh" className="fa-icon" icon={faGithub}/>
                </a>
                <a href="https://www.facebook.com/groups/beardclubuk/">
                    <FontAwesomeIcon id="fb" className="fa-icon" icon={faFacebookF}/>
                </a>
                <a href="https://www.instagram.com/basicprovobro/?hl=en">
                    <FontAwesomeIcon id="ig" className="fa-icon" icon={faInstagram}/>
                </a>
            </div>
        </div>
    );
}

export default Footer;