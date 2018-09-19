import axios from 'axios';
import { FETCH_USER } from './types';

const fetchuser = () => {
  axios.get('/api/current_user')
};