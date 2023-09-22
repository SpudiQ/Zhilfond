import axios from "axios";

const axiosIns = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: { // that will be easier when you have a setup with headers
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
});

axiosIns.interceptors.response.use(
  (response) => response,
  async (error) => {
    // for further interactions, interceptors are useful for auth or for catching other errors :)

    return Promise.reject(error);
  }
);

export default axiosIns;