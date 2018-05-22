import React from 'react';
import classNames from "classnames";
import './textarea.css';

function TextArea({label, inputRef, onChange, value, className}) {

    const textArea = (
        <textarea className={classNames({'text-area' : !label}, { [className]: !label})} ref={inputRef} onChange={onChange} value={value}/>
    );

    if (label) {
        return (
            <label className={`text-area ${className}`}>
                {label}
                {textArea}
            </label>
        )
    }
    return textArea;
}

export default TextArea;
