import React from 'react';
import './style.less'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as loginActions from '../../redux/actions/login';
import SearchInput from '../SearchInput';

const HeaderNav = (props) => {

    const login = useSelector(state => state.login)
    const dispatch = useDispatch()

    const handleLogout=() => {
        dispatch(loginActions.logout())
        localStorage.removeItem('userLocalInfo')
    }

    return (
        <div id="home-header" className="clear-fix">
            <div className="home-header-left float-left">
                <Link to='/city'>
                    <span>{props.cityName}</span>
                    <i className="icon-angle-down"></i>
                </Link>
            </div>
            <div className="home-header-middle">
                <div className="search-container">
                    <i className="icon-search"></i>
                    <SearchInput />
                </div>
            </div>
            <div className="home-header-right float-right">
                {
                    login.isAuth
                        ?
                        <div>
                            <Link to='/user'>
                                <i className="iconfont icon-car">User</i>
                            </Link>
                            <a href="/home" onClick={handleLogout}>Logout</a>
                            <Link to='/order'>
                                <i className="iconfont icon-car">Order</i>
                            </Link>
                        </div>
                        :
                        <div>
                            <Link to='/register'>
                                <i className="iconfont icon-car">Register</i>
                            </Link>
                            <Link to='/login'>
                                <i className="iconfont icon-car">Login</i>
                            </Link>
                            <Link to='/order'>
                                <i className="iconfont icon-car">Order</i>
                            </Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default HeaderNav