import { useState } from 'react';
import * as S from './style';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import Modal from '../Modal';
import useFunnel from '../../hook/useFunnel';
import { AuthFunnelStep, SelectModalButton } from './type';
import VerificationEmailModal from './VerificationEmailModal';
import SendEmailForChangePasswordModal from './SendEmailForChnagePasswordModal';

export default function Auth() {
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const { Funnel, setStep } = useFunnel<AuthFunnelStep>('로그인');

  const onClickModalButton = ({ location }: SelectModalButton) => {
    if (location === '로그인') setStep('로그인');
    if (location === '회원가입') setStep('회원가입');
    setAuthOpen(prev => !prev);
  };

  return (
    <>
      <S.LoginButton
        data-testid="open-login-modal"
        onClick={() => onClickModalButton({ location: '로그인' })}
      >
        로그인
      </S.LoginButton>
      <S.RegisterButton
        onClick={() => onClickModalButton({ location: '회원가입' })}
      >
        회원가입
      </S.RegisterButton>
      <Modal isOpen={authOpen}>
        <Funnel>
          <Funnel.Step name="로그인">
            <LoginModal setStep={setStep} />
          </Funnel.Step>
          <Funnel.Step name="회원가입">
            <RegisterModal setStep={setStep} />
          </Funnel.Step>
          <Funnel.Step name="비밀번호 찾기">
            <SendEmailForChangePasswordModal
              setStep={setStep}
              redirect="로그인"
            />
          </Funnel.Step>
          <Funnel.Step name="이메일 인증">
            <VerificationEmailModal />
          </Funnel.Step>
        </Funnel>
      </Modal>
    </>
  );
}
