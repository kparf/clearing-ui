import React from 'react';
import classNames from 'classnames';
import './input.css';

function Input({
                   label,
                   type,
                   defaultValue,
                   defaultChecked,
                   inputRef,
                   onChange,
                   value
}) {
    const inputType = type || "text";

    const input = (
        <input
            defaultValue={defaultValue}
            defaultChecked={defaultChecked}
            onChange={onChange}
            className={classNames({input : !label})}
            type={inputType}
            ref={inputRef}
            value={value}
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
