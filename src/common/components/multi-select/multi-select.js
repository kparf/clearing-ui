import React from 'react';
import './multi-select.css';

class MultiSelect extends React.Component {

    focusHandler = (event) => {
        console.log('onFocusHandler');
    };

    blurHandler = (event) => {
        console.log('onBlurHandler');
    };

    inputClickHandler = (event) => {
        event.target.parentNode.focus();
    };

    render() {
        return (
            <div tabIndex={0} className='multi-select' onFocus={this.focusHandler} onBlur={this.blurHandler}>
                <input className='multi-select__input'
                       autoFocus={false}
                       onClick={this.inputClickHandler}
                       type='text'
                       readOnly={true}/>
                <ul className='multi-select__list'>
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                    <li>Four item</li>
                </ul>
            </div>
        )
    }
}

export default MultiSelect;
