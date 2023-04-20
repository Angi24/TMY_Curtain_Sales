import React from 'react';
import './style.less'
import Item from './Item';

const ReviewsView = (props) => {

    const reviewData = props.reviewData
    
    return (
        <div className="review-list">
            <ul>
                {
                    reviewData.map((data, index) => {
                        return <Item key={index} reviewData={data} />
                    })
                }
            </ul>
        </div>
    );
}

export default ReviewsView;
