import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getItems() {
    return apiClient.get('/items');
  },
  login(credentials) {
    return apiClient.post('/login', credentials);
  },
  register(credentials) {
    return apiClient.post('/register', credentials);
  },
};
