import { UPDATE_SEARCH } from '../constants';

const defaultState = {
    searchContent: ''
}

const search = (state = defaultState, action) => {
    const { type, searchContent } = action
    switch (type) {
        case UPDATE_SEARCH:
            return { searchContent }
        default:
            return state;
    }
}

export default search