import store from '../redux/store';
import * as loginActions from '../redux/actions/login';
import decode from 'jwt-decode';

/**
 * Initialize login information
 * Read from the local, and determine whether there is user information locally
 */
const token = localStorage.getItem('userLocalInfo')
if (token) {
    try {
        store.dispatch(loginActions.login(decode(token)))
    } catch {
        localStorage.removeItem('userLocalInfo');
        window.location.href = '/login';
    }
}
