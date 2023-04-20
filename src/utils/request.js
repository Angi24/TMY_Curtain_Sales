import axios from 'axios'
import qs from 'querystring'

/*
    How to handle failure
    status: status code
    info: information
*/
const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log('Bad Request')
            break;
        case 401:
            console.log('Unauthorized')
            break;
        case 403:
            console.log('Forbidden')
            break;
        case 404:
            console.log('Not Found')
            break;
        case 500:
            console.log('Internal Server Error')
            break;
        case 502:
            console.log('Bad Gateway')
            break;
        default:
            console.log(info)
            break;
    }
}

/*
    Create an axios instance object
*/
const instance = axios.create({
    timeout: 5000
})

/*
    Processor interception
*/

/*
    Request interception
*/
instance.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }

        const passURL = ['/api/login', '/api/register'];
        if (passURL.includes(config.url)) return config;

        const tk = localStorage.getItem('userLocalInfo');
        if (tk) {
            config.headers.Authorization = 'Bearer ' + tk;
        } else {
            delete config.headers.Authorization;
        }
        return config
    },
    error => Promise.reject(error)
)

/*
    Response interception
*/
instance.interceptors.response.use(
    response => {
        if (response.data.status === 400 && response.data.msg === "TOKEN ERROR") {
            window.location.href = '/login';
        }
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
    },
    error => {
        const { response } = error
        errorHandle(response.status.response.info)
    }
)

export default instance