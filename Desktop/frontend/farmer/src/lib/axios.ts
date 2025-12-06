// src/lib/axios.ts
import Axios from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000', // your Django backend
  withCredentials: true, // important for JWT or session cookies
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Optional: Add auth token automatically if you use JWT in localStorage
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { axios };