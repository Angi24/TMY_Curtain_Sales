import React from 'react';
import './style.less'

const HomeProView = (props) => {
    return (
        <div className="hotproduct">
            <h3>{props.title}</h3>
            <div className="hot-container">
                <ul className="clear-fix">
                    {
                        props.data.map((data) => {
                            return (
                                <li key={data.id}>
                                    <a href={data.link}>
                                        <img src={data.img} alt="" />
                                        <span>{data.title}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default HomeProView;
