import useLocalStorage from '@/hook/useLocalStorage';
import * as S from './style';
import { useStore } from 'zustand';
import { useThemeStore } from '@/store/themeStore/useThemeStore';

export default function ChangeThemeModal() {
  const [themeColor, setThemeColor] = useLocalStorage('theme');
  const { setTheme } = useStore(useThemeStore);
  const toggleHandler = () => {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
    setTheme(themeColor === 'dark' ? 'light' : 'dark');
  };

  return (
    <S.ModalWrapper>
      <S.ModalHeader>
        <h2>테마 설정</h2>
      </S.ModalHeader>
      {themeColor === 'dark' ? (
        <S.Desc>다크 모드</S.Desc>
      ) : (
        <S.Desc>라이트 모드</S.Desc>
      )}
      <S.SelectThemeContainer>
        <S.ToggleContainer onClick={toggleHandler}>
          <div
            className={`toggle-container ${
              themeColor === 'dark' ? 'toggle--checked' : null
            }`}
          />
          <div
            className={`toggle-circle ${
              themeColor === 'dark' ? 'toggle--checked' : null
            }`}
          />
        </S.ToggleContainer>
      </S.SelectThemeContainer>
    </S.ModalWrapper>
  );
}
