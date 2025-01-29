import useLocalStorage from '@/hook/useLocalStorage';
import * as S from './style';

export default function ChangeThemeModal() {
  const { value, set: setStorage } = useLocalStorage('theme');

  const toggleHandler = () => {
    setStorage(value === 'dark' ? 'light' : 'dark');
  };

  return (
    <S.ModalWrapper>
      <S.ModalHeader>
        <h2>테마 설정</h2>
      </S.ModalHeader>
      {value === 'dark' ? (
        <S.Desc>다크 모드</S.Desc>
      ) : (
        <S.Desc>라이트 모드</S.Desc>
      )}
      <S.SelectThemeContainer>
        <S.ToggleContainer onClick={toggleHandler}>
          <div
            className={`toggle-container ${
              value === 'dark' ? 'toggle--checked' : null
            }`}
          />
          <div
            className={`toggle-circle ${
              value === 'dark' ? 'toggle--checked' : null
            }`}
          />
        </S.ToggleContainer>
      </S.SelectThemeContainer>
    </S.ModalWrapper>
  );
}
