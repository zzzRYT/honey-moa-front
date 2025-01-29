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
