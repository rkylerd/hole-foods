import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className="flex-row space-inb footer">
            <div className="flex-col">
                <span>Column1</span>
            </div>
            <div className="flex-col space-inb">
                <span>Column2</span>
            </div>
            <div className="flex-col">
                <span>Column3</span>
            </div>
        </div>
    );
}

export default Footer;