import axios from "axios";

export default axios.create({
  baseURL: "https://portfolio-backend-weld-nine.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});
