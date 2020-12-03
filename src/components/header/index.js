import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="shadow flex-row space-inb header">
            <div className="flex-row"><h3>Hole Foods Donuts</h3></div>
            <div>
                <h3>Home</h3>
            </div>
            <div className="flex-row"></div>
        </div>
    )
}

export default Header;