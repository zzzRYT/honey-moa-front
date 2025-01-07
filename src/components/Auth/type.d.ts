export type AuthFunnelStep =
  | '로그인'
  | '회원가입'
  | '비밀번호 찾기'
  | '이메일 인증';

//모달 버튼 클릭 시 함수
export interface SelectModalButton {
  location: AuthFunnelStep;
}

//모달 Props
export interface ModalProps {
  setStep: (step: AuthFunnelStep) => void;
}

//회원가입 status
export type RegisterInfo = {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  conditions: boolean;
};

export type LoginInfo = {
  email: string;
  password: string;
  isAutoLogin: boolean;
};

export type EmailForChangePwType = {
  email: string;
};
