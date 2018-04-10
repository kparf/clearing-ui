import React from 'react';
import './provider-registration__services.css';
import Checkbox from '../../../../common/components/checkbox/checkbox';

class ProviderRegistration__Services extends React.Component {

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
        const { label, services, value } = this.props;

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
            <fieldset className="provider-registration__services">
                <legend>{label}</legend>
                {serviceRadioButtons}
            </fieldset>
        );
    }
}

export default ProviderRegistration__Services;
