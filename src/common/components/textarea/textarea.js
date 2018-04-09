import React from 'react';
import classNames from "classnames";
import './textarea.css';

function TextArea({label, inputRef}) {

    const textArea = (
        <textarea className={classNames({'text-area' : !label})} ref={inputRef}/>
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
