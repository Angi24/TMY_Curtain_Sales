import { REGISTER } from '../constants';

const defaultState = {
    userData: {
        email: '',
        username: '',
        password: ''
    }
}

const register = (state = defaultState, action) => {
    const { type, userData } = action
    switch (type) {
        case REGISTER:
            return { userData }
        default:
            return state
    }

}

export default register