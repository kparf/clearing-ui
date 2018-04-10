import React from 'react';
import './provider-registration__form.css';
import Input from '../../../../common/components/input/input';
import TextArea from '../../../../common/components/textarea/textarea';
import Button from '../../../../common/components/button/button';
import ProviderRegistration__Services from '../__services/provider-registration__services';
import { connect } from 'react-redux';
import { fetchServices } from "../../../../common/actions/async";
import { providerRegistrationFormChange } from "../../../actions/sync";

class ProviderRegistration__Form extends React.Component {

    constructor(props) {
        super(props);

        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.addressChangeHandler = this.addressChangeHandler.bind(this);
        this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.repeatPasswordChangeHandler = this.repeatPasswordChangeHandler.bind(this);
        this.servicesChangeHandler = this.servicesChangeHandler.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchServices());
    }

    emailChangeHandler(e) {
        this.props.dispatch(providerRegistrationFormChange({
            email: e.currentTarget.value
        }));
    }

    nameChangeHandler(e) {
        this.props.dispatch(providerRegistrationFormChange({
            name: e.currentTarget.value
        }));
    }

    addressChangeHandler(e) {
        this.props.dispatch(providerRegistrationFormChange({
            address: e.currentTarget.value
        }));
    }

    descriptionChangeHandler(e) {
        this.props.dispatch(providerRegistrationFormChange({
            description: e.currentTarget.value
        }));
    }

    servicesChangeHandler(e, values) {
        this.props.dispatch(providerRegistrationFormChange({
            services: values
        }));
    }

    passwordChangeHandler(e) {
        this.props.dispatch(providerRegistrationFormChange({
            password: e.currentTarget.value
        }));
    }

    repeatPasswordChangeHandler(e) {
        this.props.dispatch(providerRegistrationFormChange({
            repeatPassword: e.currentTarget.value
        }));
    }

    render() {
        const { services, form, onSubmit } = this.props;
        return (
            <form role="form" className='provider-registration__form' ref={this.form} onSubmit={onSubmit}>
                <fieldset>
                    <Input label='Logo' type='file'/>
                    <Input value={form.email} label='Email' type='email' onChange={this.emailChangeHandler}/>
                    <Input value={form.name} label='Name' onChange={this.nameChangeHandler}/>
                    <Input value={form.address} label='Address' onChange={this.addressChangeHandler}/>
                    <TextArea label='Description' onChange={this.descriptionChangeHandler} value={form.description}/>

                    <ProviderRegistration__Services value={form.services}
                                                    label='Services'
                                                    services={services} onChange={this.servicesChangeHandler}/>

                    <Input value={form.password} label='Password' type='password' onChange={this.passwordChangeHandler}/>
                    <Input value={form.repeatPassword} label='Repeat Password' type='password' onChange={this.repeatPasswordChangeHandler}/>
                    <Button type='submit'>REGISTER</Button>
                </fieldset>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        services: state.common.services.items,
        isFetching: state.common.services.isFetching,
    }
}

export default connect(mapStateToProps)(ProviderRegistration__Form);
