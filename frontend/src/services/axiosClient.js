import axios from "axios";

/**
 * Frontend API Configuration
 * Centralized axios client with interceptors for authentication
 */

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Request Interceptor
 * Attach auth token to every request
 */
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * Response Interceptor
 * Handle responses and errors globally
 */
axiosClient.interceptors.response.use(
  (response) => response.data, // Return only the data part
  (error) => {
    // Handle 401: Unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    // Return structured error response
    return Promise.reject(error.response?.data || error);
  },
);

export default axiosClient;
