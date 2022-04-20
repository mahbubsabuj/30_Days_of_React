import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2ecc97493103fc7087bb2ffa9841d19ec96a3a7b25e047e2b8f3829c293cc424",
  },
});
