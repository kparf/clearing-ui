import React from 'react';
import './title.css'


function Title({label, comment}) {
    return (
        <div className="title">
            <h1>{label}</h1>
            <p>
                {comment}
            </p>
        </div>
    )
}

export default Title;
