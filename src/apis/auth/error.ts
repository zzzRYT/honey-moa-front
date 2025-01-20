import { AxiosError } from 'axios';
import { ErrorResponse } from './type';

export function LoginErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 'INVALID_REQUEST_PARAMETER')
    return '아이디 혹은 비밀번호를 확인해 주세요.';
  if (code === 'INVALID_TOKEN')
    return '유효하지 않은 토큰입니다. 다시 시도해주세요.';
  if (code === 'WRONG_EMAIL_OR_PASSWORD')
    return '아이디 혹은 비밀번호를 확인해 주세요.';
}

export function RegisterErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 'INVALID_REQUEST_PARAMETER') return '형식을 다시 확인해 주세요.';
  if (code === 'ALREADY_CREATED_USER') return '이미 존재하는 이메일 입니다.';
}

export function SendEmailForChangePwErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 'INVALID_REQUEST_PARAMETER') return '형식을 맞게 입력해 주세요.';
  if (code === 'RESOURCE_NOT_FOUND,') return '존재하지 않는 이메일 입니다.';
  if (code === 'CANNOT_RESEND_PASSWORD_CHANGE_VERIFICATION_EMAIL_AN_HOUR')
    return '비밀번호 변경 재전송은 최초 전송 후 1시간 이후에 가능합니다.';
}

export function ChangePasswordErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  if (code === 'INVALID_REQUEST_PARAMETER,') return '형식이 잘못되었습니다.';
  if (code === 'INVALID_PASSWORD_CHANGE_  VERIFY_TOKEN')
    return '토큰이 유효하지 않습니다.';
  if (code === 'PERMISSION_DENIED,') return '비정상적인 접근입니다.';
  if (code === 'RESOURCE_NOT_FOUND,') return '리소스를 찾을 수 없습니다.';
  if (code === 'ALREADY_USED_PASSWORD_CHANGE_VERIFY_TOKEN')
    return '이미 사용된 접근입니다. 처음부터 다시 시도해 주세요.';
}
