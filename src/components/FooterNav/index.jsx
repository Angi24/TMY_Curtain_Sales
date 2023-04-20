import React, { useState } from 'react';
import './style.less'
import { NavLink } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const FooterNav = () => {
    const [titles] = useState([
        {id:'001',title:'Home',path:'/home'},
        {id:'002',title:'LifeService',path:'/life'},
        {id:'003',title:'Shop',path:'/shop'},
        {id:'004',title:'User',path:'/user'}
    ])
    return (
        <div className="nav-footer">
            <ul className="clear-fix">
                {
                    titles.map((title) => {
                        return (
                            <li key={title.id}>
                                <NavLink to={title.path}>
                                    <Space>
                                        <HomeOutlined style={{ fontSize: '20px', color: '#08c' }}/>
                                        {title.title}
                                    </Space>
                                </NavLink>
                            </li>
                        )
                    })
                }
                {/* <li>
                    <NavLink to='/'>
                        <i className=""></i>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/life'>
                        <i className=""></i>
                        LifeService
                    </NavLink>
                </li> */}
            </ul>
        </div>
    )
}

export default FooterNav