import React from 'react';
import ProviderRegistration__Form from './__form/provider-registration__form'
import Loading from '../../../common/components/loading/loading';
import './provider-registration.css';
import { connect } from 'react-redux';
import { registerProvider } from '../../actions/async';
import Title from '../../../common/components/title/title';

const REDIRECT_CONFIRMATION_LINK = 'confirmation';

class ProviderRegistration extends React.Component{

    constructor(props) {
        super(props);
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    render(){
        const { isFetching, form } = this.props;

        let loading = null;
        if (isFetching) {
            loading = <Loading width={100}/>;
        }

        return (
            <div className='provider-registration'>
                <Title label='REGISTRATION' comment='Ready to start a new project? Here’s where you reach out.'/>
                <ProviderRegistration__Form onSubmit={this.submitFormHandler} form={form}/>
                {loading}
            </div>
        );
    }

    submitFormHandler(e) {
        e.preventDefault();
        const { match, dispatch, form } = this.props;
        dispatch(registerProvider(form, `${match.url}/${REDIRECT_CONFIRMATION_LINK}`));
    }
}

function mapStateToProps(state) {
    const registration = state.provider.registration;
    return {
        form: {
            ...{
                name: '',
                email: '',
                address: '',
                description: '',
                services: [],
                password: '',
                repeatPassword: ''
            },
            ...registration.form
        },
        isRegistrationSuccess: registration.isProviderRegistrationSuccess,
        isRegistrationFail: registration.isProviderRegistrationFail,
        isFetching: registration.isFetching
    }
}

export default connect(mapStateToProps)(ProviderRegistration);
