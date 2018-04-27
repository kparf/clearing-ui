import React from 'react';
import PropTypes from 'prop-types';
import './data-time-list-picker.css'
import Button from '../../../common/components/button/button';
import DataTimeListPicker__Item from './data-time-list-picker__item/data-time-list-picker__item';

class DataTimeListPicker extends React.Component {

    static defaultProps = {
        values: [new Date()]
    };

    constructor(props) {
        super(props)
        this.removeItemHandler = this.removeItemHandler.bind(this);
        this.changeItemHandler = this.changeItemHandler.bind(this);
        this.addItemHandler = this.addItemHandler.bind(this);
    }

    removeItemHandler(index) {
        const { onChange, values } = this.props;
        const newValues = values.slice();
        newValues.splice(index, 1);
        if (onChange) {
            onChange(newValues);
        }
    }

    changeItemHandler(index, date) {
        const { onChange, values } = this.props;
        const newValues = values.slice();
        newValues[index] = date;

        if (onChange) {
            onChange(newValues);
        }
    }

    addItemHandler(e) {
        e.preventDefault();
        const { onChange, values } = this.props;
        const newValues = values.slice();
        newValues.push(new Date());

        if (onChange) {
            onChange(newValues);
        }
    }

    render() {

        const { values } = this.props;

        const dateTimePickers = values.map( (value, index) => {
            return (
                <DataTimeListPicker__Item
                    key={index}
                    index={index}
                    value={value}
                    onChange={this.changeItemHandler}
                    onRemove={this.removeItemHandler}
                />
            )
        });

        return (
            <fieldset className={`data-time-list-picker ${this.props.className}`}>
                {dateTimePickers}
                <Button className='data-time-list-picker__add-item'
                        onClick={this.addItemHandler}>
                    + ADD DATE
                </Button>
            </fieldset>
        )
    }
}

DataTimeListPicker.propTypes = {
    values: PropTypes.array,
    className: PropTypes.string
};

export default DataTimeListPicker;
