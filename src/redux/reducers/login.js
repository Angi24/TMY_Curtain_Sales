import { LOGIN, LOGOUT } from '../constants';
import isEmpty from 'lodash/isEmpty';

const defaultState = {
    isAuth: false,
    user: {}
}

const login = (state = defaultState, action) => {
    const { type, user } = action
    switch (type) {
        case LOGIN:
            return {
                isAuth: !isEmpty(user),
                user
            }
        case LOGOUT:
            return {
                isAuth: false,
                user: {}
            }
        default:
            return state
    }

}

export default login