import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '57457980-e166dd9b1d2133c9afd3a23b8';

export function getImagesByQuery(query) {
  return axios.get(API_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(response => response.data);
}