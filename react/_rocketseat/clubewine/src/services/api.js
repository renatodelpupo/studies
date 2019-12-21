import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/selecao-atual.json'
})

export default api;