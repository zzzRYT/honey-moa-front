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
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;

export const Desc = styled.div`
  //설명 부분의 CSS를 구현
  text-align: center;
  margin: 20px;
  color: ${({ theme }) => theme.text.primary};
`;
