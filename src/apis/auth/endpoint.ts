import { EmailForChangePwType } from '@/components/Auth/type';
import { BeforeAuthInstance } from '../axiosInstance';
import {
  ChangePasswordRequest,
  LoginRequest,
  LoginReturn,
  RegisterRequest,
  RegisterReturn,
} from './type';

//로그인 api
export async function postToken(loginInfo: LoginRequest): Promise<LoginReturn> {
  //email, password encoding
  const combined = `${loginInfo.email}:${loginInfo.password}`;
  const encodeCombined = btoa(combined);
  const response = await BeforeAuthInstance.post(
    '/auth/sign-in',
    {},
    {
      headers: {
        Authorization: `Basic ${encodeCombined}`,
      },
    }
  );
  return response.data;
}

//회원가입 api
export async function postUserRegister(
  registerInfo: RegisterRequest
): Promise<RegisterReturn> {
  const response = await BeforeAuthInstance.post('/auth/sign-up', registerInfo);
  return response.data;
}

//비밀번호 변경을 위한 Email전송 api
export async function postEmailForChangePw({
  email,
}: EmailForChangePwType): Promise<void> {
  const response = await BeforeAuthInstance.post(
    `/users/${email}/user-verify-tokens/password-change`,
    {
      connectUrl: `${import.meta.env.VITE_CHANGE_PW_URL}`,
    }
  );
  return response.data;
}

//비밀번호 변경 api
export async function putChangePassword({
  id,
  token,
  newPassword,
}: ChangePasswordRequest): Promise<void> {
  const response = await BeforeAuthInstance.put(
    `/users/${id}/password`,
    {
      newPassword,
    },
    {
      params: {
        token,
      },
    }
  );
  return response.data;
}
