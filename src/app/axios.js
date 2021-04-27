import axios from "axios";
import { useDispatch } from 'react-redux';
import { isUserAuthorized } from '../features/user/userSlice';

const instance = axios.create({
  baseURL: "/api"
});

export default instance;