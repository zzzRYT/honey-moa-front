import { LoginInfo, RegisterInfo } from './type';

//회원가입 유효성 검사
export function validationRegisterInfo(registerInfo: RegisterInfo): {
  message?: string | null;
  result: boolean;
} {
  const emailRegex = /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/gi;
  let message = null;
  let result = true;
  if (registerInfo.password !== registerInfo.passwordCheck) {
    message = '비밀번호가 일치하지 않습니다.';
    result = false;
    return { message, result };
  }
  if (!registerInfo.conditions) {
    message = '이용약관과 개인정보처리방침에 동의가 필요합니다.';
    result = false;
    return { message, result };
  }
  if (!registerInfo.email || !registerInfo.password || !registerInfo.nickname) {
    message = '모든 항목을 입력해주세요.';
    result = false;
    return { message, result };
  }
  if (!emailRegex.test(registerInfo.email)) {
    message = '형식에 맞게 이메일을 작성해주세요.';
    result = false;
    return { message, result };
  }
  if (!passwordRegex.test(registerInfo.password)) {
    message = '형식에 맞게 비밀번호를 작성해주세요.';
    result = false;
    return { message, result };
  }
  return { message, result };
}

export function validationLoginInfo(loginInfo: LoginInfo): {
  message: string;
  result: boolean;
} {
  let message = '';
  let result = true;
  if (!loginInfo.email || !loginInfo.password) {
    message = '모든 항목을 입력해주세요.';
    result = false;
  }
  return { message, result };
}
