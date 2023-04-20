import React, { useState } from 'react';
import './style.less'
import api from '../../../api';
import validator from '../../../utils/validator';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

const LoginView = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleOnSubmit = (event) => {
        event.preventDefault()

        var { isValid, errors } = validator({ username, password })

        if (!isValid) {
            api.login({
                username,
                password
            }).then(res => {
                console.log(res.data)
                if (res.data.status === 200) {
                    setErrors({})
                    // Login successful
                    props.onLoginEvent(res.data.token)
                    // Back to previous page
                    navigate(-1)
                } else {
                    console.log('Login unsuccessful')
                }
            })
        } else {
            setErrors(errors)
        }
    }

    const handleChange = (event) => {
        if (event.target.name === 'username'){
            setUsername(event.target.value)    
        }
        if (event.target.name === 'password'){
            setPassword(event.target.value)    
        }
    }

    return (
        <div id="login-container">
            <form onSubmit={handleOnSubmit}>
                <div className={classnames('input-container phone-container',{'input-container-error':errors.username})}>
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        name="username"
                        placeholder='Username/Phone number'
                        value={username}
                        onChange={handleChange}
                        />
                </div>
                <div className={classnames('input-container password-container',{'input-container-error':errors.password})}>
                    <i className="icon-key"></i>
                    <button>Send verification code</button>
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter password'
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn-login" >Sign in</button>
            </form>
        </div>
    );
}

export default LoginView;
