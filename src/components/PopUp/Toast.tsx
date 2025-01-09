import { useEffect } from 'react';
import * as S from './style';
import { useStore } from 'zustand';
import { useToastStore } from '@/store/toastStore/useToastStore';

export default function Toast() {
  const { message, isVisible, hideToast } = useStore(useToastStore);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hideToast]);

  return (
    <>
      <S.ToastWrapper>
        {isVisible && (
          <S.ToastTextDiv className="toastText">{message}</S.ToastTextDiv>
        )}
      </S.ToastWrapper>
    </>
  );
}
