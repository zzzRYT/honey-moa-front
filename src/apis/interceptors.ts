//요청 인터셉터
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

export function CommonRequestInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
  // Do something before request is sent
  return config;
}

//응답 인터셉터
export function CommonResponseInterceptor(
  response: AxiosResponse
): AxiosResponse {
  // Do something with response data
  return response;
}

//에러 인터셉터
export function ErrorInterceptor(error: AxiosError) {
  const { code } = error.response?.data as { code: string };
  if (code === 'SERVER_ERROR') {
    return toast.error('서버 오류 입니다. 잠시 후 다시 시도해주세요.');
  }
  return Promise.reject(error);
}
