import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1', // Assurez-vous que cette URL correspond à votre backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  login(credentials) {
    return apiClient.post('/auth/login', credentials);
  },
  register(credentials) {
    return apiClient.post('/auth/signup', credentials);
  },
  logout() {
    return apiClient.post('/auth/logout'); // Si cette route est disponible dans votre backend
  },
};
