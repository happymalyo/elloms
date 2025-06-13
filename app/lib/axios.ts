import axios from "axios";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = typeof window !== 'undefined'
    //   ? window.localStorage.getItem('token')
    //   : null;

    
    config.headers.Authorization = `Bearer fdsfdxx4`;
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
