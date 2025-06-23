import axios from "axios";

const api = axios.create({
  baseURL: "https://switfi.onrender.com/",
});

export const getdata = () => {
  return api.get("/getdata");
};


