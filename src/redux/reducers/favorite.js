import { FAVORITE, UNFAVORITE } from '../constants';
import findIndex from 'lodash/findIndex';

const defaultState = []

const favorite = (state = defaultState, action) => {
    const { type, id } = action
    switch (type) {
        case FAVORITE:
            return [...state, id]
        case UNFAVORITE:
            const currentIndex = findIndex(state, id => id)
            return [
                ...state.slice(0, currentIndex),
                ...state.slice(currentIndex + 1)
            ]
        default:
            return state
    }
}

export default favorite