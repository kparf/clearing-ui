import React from 'react';
import classNames from "classnames";
import './textarea.css';

function TextArea({label, inputRef, onChange, value}) {

    const textArea = (
        <textarea className={classNames({'text-area' : !label})} ref={inputRef} onChange={onChange} value={value}/>
    );

    if (label) {
        return (
            <label className="text-area">
                {label}
                {textArea}
            </label>
        )
    }
    return textArea;
}

export default TextArea;
