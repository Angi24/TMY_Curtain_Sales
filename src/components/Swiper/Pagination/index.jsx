import React from 'react';
import Classnames from 'classnames';
import './style.less'

const Pagination = (props) => {
    let arr = new Array(props.len).fill(1)
    let currentIndex = props.currentIndex
    return (
        <div className="swiper-pagination">
            <ul>
                {
                    arr.map((len,index) => {
                        return <li key={index} className={Classnames({ 'selected': currentIndex === index })} ></li>
                    })
                }
            </ul>
        </div>
    );
}

export default Pagination;
