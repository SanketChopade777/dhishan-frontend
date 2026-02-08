import axios from "axios";

// Production API URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 second timeout
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timeout - Server might be sleeping");
      alert("Server is waking up. Please try again in 30 seconds.");
    } else if (!error.response) {
      console.error("Network error - Check internet connection");
      alert("Cannot connect to server. Please check your internet.");
    }
    return Promise.reject(error);
  },
);

export const registerForEvent = (data) =>
  api.post("/registration/register", data);
export const loginAdmin = (data) => api.post("/auth/login", data);
export const getDashboardData = () => api.get("/auth/dashboard");
export const getAllRegistrations = () => api.get("/registration/all");
export const exportRegistrations = () =>
  api.get("/registration/export", {
    responseType: "blob",
  });

export default api;
