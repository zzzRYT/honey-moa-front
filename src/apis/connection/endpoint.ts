import { GetAllUsersReturn } from './type';
import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

//email을 통한 유저 검색 api
export async function getUserEmail(email: string): Promise<GetAllUsersReturn> {
  const url = !email ? '/users' : `/users?email=${email}`;
  const response = await instance.get(url);

  return response.data;
}
