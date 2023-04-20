import React, { useState, useEffect } from 'react';
import ReviewsView from '../ReviewsView';
import api from '../../../api';
import PullupLoading from '../../../components/PullupLoading';

const Reviews = (props) => {
    
    const [review, setReview] = useState([])
    const [hasMore, setHasMore] = useState(false)
    
    function http() {
        api.reviews({
            itemId: props.itemId
        }).then(res => {
            if (res.data.status === 200) {
                setReview([...review, ...res.data.result.data])
                setHasMore(res.data.result.hasMore)
            }    
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        http()
    
        // When memory leak, reset data
        return () => {
            setReview([])
            setHasMore(false)
        }
    }, [props.itemId])

    const handlePullupLoading = () => {
        http()
    }

    return (
        <div>
            {
                review.length > 0 ? <ReviewsView reviewData={review} /> : <div>Waiting data...</div>
            }
            {
                hasMore ? <PullupLoading onPullupLoading={handlePullupLoading} /> : <div>No data</div>
            }
        </div>
    )
}

export default Reviews;
