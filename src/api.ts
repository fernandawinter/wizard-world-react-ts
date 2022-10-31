import axios from 'axios';

const baseUrl = 'https://hp-api.herokuapp.com/api';

export async function fetchCharacters() {
  const endpoint = '/characters';
  const url = baseUrl + endpoint;
  const response: any = await axios.get(url);
  console.log(response);
  return response.data
}