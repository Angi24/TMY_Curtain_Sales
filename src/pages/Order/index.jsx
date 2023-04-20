import React, { useEffect } from 'react';
import OrderHeader from '../../components/PubHeader';
import UserInfo from './UserInfo';
import OrderList from './OrderList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Order = () => {

    const navigate = useNavigate()
    const city = useSelector(state => state.city)
    const user = useSelector(state => state.login)

    useEffect(() => {
        if (!user.isAuth) {
            navigate('/login')
        }
    },[])
    
    return (
        <div>
            <OrderHeader title={'Order Review'} />
            <UserInfo city={city} user={user.user} />
            <OrderList user={user.user} />
        </div>
    );
}

export default Order;
