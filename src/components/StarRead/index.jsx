import React from 'react';
import { Rate } from 'antd'

const StarRead = (props) => {

    const starNum = props.num
    
    return <Rate disabled value={starNum} />
}

export default StarRead;
