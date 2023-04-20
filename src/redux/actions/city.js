import { INIT_CITY, CHANGE_CITY } from "../constants"

export const initCity = cityName => ({ type: INIT_CITY, cityName })
export const changeCity = cityName => ({ type: CHANGE_CITY, cityName })