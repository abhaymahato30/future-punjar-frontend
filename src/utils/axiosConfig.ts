import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://future-panjar-server.onrender.com",
  withCredentials: false, // Set to true only if using cookies
});

export default axiosInstance;
