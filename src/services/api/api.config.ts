import axios from 'axios';

export const api = axios.create({ baseURL: 'https://recipe-mobile.store' });

api.interceptors.request.use(
    (config: any) => {
        config.headers.Accept = 'application/json';
        return config;
    },
    error => Promise.reject(error),
);