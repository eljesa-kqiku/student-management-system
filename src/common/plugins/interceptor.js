import Axios from 'axios'
import { readFromLocalStorage } from "../services/local-storage-service";

Axios.defaults.headers.common.Accept = 'application/json';

// Add a response interceptor
Axios.interceptors.response.use((response) => {
  // Do something with response data

  return response;
}, function (error) {
  // Do something with response error
  const response = error.response;

  return Promise.reject(error);
});

// Add a request interceptor
Axios.interceptors.request.use((config) => {
  // Do something before request is sent
  //   config.headers['Authorization'] = tokenObj.Authorization
  config.headers = {
    accept: 'application/json',
  }
  let token = readFromLocalStorage('token')
  if(token){
    config.headers.authorization = token;
  }
  return config;
}, function (error) {
  // Do something with request error

  return Promise.reject(error);
});


