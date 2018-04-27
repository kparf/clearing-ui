import React from 'react';
import PropTypes from 'prop-types';
import './title.css'


function Title({label, comment}) {

    const commentWrapper = comment ? (<p>{comment}</p>): null;

    return (
        <div className="title">
            <h1>{label}</h1>
            {commentWrapper}
        </div>
    )
}

Title.propTypes = {
    label : PropTypes.string.isRequired,
    comment : PropTypes.string
};

export default Title;
