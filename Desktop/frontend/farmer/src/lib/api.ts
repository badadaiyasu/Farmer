// src/lib/api.ts
import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios";

// Prefer /api when backend uses a router prefix (Django REST, etc.)
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Request Interceptor
 * - Automatically attach access token if it exists
 */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/**
 * Response Interceptor
 * - Handle 401 Unauthorized globally
 * - Fully typed (no `any`)
 */
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<{ detail?: string }>) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");

      // Enable later when auth flow is ready
      // window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
