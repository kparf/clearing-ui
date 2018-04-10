import React from 'react';
import './checkbox.css';
import classNames from "classnames";

function Checkbox({label, value, onChange, checked}) {

    const checkbox = (
        <input className={classNames({checkbox : !label})}
               value={value}
               type="checkbox"
               checked={checked}
               onChange={onChange}/>
    );

    if (label) {
        return (
            <label className="checkbox">
                {checkbox}
                {label}
            </label>
        )
    }
    return checkbox;
}

export default Checkbox;
