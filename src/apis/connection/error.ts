import { AxiosError } from 'axios';
import { ErrorResponse } from './type';

export function SearchErrorHandler(error: AxiosError) {
  const responseData = error.response?.data as ErrorResponse;
  const code = responseData?.code;
  console.log(code);
  return '추후 추가';
}
