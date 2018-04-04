import React from 'react';
import ProviderRegistration__Form from './__form/provider-registration__form'
import ProviderRegistration__Title from './__title/provider-registration__title';
import './provider-registration.css';
import { connect } from 'react-redux';
import { fetchServices } from '../../provider-actions';

class ProviderRegistration extends React.Component{

    constructor(props) {
        super(props);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    render(){
        return (
            <div className="provider-registration">
                <ProviderRegistration__Title/>
                <ProviderRegistration__Form/>
                <a href="#" onClick={this.handleRefreshClick}>refresh</a>
            </div>
        );
    }

    handleRefreshClick(e) {
        e.preventDefault();
        console.log(this);
        const { dispatch } = this.props;
        dispatch(fetchServices());

    }
}

function mapStateToProps(state) {

    return {

    }
}

export default connect(mapStateToProps)(ProviderRegistration);
