import * as S from './style';
import Image from '../Image';
import { LoginInfo, ModalProps } from './type';
import { useState } from 'react';
import { AuthQueries } from '@/apis/auth';
import { onChangeTextInfo, toggleCheckBox, validationLoginInfo } from './utils';
import { useNavigate } from 'react-router-dom';
import { Loading } from '..';
import { useToastStore } from '@/store/toastStore/useToastStore';
import { LoginErrorHandler } from '@/apis/auth/error';

export default function LoginModal({ setStep }: ModalProps) {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
    isAutoLogin: false,
  });

  const navigate = useNavigate();
  const showToast = useToastStore(state => state.showToast);

  //로그인 정보 변경 핸들러
  const onChangeLoginInfo = onChangeTextInfo<LoginInfo>({
    setState: setLoginInfo,
  });

  //로그인 상태 저장 토글
  const toggleAutoLogin = toggleCheckBox<LoginInfo>({
    setState: setLoginInfo,
    key: 'isAutoLogin',
  });

  const mutation = AuthQueries.LoginQuery();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const { email, password } = loginInfo;
    const isValid = validationLoginInfo(loginInfo);
    if (isValid.result) {
      mutation.mutate(
        { email, password },
        {
          onSuccess: () => navigate('/honeyJar'),
          onError: error => {
            showToast(LoginErrorHandler(error) as string);
          },
        }
      );
    } else {
      showToast(isValid.message);
    }
  };

  return (
    <S.ModalWrapper>
      <S.ModalHeader>
        <Image
          src="siteLogo.jpg"
          alt="intro"
          width="36px"
          height="36px"
          borderRadius="50%"
        />
        <h2>로그인</h2>
      </S.ModalHeader>
      <S.AuthForm onSubmit={onSubmit}>
        <S.ContentInputContainer>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            data-testid="email"
            value={loginInfo.email}
            onChange={onChangeLoginInfo}
          />
        </S.ContentInputContainer>
        <S.ContentInputContainer>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            data-testid="password"
            value={loginInfo.password}
            onChange={onChangeLoginInfo}
          />
        </S.ContentInputContainer>
        <S.LoginBottom>
          <div>
            <input
              type="checkbox"
              id="remember"
              checked={loginInfo.isAutoLogin}
              onChange={toggleAutoLogin}
            />
            <label>로그인 상태 유지</label>
          </div>
          <S.LinkedInButton
            type="button"
            onClick={() => setStep('비밀번호 찾기')}
          >
            비밀번호 찾기
          </S.LinkedInButton>
        </S.LoginBottom>
        <S.SubmitButton type="submit">
          {mutation.isPending ? <Loading.Spinner /> : <>로그인</>}
        </S.SubmitButton>
      </S.AuthForm>
      <S.ModalBottom>
        <span>계정이 없으신가요?</span>
        <S.LinkedInButton onClick={() => setStep('회원가입')}>
          회원가입
        </S.LinkedInButton>
      </S.ModalBottom>
    </S.ModalWrapper>
  );
}
