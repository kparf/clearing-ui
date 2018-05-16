import React from 'react';
import './button.css';

function Button({children, type, onClick, className = '', ...otherProps}) {
    return (
        <button className={`button ${className}`}
                type={type}
                onClick={onClick}
                autoFocus={false}
                {...otherProps}>{children}</button>
    )
}

export default Button;
