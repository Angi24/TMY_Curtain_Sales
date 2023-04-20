import React from 'react';
import RegisterView from './RegisterView';
import { useDispatch } from 'react-redux';
import * as registerActions from '../../redux/actions/register';

const Register = () => {

    const dispatch = useDispatch()

    const handleRegister = (userData) => {
        // Write to redux
        dispatch(registerActions.register(userData))
    }

    return (
        <div>
            <RegisterView onRegisterEvent={handleRegister}/>
        </div>
    );
}

export default Register;
