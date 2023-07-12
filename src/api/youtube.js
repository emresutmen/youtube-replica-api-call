import axios from "axios";

const KEY = "AIzaSyDuDJwiUg_WIB_obqQl1L_HomI2CijhWtc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
  headers: {},
});
