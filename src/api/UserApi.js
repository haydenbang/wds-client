import axios from 'axios';
import { DEV_WAS_DOMAIN } from '../shared/Contants';

axios.defaults.baseURL = `http://${DEV_WAS_DOMAIN}/api/v1`;

export const getUsers = () => axios.get('/users');
