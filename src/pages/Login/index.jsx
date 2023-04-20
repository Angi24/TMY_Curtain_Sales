import React from 'react';
import LoginView from './LoginView';
import { useDispatch } from 'react-redux';
import * as loginActions from '../../redux/actions/login';
import decode from 'jwt-decode';

const Login = () => {

    const dispatch = useDispatch()

    const handleLogin = (token) => {
        // Write to redux
        dispatch(loginActions.login(decode(token)))
        // Write to local
        localStorage.setItem('userLocalInfo', token)
    }
    return (
        <div>
            <LoginView onLoginEvent={handleLogin} />
        </div>
    );
}

export default Login;
