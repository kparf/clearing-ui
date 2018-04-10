import React from 'react';
import { connect } from 'react-redux';
import './provider-registration-confirmation.css';
import Loading from "../../../common/components/loading/loading";
import { verifyProvider } from "../../actions/async";

class ProviderRegistrationConfirmation extends React.Component {

    componentDidMount() {
        const { verificationKey } = this.props.match.params;
        if (verificationKey) {
            this.props.dispatch(verifyProvider(verificationKey));
        }
    }

    render() {
        const { isFetching, verificationStatus } = this.props;

        if (isFetching) {
            return (
                <div className='provider-registration-confirmation'>
                    <Loading width={100}/>
                </div>
            );
        }

        if(verificationStatus === 'success') {
            return (
                <div className='provider-registration-confirmation'>
                    <h1>PROVIDER ACTIVATED</h1>
                    <p>
                        You can log in as a provider.
                    </p>
                </div>
            )
        } else if(verificationStatus === 'fail') {
            return (
                <div className='provider-registration-confirmation'>
                    <h1>FAIL PROVIDER ACTIVATION</h1>
                    <p>
                        Most likely the link is not valid.
                    </p>
                </div>
            )
        }

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

function mapStateToProps(state) {
    const { verificationStatus, isFetching } = state.provider.registration;
    return {
        isFetching,
        verificationStatus
    }
}

export default connect(mapStateToProps)(ProviderRegistrationConfirmation);
