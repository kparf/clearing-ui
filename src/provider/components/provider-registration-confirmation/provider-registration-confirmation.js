import React from 'react';
import { connect } from 'react-redux';

class ProviderRegistrationConfirmation extends React.Component {

    componentDidMount() {
        const { match } = this.props;
        match.params.verificationKey;
    }

    render() {
        return (
            <div className='provider-registration-confirmation'>
                Provider Registration Confirmation
            </div>
        )
    }
}

export default connect()(ProviderRegistrationConfirmation);
