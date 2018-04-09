import React from 'react';
import classNames from 'classnames';
import './input.css';

function Input({label, type, defaultValue, defaultChecked, inputRef}) {
    const inputType = type || "text";

    const input = (
        <input
            defaultValue={defaultValue}
            defaultChecked={defaultChecked}
            className={classNames({input : !label})}
            type={inputType}
            ref={inputRef}
        />
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
