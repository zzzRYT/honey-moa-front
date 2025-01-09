import { useEffect } from 'react';
import * as S from './style';
import { useStore } from 'zustand';
import { useToastStore } from '@/store/toastStore/useToastStore';

/**
 * Toast 컴포넌트
 * 해당 컴포넌트는 전역에서 사용되기 때문에 <Toast /> 자체로 쓰이지 않습니다.
 * `zustand`를 사용해 상태관리를 진행하기 때문에, `useToastStore`를 통해 상태를 변경시키면, `Toast UI`를 사용할 수 있습니다.
 *
 * @example
 * const showToast = useToastStore(state => state.showToast);
 *
 * showToast('메세지');
 *
 */
export default function Toast() {
  const { message, isVisible, isAnimating, hideToast } =
    useStore(useToastStore);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hideToast]);

  return (
    <>
      <S.ToastWrapper>
        <S.ToastTextDiv $isVisible={isVisible} $isAnimating={isAnimating}>
          {message}
        </S.ToastTextDiv>
      </S.ToastWrapper>
    </>
  );
}
