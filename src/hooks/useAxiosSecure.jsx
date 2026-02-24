import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'https://career-code-p2.vercel.app'
})

const useAxiosSecure = () => {
    const { user, signOutUser } = useAuth();

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    });

    // response interceptors
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        console.log(error);
        if (error.status === 401 || error.status === 403) {
            // console.log('log out the user for 401');
            signOutUser()
                .then(() => {
                    console.log('sign out user for status code 401');
                })
                .catch(err => {
                    console.log(err);
                })
        }
        console.log('error in interceptor', error);
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;