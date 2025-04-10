
import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://round-3-travel.digital-vision-solutions.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseApi;