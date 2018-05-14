// @flow
import React from 'react';
import './client-available-providers.css';
import Button from '../../../common/components/button/button';
import { clientConfirmReservationModalOpen } from "../../actions/sync";
import { clientFetchAvailableProvidersByServices } from "../../actions/async";
import { connect } from 'react-redux';
import {
    Link
} from 'react-router-dom';

type Props = {
    dispatch: any,
    filter: any,
    providers: any
};

// TODO describe it somewhere in the api level
type Provider = {
    id: string,
    name: string,
    email: string,
    address: string,
    description: string,
    rating: number,
    password: string,
    services: string[]
}

class ClientAvailableProviders extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    createProviderSelectionHandler = (provider: any) => {
        return (event: any) => {
            this.props.dispatch(clientConfirmReservationModalOpen(provider));
        }
    };

    componentDidMount() {
        const { filter, dispatch } = this.props;
        if (filter.services) {
            dispatch(clientFetchAvailableProvidersByServices(filter.services));
        } else {
            // TODO Add default behavior
        }
    }

    render() {
        const providers = this.props.providers;

        const items = providers.map((provider : Provider) => (
            <tr key={ provider.id } className='client-available-providers__line'>
                <td>{ provider.name }</td>
                <td>{ provider.address }</td>
                <td>{ provider.rating }</td>
                <td>***</td>
                <td>
                    <Button className='button_sm' onClick={this.createProviderSelectionHandler(provider)}>ORDER ></Button>
                </td>
            </tr>
        ));

        return (
            <div className='client-available-providers'>
                <div className='client-available-providers__back-link'>
                    <Link to='client-booking-from'>&#60; BACK</Link>
                </div>
                <table className='client-available-providers__table'>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Rating</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                    { items }
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const availableProviders = state.client.availableProviders;
    return {
        filter: availableProviders.filter,
        providers: availableProviders.providers,
        isFetching: availableProviders.isFetching
    }
}

export default connect(mapStateToProps)(ClientAvailableProviders);
