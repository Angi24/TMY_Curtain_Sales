import React from 'react';
import Item from './Item';

const OrderListView = (props) => {
    return (
        <div>
            {
                props.data.map((data,index) => {
                    return <Item key={index} data={data} user={props.user} />
                })
            }
        </div>
    );
}

export default OrderListView;
