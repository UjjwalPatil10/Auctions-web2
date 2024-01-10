import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  });

  axiosInstance.interceptors.request.use(
  
    (config) => {
      
      const token = localStorage.getItem('jwt-token-storage'); // Assuming you store the token in localStorage
      if (token) {
        config.default.headers.Authorization = `Bearer ${token}`;
      }
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    });

  export const getUsers = () => {
    return axiosInstance.get('api/v1/user/all',{ headers: {
      'Content-Type' : `application/json`,
      'access-control-allow-origin' : '*',
      'access-control-allow-methods':'get,put,post,delete,patch,options',
      
      }});

  };
  
  export const deleteUser = (userId) => {
    return axiosInstance.delete(`/user/${userId}`);
  };

  export default axiosInstance;