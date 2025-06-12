import axios from "axios";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
if (typeof window !== "undefined") {
  axiosInstance.interceptors.request.use(
    (config) => {
      // const token = typeof window !== 'undefined'
      //   ? window.localStorage.getItem('token')
      //   : null;
      const token = process.env.API_TOKEN || null;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export default axiosInstance;
