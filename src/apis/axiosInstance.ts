import axios from 'axios';
import {
  CommonRequestInterceptor,
  CommonResponseInterceptor,
  ErrorInterceptor,
} from './interceptors';

export const commonInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const instanceToken = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

// 요청 인터셉터 추가하기
commonInstance.interceptors.request.use(
  CommonRequestInterceptor,
  ErrorInterceptor
);

// 응답 인터셉터 추가하기
commonInstance.interceptors.response.use(
  CommonResponseInterceptor,
  ErrorInterceptor
);

instanceToken.interceptors.request.use(
  CommonRequestInterceptor,
  ErrorInterceptor
);

instanceToken.interceptors.response.use(
  CommonResponseInterceptor,
  ErrorInterceptor
);
