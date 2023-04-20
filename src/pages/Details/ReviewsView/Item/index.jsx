import React from 'react';
import './style.less'
import Star from '../../../../components/StarRead';

const Item = (props) => {

    const reviewData = props.reviewData
    
    return (
        <div className="review-item">
            <h3>
                <i className="icofont-ui-user"></i>
                {reviewData.username}
            </h3>
            <Star num={reviewData.star} />
            <p>{reviewData.review}</p>
        </div>
    );
}

export default Item;
