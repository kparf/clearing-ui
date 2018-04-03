import React from 'react';
import './checkbox.css';
import classNames from "classnames";

function Checkbox({label}) {

    const checkbox = (
        <input className={classNames({checkbox : !label})} type="checkbox"/>
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
