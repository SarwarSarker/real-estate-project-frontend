import axios from "axios";

const url = "https://findestate.herokuapp.com/api/user";

// Register user
const register = async (userData) => {
  const response = await axios.post(`${url}/signup`, userData, {
    "content-type": "application/json",
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${url}/login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
