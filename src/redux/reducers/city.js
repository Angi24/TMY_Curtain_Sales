import { INIT_CITY, CHANGE_CITY } from "../constants"

const defaultState = {
    cityName: 'Montreal'
}

const city = (state = defaultState, action) => {
    const { type, cityName } = action
    switch (type) {
        case INIT_CITY:
            return { cityName }
        case CHANGE_CITY:
            return { cityName }
        default:
            return state;
    }
}

export default city