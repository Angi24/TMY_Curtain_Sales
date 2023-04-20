import React, { useState, useEffect } from 'react';
import api from '../../../api';
import OrderListView from '../OrderListView';

const OrderList = (props) => {

    const [orderListData, setOrderListData] = useState([])

    useEffect(() => {
        api.orderReviews({
            userId:props.user.username
        }).then(res => {
            if (res.data.status === 200) {
                setOrderListData(res.data.result)
            }
        })
    }, [props.user.username])
    
    return (
        <div>
            {
                orderListData.length > 0 ? <OrderListView data={orderListData} user={props.user} /> : <div>Waiting data...</div>
            }
            
        </div>
    );
}

export default OrderList;
