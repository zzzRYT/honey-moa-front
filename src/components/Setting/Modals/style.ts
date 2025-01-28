import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 350px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  h2 {
    font-size: 18px;
    color: ${({ theme }) => theme.text.primary};
    margin-left: 16px;
    font-weight: 700;
  }
`;

export const SelectThemeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: rgb(0, 200, 102);
    transition: all 0.5s ease-in-out;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: all 0.5s ease-in-out;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 27px;
    transition: all 0.5s ease-in-out;
  }
`;
interface ToggleProps {
  $checked: boolean;
  $transition: boolean;
}

export const ToggleBackground = styled.div<ToggleProps>`
  width: 50px;
  height: 24px;
  border-radius: 30px;
  background-color: ${({ $checked }) =>
    $checked ? 'rgb(0, 200, 102)' : 'rgb(233, 233, 234)'};
  transition: ${({ $transition }) =>
    $transition ? 'all 0.5s ease-in-out' : 'none'};
`;

export const ToggleCircle = styled.div<ToggleProps>`
  position: absolute;
  top: 1px;
  left: ${({ $checked }) => ($checked ? '27px' : '1px')};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: rgb(255, 254, 255);
  transition: all 0.5s ease-in-out;
`;

export const Desc = styled.div`
  //설명 부분의 CSS를 구현
  text-align: center;
  margin: 20px;
  color: ${({ theme }) => theme.text.primary};
`;

export const EditProfileWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const EditProfileImageOverlay = styled.div`
  position: relative;
  //이미지 오버레이
  label,
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    padding: 4px;
    background-color: ${({ theme }) => theme.button.tertiary.base};
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.button.tertiary.hover};
    }
  }
`;

export const EditInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
  //이름 입력 창 라벨
  label {
    font-size: 14px;
    color: ${({ theme }) => theme.text.primary};
    font-weight: 700;
  }
  //이름 입력 창
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.border.secondary};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.bg.tertiary};
    color: ${({ theme }) => theme.text.primary};
    outline: none;
  }
  //저장 버튼
  button {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
`;
