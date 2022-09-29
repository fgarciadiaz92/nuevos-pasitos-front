import axios from "axios";
const API = "http://127.0.0.1:8000/api";

export default {
  get(url) {
    return axios.get(API + url);
  },
};
