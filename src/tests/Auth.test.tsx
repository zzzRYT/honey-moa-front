import LoginModal from '@/components/Auth/LoginModal';
import RegisterModal from '@/components/Auth/RegisterModal';
import SendEmailForChangePasswordModal from '@/components/Auth/SendEmailForChnagePasswordModal';
import { AuthFunnelStep } from '@/components/Auth/type';
import useFunnel from '@/hook/useFunnel';
import { render } from '@/provider/TestProvider';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

const TestComponent = () => {
  const { Funnel, setStep } = useFunnel<AuthFunnelStep>('로그인');
  return (
    <>
      <button data-testid="open-login-modal" onClick={() => setStep('로그인')}>
        로그인
      </button>
      <button
        data-testid="open-register-modal"
        onClick={() => setStep('회원가입')}
      >
        회원가입
      </button>
      <Funnel>
        <Funnel.Step name="로그인">
          <LoginModal setStep={setStep} />
        </Funnel.Step>
        <Funnel.Step name="회원가입">
          <RegisterModal setStep={setStep} />
        </Funnel.Step>
        <Funnel.Step name="비밀번호 찾기">
          <SendEmailForChangePasswordModal setStep={setStep} />
        </Funnel.Step>
      </Funnel>
    </>
  );
};

describe('로그인 모달 테스트', () => {
  render(<TestComponent />);

  it("1. '로그인' 버튼을 클릭하면 로그인 모달이 뜬다.", () => {
    const loginButton = screen.getAllByText('로그인');
    fireEvent.click(loginButton[0]);
    const loginTitle = screen.getByRole('heading', { name: /로그인/i });
    expect(loginTitle).toBeDefined();
  });

  it('2. 로그인 모달에서 비밀번호 찾기를 누르면 비밀번호 찾기 모달이 뜬다.', () => {
    const findPasswordButton = screen.getByText('비밀번호 찾기');
    fireEvent.click(findPasswordButton);
    const findPasswordTitle = screen.getByRole('heading', {
      name: /비밀번호 찾기/i,
    });
    expect(findPasswordTitle).toBeDefined();
  });

  it("3. '회원가입' 버튼을 클릭하면 회원가입 모달이 뜬다.", () => {
    const registerButton = screen.getByTestId('open-register-modal');
    fireEvent.click(registerButton);
    const registerTitle = screen.getByRole('heading', { name: /회원가입/i });
    expect(registerTitle).toBeDefined();
  });
});

describe('로그인 기능 테스트', () => {
  it.todo('1. 로그인 모달을 열어, 로그인 시도 테스트', async () => {
    const loginButton = screen.getByTestId('open-login-modal');
    fireEvent.click(loginButton);

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');

    await userEvent.type(emailInput, 'test@gmail.com');
    await userEvent.type(passwordInput, 'test1234!');

    const loginSubmitButton = screen.getAllByRole('button', {
      name: /로그인/i,
    });

    fireEvent.click(loginSubmitButton[1]);
  });
});
