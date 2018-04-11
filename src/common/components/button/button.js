import React from 'react';
import './button.css';

function Button({children, type, onClick, className}) {
    return (
        <button className={`button ${className}`}
                type={type}
                onClick={onClick}>{children} ></button>
    )
}

export default Button;
