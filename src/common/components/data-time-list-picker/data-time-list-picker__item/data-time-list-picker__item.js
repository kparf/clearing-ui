import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-datetime-picker';
import './data-time-list-picker__item.css';
import removeButtonImg from './remove-button.png';

class DataTimeListPicker__Item extends React.Component {

    constructor(props) {
        super(props)
        this.removeItemHandler = this.removeItemHandler.bind(this);
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

        return (<div className='data-time-list-picker__item'>
            <DateTimePicker value={value} onChange={this.changeItemHandler}/>
            <button className='data-time-list-picker__remove-button'
                    onClick={this.removeItemHandler}>
                <img src={removeButtonImg}/>
            </button>
        </div>);
    }
}

DataTimeListPicker__Item.propTypes = {
    value: PropTypes.any.isRequired,
    index: PropTypes.number,

    onChange: PropTypes.func,
    onRemove: PropTypes.func
};

export default DataTimeListPicker__Item;
