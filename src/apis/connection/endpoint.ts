import { commonInstance, instanceToken } from '../axiosInstance';
import {
  GetAllUsersReturn,
  GetConnectionReturn,
  PostConnectionReturn,
} from './type';

//email을 통한 유저 검색 api
export async function getUserEmail(email: string): Promise<GetAllUsersReturn> {
  const url = !email ? '/users' : `/users?email=${email}`;
  const response = await instanceToken.get(url);

  return response.data;
}
//연결 요청 api
export async function postConnection(
  requestedId: string
): Promise<PostConnectionReturn> {
  const response = await instanceToken.post('/users/me/connections', {
    requestedId,
  });

  return response.data;
}
//연결 요청 리스트 조회
export async function getConnectionList(
  direction: 'request' | 'requested'
): Promise<GetConnectionReturn> {
  const response = await instanceToken.get(
    direction === 'request'
      ? '/users/me/connections?showRequest=true'
      : '/users/me/connections?showRequested=true'
  );
  return response.data;
}

//연결 수락 거절 취소
export async function putConnection(
  status: 'ACCEPTED' | 'REJECTED' | 'CANCELED',
  id: string
): Promise<unknown> {
  const response = await instanceToken.put(`/users/me/connections/${id}`, {
    status,
  });

  return response.data;
}
