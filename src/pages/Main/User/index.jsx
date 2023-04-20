import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../../api';
import FooterNav from '../../../components/FooterNav';

const User = () => {

    const { isAuth, user } = useSelector(state => state.login)
    const navigate = useNavigate()
        
    useEffect(() => {
        if (isAuth === false) {
            console.log('Please login')
            navigate('/login')
            return
        }
        api.user().then(
            res => {
                console.log('@@@',res)
            }
        )
    }, [isAuth]);

    return (
        <div>
            <h1>{user.username}</h1>
            <FooterNav/>
        </div>
    )
}

export default User