import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://disease.sh/v3/covid-19/',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store',
  },
  mode: 'no-cors',
});

export default instance;
