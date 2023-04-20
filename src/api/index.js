import axios from '../utils/request'

/*
    Path
*/
const base = {
    baseUrl: 'http://localhost:5566',
    homenewpro: '/api/home/newpro',
    homehotpro: '/api/home/hotpro',
    search: '/api/search',
    details: '/api/details',
    login: '/api/login',
    register: '/api/register',
    reviews: '/api/reviews',
    orders: '/api/order/review',
    user: '/api/user',
    submitComment: '/api/order/submit/comment'
}

/*
    Request method
*/
const api = {
    /**
     * Get hot products
     */
    getHomeNewPro(params) {
        return axios.get(base.baseUrl + base.homenewpro, { params })
    },
    getHomeHotPro(params) {
        return axios.get(base.baseUrl + base.homehotpro, { params })
    },
    /**
     * Search
     */
    search(params) {
        return axios.get(base.baseUrl + base.search, { params })
    },
    /**
     * Details page
    */
    details(params) {
        return axios.get(base.baseUrl + base.details, { params })
    },
    /**
     * Login
    */
    login(params) {
        return axios.post(base.baseUrl + base.login, params)
    },
    /**
     * Register
    */
    register(params) {
        return axios.post(base.baseUrl + base.register, params)
    },
    /**
     * User
    */
    user() {
        return axios.post(base.baseUrl + base.user)
    },
    /**
     * Item reviews
     */
    reviews(params) {
        console.log(params)
        return axios.get(base.baseUrl + base.reviews, { params })
    },
    /**
     * Order reviews
    */
    orderReviews(params) {
        return axios.get(base.baseUrl + base.orders, { params })
    },
    /**
     * Submit comment
    */
    submitComment(params) {
        return axios.post(base.baseUrl + base.submitComment, params)
    }
}

export default api