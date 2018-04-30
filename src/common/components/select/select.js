import React from 'react';
import './select.css';

function Select({options, onChange, value, disabled}) {

    const items = options.map(option => {
        return <option
                    key={option.value}
                    value={option.value}>
                    {option.label}
               </option>
    });

    return (
        <select className='select'
                value={value}
                onChange={onChange} disabled={disabled}>
            {items}
        </select>
    )
}

export default Select;
