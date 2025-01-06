import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangePasswordRequest, LoginRequest, RegisterRequest } from './type';
import { AuthEndPoint } from '.';
import { AxiosError } from 'axios';
import {
  ChangePasswordErrorHandler,
  LoginErrorHandler,
  RegisterErrorHandler,
  SendEmailForChangePwErrorHandler,
} from './error';
import { EmailForChangePwType } from '@/components/Auth/type';

/** 로그인 쿼리 */
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

/** 회원가입 쿼리 */
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

/**비밀번호 변경을 위한 이메일 인증 쿼리 */
export const SendEmailForChangePwQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email }: EmailForChangePwType) =>
      AuthEndPoint.postEmailForChangePw({ email }),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['users', 'user-verify-tokens', 'password-change'],
      });
    },
    onError(error: AxiosError) {
      alert(SendEmailForChangePwErrorHandler(error));
    },
  });
};

/**비밀번호 변경을 위한 쿼리 */
export const ChangePasswordQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, token, newPassword }: ChangePasswordRequest) =>
      AuthEndPoint.putChangePassword({ id, token, newPassword }),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['users', 'password'],
      });
    },
    onError(error: AxiosError) {
      alert(ChangePasswordErrorHandler(error));
    },
  });
};
