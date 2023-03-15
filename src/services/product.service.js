import axios from "axios";

const API_URL = "http://localhost:3000/api/v1.0/shopping/";

const getAllProduct = () => {
  return axios.get(API_URL + "all");
};

const getProductByName = () => {
  return axios.get(API_URL + "products/search/{productName}");
};

const addProduct = () => {
  return axios.post(API_URL + "add");
};

const updateProductById = () => {
  return axios.put(API_URL + "update/{id}");
};

const deleteProductById = () => {
    return axios.delete(API_URL + "update/{id}");
  };

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}

export default UserService;