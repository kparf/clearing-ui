import React from 'react';
import './services.css';
import Checkbox from '../checkbox/checkbox';

class Services extends React.Component {

    constructor(props) {
        super(props);
        this.valueSet = new Set();
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        const { value, checked } = e.target;
        const { onChange } = this.props;
        if(checked) {
            this.valueSet.add(value);
        } else {
            this.valueSet.delete(value);
        }
        onChange(e, Array.from(this.valueSet));
    }

    render () {
        const { label, services, value, className } = this.props;

        const serviceRadioButtons = services.map(service => {
            let checked = false;
            if (value && (value.indexOf(service.id) !== -1)) {
                checked = true;
            }
            return (
                <Checkbox key={service.id}
                          name="service"
                          label={service.name}
                          value={service.id}
                          checked={checked}
                          onChange={this.changeHandler}/>
            )
        });

        return (
            <fieldset className={`services ${className}`}>
                <legend>{label}</legend>
                {serviceRadioButtons}
            </fieldset>
        );
    }
}

export default Services;
