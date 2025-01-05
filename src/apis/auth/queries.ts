import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginRequest, RegisterRequest } from './type';
import { AuthEndPoint } from '.';
import { AxiosError } from 'axios';
import { LoginErrorHandler, RegisterErrorHandler } from './error';

export const LoginQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (loginInfo: LoginRequest) => AuthEndPoint.postToken(loginInfo),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ['tokens'],
      });
      localStorage.setItem('accessToken', data.accessToken);
    },
    onError: (error: AxiosError) => {
      alert(LoginErrorHandler(error));
    },
  });
};

export const RegisterQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (registerInfo: RegisterRequest) =>
      AuthEndPoint.postUserRegister(registerInfo),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
    onError: (error: AxiosError) => {
      alert(RegisterErrorHandler(error));
    },
  });
};
