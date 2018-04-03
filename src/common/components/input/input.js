import React from 'react';
import classNames from 'classnames';
import './input.css';

function Input({label, type}) {
    const inputType = type || "text";

    const input = (
        <input className={classNames({input : !label})} type={inputType}/>
    );

    if (label) {
        return (
            <label className="input">
                {label}
                {input}
            </label>
        )
    }
    return input;
}

export default Input;
