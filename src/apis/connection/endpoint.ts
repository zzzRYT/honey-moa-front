import { commonInstance } from '../axiosInstance';
import { GetAllUsersReturn, PostConnectionReturn } from './type';

//email을 통한 유저 검색 api
export async function getUserEmail(email: string): Promise<GetAllUsersReturn> {
  const url = !email ? '/users' : `/users?email=${email}`;
  const response = await commonInstance.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return response.data;
}

export async function postConnection(
  requestedId: string
): Promise<PostConnectionReturn> {
  const response = await commonInstance.post(
    '/users/me/connections',
    {
      requestedId,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );

  return response.data;
}
