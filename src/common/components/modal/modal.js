import React from 'react';
import './modal.css';

function Modal({ children, className, title, open }) {

    const statusClass = open ? 'modal_open' : 'modal_hidden';

    let titleElem;
    if (title) {
        titleElem = (
            <div className='modal__title'>
                <h2>{ title }</h2>
            </div>
        )
    }

    return (
        <div className={`modal ${className} ${statusClass}`}>
            <div className='modal__popup'>
                { titleElem }
                { children }
            </div>
        </div>
    )
}

export default Modal;
