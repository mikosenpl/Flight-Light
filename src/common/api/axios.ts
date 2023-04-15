import { default as ax } from 'axios';

const axiosInstance = ax.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axiosInstance;
