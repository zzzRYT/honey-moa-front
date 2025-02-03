import { instanceToken } from '../axiosInstance';
import { GetMyInfoReturn } from './type';

//내 정보 조회
export async function getMyInfo(): Promise<GetMyInfoReturn> {
  const response = await instanceToken.get('/users/me');

  return response.data;
}
