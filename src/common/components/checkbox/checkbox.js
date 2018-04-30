import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';
import classNames from "classnames";

function Checkbox({label, value, onChange, checked}) {

    const checkbox = (
        <input className={classNames({checkbox : !label})}
               value={value}
               type="checkbox"
               defaultChecked={checked}
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

Checkbox.propsTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    checked: PropTypes.bool
};
export default Checkbox;
