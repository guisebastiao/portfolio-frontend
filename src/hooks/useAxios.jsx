import axios from "axios";

export default axios.create({
  baseURL: "https://portfolio-gui-api.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});
