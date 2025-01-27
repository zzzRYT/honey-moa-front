import useLocalStorage from '@/hook/useLocalStorage';
import * as S from './style';
import { useStore } from 'zustand';
import { useThemeStore } from '@/store/themeStore/useThemeStore';

export default function ChangeThemeModal() {
  const [themeToggle, setThemeToggle] = useLocalStorage('theme');
  const { setTheme } = useStore(useThemeStore);
  const toggleHandler = () => {
    setThemeToggle(themeToggle === 'dark' ? 'light' : 'dark');
    setTheme(themeToggle === 'dark' ? 'light' : 'dark');
  };

  return (
    <S.ModalWrapper>
      <S.ModalHeader>
        <h2>테마 설정</h2>
      </S.ModalHeader>
      {themeToggle === 'dark' ? (
        <S.Desc>다크 모드</S.Desc>
      ) : (
        <S.Desc>라이트 모드</S.Desc>
      )}
      <S.SelectThemeContainer>
        <S.ToggleContainer onClick={toggleHandler}>
          <div
            className={`toggle-container ${
              themeToggle === 'dark' ? 'toggle--checked' : null
            }`}
          />
          <div
            className={`toggle-circle ${
              themeToggle === 'dark' ? 'toggle--checked' : null
            }`}
          />
        </S.ToggleContainer>
      </S.SelectThemeContainer>
    </S.ModalWrapper>
  );
}
