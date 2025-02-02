import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export function MyInfoErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;

  if (code === 'INVALID_TOKEN')
    return '유효하지 않은 토큰입니다. 다시 시도해주세요.';
  if (code === 'RESOURCE_NOT_FOUND')
    return '존재하지 않는 유저 입니다, 다시 시도해주세요.';
}
