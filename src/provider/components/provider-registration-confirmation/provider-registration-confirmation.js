import React from 'react';
import { connect } from 'react-redux';
import './provider-registration-confirmation.css';

class ProviderRegistrationConfirmation extends React.Component {

    componentDidMount() {
    }

    render() {
        const { verificationKey } = this.props.match.params;

        return (
            <div className='provider-registration-confirmation'>
                <h1>PROVIDER CREATED</h1>
                <p>
                    To activate your account, follow the link that we sent you.
                </p>
            </div>
        )
    }
}

export default connect()(ProviderRegistrationConfirmation);
