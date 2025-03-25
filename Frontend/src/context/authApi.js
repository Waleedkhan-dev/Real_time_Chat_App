import axios from "axios";

const signUp = async (userData) => {
 const { data } = await axios.post("/api/auth", userData);
 return data;
};

const login = async (credentials) => {
 const { data } = await axios.post("/api/signin", credentials);
 return data;
};

const getUserProfile = async (token) => {
 const { data } = await axios.get("/api/update-profile", {
  headers: { Authorization: `Bearer ${token}` }
 });
 return data;
};

export { login, signUp, getUserProfile };
