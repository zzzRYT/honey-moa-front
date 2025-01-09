import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthEndPoint } from '.';
import { AxiosError } from 'axios';

/** 로그인 쿼리 */
export const LoginQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.postToken,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ['tokens'],
      });
      localStorage.setItem('accessToken', data.accessToken);
    },
    onError: (error: AxiosError) => error,
  });
};

/** 회원가입 쿼리 */
export const RegisterQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.postUserRegister,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
    onError: (error: AxiosError) => error,
  });
};

/**비밀번호 변경을 위한 이메일 인증 쿼리 */
export const SendEmailForChangePwQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.postEmailForChangePw,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['users', 'user-verify-tokens', 'password-change'],
      });
    },
    onError: (error: AxiosError) => error,
  });
};

/**비밀번호 변경을 위한 쿼리 */
export const ChangePasswordQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthEndPoint.putChangePassword,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['users', 'password'],
      });
    },
    onError: (error: AxiosError) => error,
  });
};
