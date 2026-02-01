import axios from "axios";

const API_BASE = "https://learn.codeit.kr/api/link-service";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
