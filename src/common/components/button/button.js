import React from 'react';
import './button.css';

function Button({children, type, onClick}) {
    return (
        <button className="button" type={type} onClick={onClick}>{children} ></button>
    )
}

export default Button;
