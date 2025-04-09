import axios from "axios";
const API_BASE = "http://localhost:8000";
const signUp = async (userData) => {
 const { data } = await axios.post(`${API_BASE}/api/auth/signup`, userData);
 return data;
};

const login = async (credentials) => {
 const { data } = await axios.post(`${API_BASE}/api/signin`, credentials);
 return data;
};

const getUserProfile = async (token) => {
 const { data } = await axios.get(`${API_BASE}/api/update-profile`, {
  headers: { Authorization: `Bearer ${token}` }
 });
 return data;
};

export { login, signUp, getUserProfile };
