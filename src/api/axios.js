import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  //  Accept: 'application/json',
  withCredentials: true,
});

const aiApiClient = axios.create({
  baseURL: process.env.AI_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export {api, aiApiClient};
