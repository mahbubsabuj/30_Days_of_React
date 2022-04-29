import axios from "axios";

const fetchUserContests = async (handle) => {
  const response = await axios.get("https://codeforces.com/api/user.rating", {
    params: {
      handle: handle,
    },
  });
  return response;
};

export default fetchUserContests;