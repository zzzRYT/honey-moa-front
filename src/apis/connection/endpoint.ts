import { commonInstanceWithToken } from '../axiosInstance';
import { GetAllUsersReturn, PostConnectionReturn } from './type';

//email을 통한 유저 검색 api
export async function getUserEmail(email: string): Promise<GetAllUsersReturn> {
  const url = !email ? '/users' : `/users?email=${email}`;
  const response = await commonInstanceWithToken.get(url);

  return response.data;
}

export async function postConnection(
  requestedId: string
): Promise<PostConnectionReturn> {
  const response = await commonInstanceWithToken.post('/users/me/connections', {
    requestedId,
  });

  return response.data;
}
