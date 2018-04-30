import React from 'react';
import PropTypes from 'prop-types';
import removeButtonImg from './remove-button.png';
import DataTime from 'react-datetime';

import './data-time-list-picker__item.css';
import 'react-datetime/css/react-datetime.css';

class DataTimeListPicker__Item extends React.Component {

    constructor(props) {
        super(props);
        this.removeItemHandler = this.removeItemHandler.bind(this);
        this.changeItemHandler = this.changeItemHandler.bind(this);
    }

    removeItemHandler(e) {
        e.preventDefault();
        this.props.onRemove(this.props.index);
    }

    changeItemHandler(date) {
        this.props.onChange(this.props.index, date)
    }

    render() {

        const {value} = this.props;

        return (
            <div className='data-time-list-picker__item'>
                <DataTime value={value} onChange={this.changeItemHandler}/>
                <button className='data-time-list-picker__remove-button'
                        onClick={this.removeItemHandler}
                        type='button'>
                    <img src={removeButtonImg}/>
                </button>
            </div>);
    }
}

DataTimeListPicker__Item.propTypes = {
    value: PropTypes.any,
    index: PropTypes.number,

    onChange: PropTypes.func,
    onRemove: PropTypes.func
};

export default DataTimeListPicker__Item;
