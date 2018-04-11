import React from 'react';
import Input from '../../../common/components/input/input';
import Button from '../../../common/components/button/button';
import './login.css';
import { connect } from "react-redux";
import { loginFormChange } from "../../actions/sync";
import { loginRequest } from "../../actions/async";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.submit = this.submit.bind(this);
    }

    emailChangeHandler(e) {
        this.props.dispatch(loginFormChange({
            email: e.currentTarget.value
        }));
    }

    passwordChangeHandler(e) {
        this.props.dispatch(loginFormChange({
            password: e.currentTarget.value
        }));
    }

    submit(e) {
        e.preventDefault();
        const { email, password, dispatch } = this.props;
        console.log(this.props);
        dispatch(loginRequest({
                email,
                password
        }));
    }

    render() {
        const { email, password } = this.props;
        return (
            <div className='login'>
                <div className='login__title'>
                    <h1>LOG IN</h1>
                    <p>
                        Enter your email and password.
                    </p>
                </div>
                <form className='login__form' role='form' onSubmit={this.submit}>
                    <fieldset>
                        <Input value={email} type='email' label='Email' onChange={this.emailChangeHandler}/>
                        <Input value={password} type='password' label='Password' onChange={this.passwordChangeHandler}/>
                        <Button className='login__submit-button' type='submit'>ENTER</Button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.common.loginForm.isFetching,
        email: state.common.loginForm.email,
        password: state.common.loginForm.password,
    }
}

export default connect(mapStateToProps)(Login);
