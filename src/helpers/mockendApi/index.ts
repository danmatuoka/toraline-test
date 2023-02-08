import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mockend.com/juunegreiros/BE-test-api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
