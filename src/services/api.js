import axios from "axios";
import useAuthStore from "../stores/auth";

const api = axios.create({ baseURL: "http://localhost:8000" });

api.interceptors.request.use(
  (req) => {
    const { token } = useAuthStore.getState();

    if (!req.headers.Authorization && token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },

  (error) => Promise.reject(error)
);

export default api;
