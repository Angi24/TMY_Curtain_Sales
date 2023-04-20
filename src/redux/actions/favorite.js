import { FAVORITE, UNFAVORITE } from '../constants';

export const favorite = id => ({ type: FAVORITE, id })
export const unfavorite = id => ({ type: UNFAVORITE, id })

