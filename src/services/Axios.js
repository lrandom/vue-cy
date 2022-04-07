import axios from "axios";

let axiosInstance = null;
let headers = {
    'Content-Type': 'application/json'
}

function setHeaders(inputHeaders) {
    headers = inputHeaders;
}

function getHeaders() {
    return headers;
}

function getInstance() {
    if (axiosInstance != null) {
        return axiosInstance
    }
    axiosInstance = axios.create({
        baseURL: process.env.VUE_APP_BASE_API,
        headers: getHeaders()
    })
    //hook interceptor cài ở đây
    return axiosInstance;
}

function get(endpointApiUrl, payload = {}) {
    return getInstance().get(endpointApiUrl, {
        params: payload
    })
}

function post(endpointApiUrl, payload = {}) {
    return getInstance().post(endpointApiUrl, payload)
}

function put(endpointApiUrl, payload = {}) {
    return getInstance().put(endpointApiUrl, payload);
}

function del(endpointApiUrl, payload = {}) {
    return getInstance().delete(endpointApiUrl, payload)
}

export const Axios = {
    axiosInstance,
    getHeaders,
    setHeaders,
    get,
    post,
    put,
    del
}
