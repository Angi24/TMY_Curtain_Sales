import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';


const RegisterView = (props) => {

    const [userInfo, setUserInfo] = useState({ username: '', email: '', password: '', passwordConfirm: '' })
    const [errMsg, setErrMsg] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrMsg([])
        api.register({
            ...userInfo
        }).then(res => {
            if (res.data.status === 400) {
                return setErrMsg(res.data.msg)
            }
            if (res.data.status === 200) {
                // Register successful
                props.onRegisterEvent(res.data.userData)
            } else {
                console.log('Register unsuccessful')
            }
            // Back to previous page
            navigate(-1)
        })
    }
            
    // console.log('@@@',errMsg)
    const handleChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.id]: event.target.value
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" isInvalid={errMsg[0]==='email'} onChange={handleChange} />
                <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                    {errMsg[0] === 'email' && errMsg[1]}
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" isInvalid={errMsg[0]==='username'} onChange={handleChange} />
                <Form.Text className="text-muted">
                    {/* Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji. */}
                    {errMsg[0] === 'username' && errMsg[1]}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" isInvalid={errMsg[0]==='password'} onChange={handleChange} />
                <Form.Text className="text-muted">
                    {errMsg[0] === 'password' && errMsg[1]}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="passwordConfirm">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" isInvalid={errMsg[0]==='passwordConfirm'} onChange={handleChange} />
                <Form.Text className="text-muted">
                    {errMsg[0] === 'passwordConfirm' && errMsg[1]}
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign up
            </Button>
        </Form>
    );
}

export default RegisterView;
