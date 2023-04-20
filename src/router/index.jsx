import { Navigate } from 'react-router-dom';
import Home from '../pages/Main/Home';
import LifeService from '../pages/Main/LifeService';
import Shop from '../pages/Main/Shop';
import User from '../pages/Main/User';
import City from '../pages/City';
import Search from '../pages/Search';
import Details from '../pages/Details';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Order from '../pages/Order';

const routes = [
    {
        path: '/home',
        element: < Home />
    },
    {
        path: '/life',
        element: < LifeService />
    },
    {
        path: '/shop',
        element: < Shop />
    },
    {
        path: '/user',
        element: < User />
    },
    {
        path: '/city',
        element: < City />
    },
    {
        path: '/details/:itemId',
        element: < Details />
    },
    {
        path: '/search/:keywords',
        element: < Search />
    },
    {
        path: '/login',
        element: < Login />
    },
    {
        path: '/register',
        element: < Register />
    },
    {
        path: '/order',
        element: < Order />
    },
    {
        path: '/',
        element: < Navigate to="/home" />
    }
]

export default routes