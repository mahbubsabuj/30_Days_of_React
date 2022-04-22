import axios from "axios";
const API_KEY = "AIzaSyDU9upSMDbh72nhXSCNok_SuLznBd-l2IY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 5,
    key: API_KEY,
  },
});