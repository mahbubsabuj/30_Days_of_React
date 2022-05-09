import axios from "axios";

const wikipediaAPI = async (term) => {
  //action=query&list=search&srwhat=text&srsearch=hot&format=json
  const response = await axios
    .get("https://www.mediawiki.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        srwhat: "text",
        srsearch: term,
        format: "json",
        origin: "*",
        srlimit: 100,
      },
    })
    .catch(() => false);
  if (response) {
    return response.data.query.search;
  }
};

export default wikipediaAPI;
