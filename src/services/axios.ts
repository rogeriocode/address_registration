import axios from 'axios';

const baseURL = 'https://viacep.com.br';

const api = axios.create({ baseURL });

export { api, baseURL };
