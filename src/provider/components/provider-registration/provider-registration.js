import React from 'react';
import ProviderRegistration__Form from './__form/provider-registration__form'
import ProviderRegistration__Title from './__title/provider-registration__title';
import './provider-registration.css';
import { connect } from 'react-redux';
import { fetchServices } from '../../../common/actions/async';

class ProviderRegistration extends React.Component{

    constructor(props) {
        super(props);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    render(){
        const { services } = this.props;
        return (
            <div className="provider-registration">
                <ProviderRegistration__Title/>
                <ProviderRegistration__Form services={services} onSubmit={this.submitFormHandler}/>
            </div>
        );
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchServices());
    }

    submitFormHandler(e, data) {
        e.preventDefault();
        console.log(data);
    }

    handleRefreshClick(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(fetchServices());
    }
}

function mapStateToProps(state) {
    return {
        services: state.common.services.items,
        isFetching: state.common.services.isFetching,
    }
}

export default connect(mapStateToProps)(ProviderRegistration);
