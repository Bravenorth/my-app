import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1', // Assurez-vous que cette URL correspond à votre backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getItems() {
    return apiClient.get('/items');
  },
  login(credentials) {
    return apiClient.post('/auth/login', credentials); // Route correcte pour la connexion
  },
  register(credentials) {
    return apiClient.post('/auth/signup', credentials); // Route correcte pour l'inscription
  },
};
