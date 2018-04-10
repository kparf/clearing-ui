import React from 'react';
import './loading.css';
import loading from './loading.gif';

function Loading({width, height}) {
    return (
        <div className='loading'>
            <img className='loading__image' src={loading} width={width} height={height}/>
        </div>
    );
}

export default Loading;
