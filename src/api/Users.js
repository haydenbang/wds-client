import axios from 'axios';

axios.defaults.baseURL = 'http://13.124.207.31:5080/api/v1';

export const getUsers = () => axios.get('/users');
