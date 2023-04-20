import React, { useState, useEffect, useRef } from 'react';
import './style.less'
import api from '../../../../api';

/**
 * Two buttons:
 * 1. Comment: unreview, click to comment
 * 2. Reviewed: have commented, can't click
 */

const Item = (props) => {

    const { data, user } = props
    const [currentState, setCurrentState] = useState(0)
    const commentContent = useRef()

    useEffect(() => {
        setCurrentState(data.reviewState)
    }, []);
    
    const handleClick = () => {
        setCurrentState(1)
    }
    
    const handleSubmit = () => {
        api.submitComment({
            userId: user.username,
            itemId: data.id,
            content: commentContent.current.value
        }).then(res => {
            if (res.data.status === 200) {
                setCurrentState(2)
            } else {
                setCurrentState(0)
            }
        })
    }
    
    const handleCancel = () => {
        setCurrentState(0)
        
    }
    
    return (
        <div className="order-item-container clear-fix">
            <div className="order-item-img float-left">
                <img src={data.img} alt="No image" />
            </div>
            <div className="order-item-review float-right">
                {
                    currentState === 0 ? <button className="btn" onClick={handleClick}>Comment</button> :
                        currentState === 1 ? '' :
                            <button className="unselected-btn btn" disabled>Reviewed</button>
                }
            </div>
            <div className="order-item-content">
                <span>Title:{data.title}</span>
                <span>Type:{data.type}</span>
                <span>Description:{data.description}</span>
                <b style={{ backgroundColor: data.specialPrice ? 'yellow' : 'none' }}>Price:{data.price}</b>
            </div>
            {
                currentState === 1?
                    <div className="review-text-container">
                        <textarea ref={commentContent} className="review-text" style={{ width: '100%', height: '80px' }}></textarea>
                        <button className="btn" onClick={handleSubmit}>Submit</button>
                        <button className="unselected-btn btn" onClick={handleCancel}>Cancel</button>
                    </div>
                        :''
            }
        </div>
    );
}

export default Item;
