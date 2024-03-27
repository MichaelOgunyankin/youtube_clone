import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
      // 'X-RapidAPI-Key': process.env.REACT_AP_RAPID_API_KEY,
      'X-RapidAPI-Key': 'f3ea21f8a5msh35acd73bc07fc05p14bbd8jsn7f76d7703be0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }