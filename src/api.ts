import axios from 'axios';

const baseUrl = 'https://harry-potter-api-en.onrender.com';

export async function fetchCharacters() {
  const endpoint = '/characters';
  const url = baseUrl + endpoint;
  const response: any = await axios.get(url);
  return response.data
}

export async function fetchHouses() {
  const endpoint = '/houses';
  const url = baseUrl + endpoint;
  const response: any = await axios.get(url);
  console.log(response);
  return response.data
}

export async function fetchSpells() {
  const endpoint = '/spells';
  const url = baseUrl + endpoint;
  const response: any = await axios.get(url);
  console.log(response);
  return response.data
}