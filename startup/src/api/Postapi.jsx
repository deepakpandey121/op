import axios from "axios";

const api = axios.create({
  baseURL: "https://switfi.onrender.com/",
});

export const getdata = () => {
  return api.get("/getdata");
};

export const detaildata = (id) => {
  return api.get(`/getdata/${id}`); // Replace `/getdata/${id}` with the correct API endpoint
};

