import React from 'react';

const Donut = ({name = "", src = ""}) => {
    return (
        <div className="donut">
            <h2>{name}</h2>
            <img className="donut-img" src={src} alt={`${name} donut`}/>
        </div>
    )
}

export default Donut;