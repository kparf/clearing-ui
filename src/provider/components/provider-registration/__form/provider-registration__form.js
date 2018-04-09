import React from 'react';
import './provider-registration__form.css';
import Input from '../../../../common/components/input/input';
import TextArea from '../../../../common/components/textarea/textarea';
import Button from '../../../../common/components/button/button';
import ProviderRegistration__Services from '../__services/provider-registration__services';

class ProviderRegistration__Form extends React.Component {

    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.emailInput = React.createRef();
        this.nameInput = React.createRef();
        this.addressInput = React.createRef();
        this.descriptionInput = React.createRef();
        this.passwordInput = React.createRef();
        this.repeatPasswordInput = React.createRef();

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        const { onSubmit } = this.props;
        console.log(this.form.current.value);
        onSubmit(e, {
            email: this.emailInput.current.value,
            name: this.nameInput.current.value,
            address: this.addressInput.current.value,
            description: this.descriptionInput.current.value,
            password: this.passwordInput.current.value,
            repeatPassword: this.repeatPasswordInput.current.value
        });
    }

    render() {
        const { services, onSubmit } = this.props;
        return (
            <form role="form" className='provider-registration__form' ref={this.form} onSubmit={this.submitHandler}>
                <fieldset>
                    <Input label='Logo' type='file'/>
                    <Input label='Email' type='email' inputRef={this.emailInput}/>
                    <Input label='Name' inputRef={this.nameInput}/>
                    <Input label='Address' inputRef={this.addressInput}/>
                    <TextArea label='Description' inputRef={this.descriptionInput}/>

                    <ProviderRegistration__Services label='Services' services={services}/>

                    <Input label='Password' type='password' inputRef={this.passwordInput}/>
                    <Input label='Repeat Password' type='password' inputRef={this.repeatPasswordInput}/>
                    <Button type='submit'>REGISTER</Button>
                </fieldset>
            </form>
        )
    }
}

export default ProviderRegistration__Form;
