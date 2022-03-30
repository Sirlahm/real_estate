import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    
  const {data} = await axios.get(url, {
      
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "c8b7969d0dmsh7882208ce7bc589p1f159bjsn79bc2487dc8d",
    },
  });

  return data
};

