// @flow
import React from 'react';
import './client-available-providers.css';
import providers from '../../../temp/avalibale-providers';
import Button from '../../../common/components/button/button';
import { clientConfirmReservationModalOpen } from "../../actions/sync";
import { connect } from 'react-redux';

type Props = {
    dispatch: any
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

    createProviderSelectionHandler = (id: string) => {
        return (event: any) => {
            console.log(id);
            this.props.dispatch(clientConfirmReservationModalOpen());
        }
    };

    render() {
        // const providers = ...

        const items = providers.map((provider : Provider) => (
            <tr key={ provider.id } className='client-available-providers__line'>
                <td>{ provider.name }</td>
                <td>{ provider.address }</td>
                <td>{ provider.rating }</td>
                <td>***</td>
                <td>
                    <Button className='button_sm' onClick={this.createProviderSelectionHandler(provider.id)}>ORDER ></Button>
                </td>
            </tr>
        ));

        return (
            <div className='client-available-providers'>
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

export default connect()(ClientAvailableProviders);
