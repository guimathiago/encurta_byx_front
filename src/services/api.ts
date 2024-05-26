import axios from 'axios';

// Configura a instância base do Axios
const api = axios.create({
  baseURL: 'https://mke6jya796.execute-api.sa-east-1.amazonaws.com/dev', // URL base do API Gateway
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptador para requisições
api.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

// Interceptador para respostas
api.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
}, error => {
  console.log('Error:', error.response);
  return Promise.reject(error);
});

export default api;
