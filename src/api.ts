import axios from 'axios';
import vernonDursley from './Vernon-Dursley.jpeg'

const baseUrl = 'https://harry-potter-api-en.onrender.com';

export async function fetchCharacters() {
  const endpoint = '/characters';
  const url = baseUrl + endpoint;
  const response: any = await axios.get(url);
  // const personagens = response.data.map((personagem:any) => {
  //   if (!personagem.image) {
  //     personagem.image = vernonDursley;
  //   }
  // })
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