import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Remplacez par l'URL de votre backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getItems() {
    return apiClient.get('/items');
  },
  login(credentials) {
    return apiClient.post('/users/login', credentials); // Assurez-vous que les routes correspondent à votre backend
  },
  register(credentials) {
    return apiClient.post('/users/register', credentials); // Assurez-vous que les routes correspondent à votre backend
  },
};
