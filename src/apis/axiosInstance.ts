import axios from 'axios';
import {
  BeforeAuthRequestInterceptor,
  BeforeAuthResponseInterceptor,
  ErrorInterceptor,
} from './interceptors';

export const commonInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const commonInstanceWithToken = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export const BeforeAuthInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// 요청 인터셉터 추가하기
BeforeAuthInstance.interceptors.request.use(
  BeforeAuthRequestInterceptor,
  ErrorInterceptor
);

// 응답 인터셉터 추가하기
BeforeAuthInstance.interceptors.response.use(
  BeforeAuthResponseInterceptor,
  ErrorInterceptor
);
