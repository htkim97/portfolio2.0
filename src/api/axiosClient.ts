import axios from "axios";

const BASE_OPTION = {
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.REACT_APP_TEMP_BASE_URL,
};

export const axiosClient = axios.create(BASE_OPTION);
