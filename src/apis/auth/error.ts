import { AxiosError } from 'axios';
import { ErrorResponse } from './type';

export function LoginErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 0) return '서버 오류 입니다. 잠시 후 다시 시도해주세요.';
  if (code === 1) return '아이디 혹은 비밀번호를 확인해 주세요.';
  if (code === 3) return '유효하지 않은 토큰입니다. 다시 시도해주세요.';
  if (code === 2000) return '아이디 혹은 비밀번호를 확인해 주세요.';
}

export function RegisterErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 0) return '서버 오류 입니다. 잠시 후 다시 시도해주세요.';
  if (code === 1) return '형식을 다시 확인해 주세요.';
  if (code === 1000) return '이미 존재하는 이메일 입니다.';
}
