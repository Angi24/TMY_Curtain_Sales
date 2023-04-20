import React from 'react';
import './style.less'

const UserInfo = (props) => {

    const { user, city } = props

    return (
        <div className="userinfo-container">
            <p>
                <i className="icon-user"></i>
                <span>{user.username}</span>
            </p>
            <p>
                <i className="icon-map=marker"></i>
                <span>{city.cityName}</span>
            </p>
        </div>
    );
}

export default UserInfo;
