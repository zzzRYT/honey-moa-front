import { AuthFunnelModal } from '@/components/Auth/AuthFunnelModal';
import { AuthFunnelStep } from '@/components/Auth/type';
import useFunnel from '@/hook/useFunnel';
import { AccessAuthProps } from './type';
import useLocalStorage from '@/hook/useLocalStorage';

export default function AccessAuth({ children, isPrivate }: AccessAuthProps) {
  const { Funnel, setStep } = useFunnel<AuthFunnelStep>('로그인');
  const { value: token } = useLocalStorage('accessToken');

  //접근 권한이 있는 사용자인지 판별하는 로직 추가 필요

  return (
    <>
      {!token && isPrivate && (
        <AuthFunnelModal
          Funnel={Funnel}
          setStep={setStep}
          isOpen={true}
          outSideClick={false}
          blur={true}
        />
      )}
      {children}
    </>
  );
}
