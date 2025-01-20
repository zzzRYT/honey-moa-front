import { AxiosError } from 'axios';
import { ErrorResponse } from './type';

export function SearchErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;

  if (code === 'INVALID_REQUEST_PARAMETER')
    return '이메일을 다시 확인해 주세요.';
  if (code === 'INVALID_TOKEN')
    return '유효하지 않은 토큰입니다. 다시 시도해주세요.';
  if (code === 'SERVER_ERROR') return '개발자에게 문의 해 주세요.';
}

export function PostConnectionErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;

  if (code === 'CANNOT_CREATE_CONNECTION_MYSELF')
    return '본인의 아이디에 연결 요청 할 수 없습니다.';
  if (code === 'EMAIL_NOT_VERIFIED')
    return '해당 사용자의 이메일이 인증되지 않았습니다.';
  if (code === 'RESOURCE_NOT_FOUND') return '존재하지 않는 유저입니다.';
  if (code === 'REQUESTER_ALREADY_HAVE_CONNECTION')
    return '이미 연결 된 사용자 입니다.';
  if (code === 'SERVER_ERROR') return '개발자에게 문의 해 주세요.';
}
