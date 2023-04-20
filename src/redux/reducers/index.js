import { combineReducers } from 'redux'
import city from './city'
import search from './search';
import login from './login';
import favorite from './favorite';
import register from './register';

export default combineReducers({
    city,
    search,
    login,
    favorite,
    register
})