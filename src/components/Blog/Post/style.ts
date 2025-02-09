import styled, { keyframes } from 'styled-components';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20%;
`;

export const PostContainer = styled.div`
  width: 100%;
  margin-top: 46px;
`;

export const PostHeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 12px;
`;

export const PostHeader = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > :nth-child(2) {
    display: flex;
    gap: 12px;
  }
`;

interface ButtonProps {
  $color?: string;
  $bgColor?: string;
  $hoverColor?: string;
}

export const ActionButton = styled.button<ButtonProps>`
  color: ${({ $color }) => $color};
  background-color: ${({ $bgColor }) => $bgColor};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const PostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > textarea {
    width: 100%;
    font-size: 2.75rem;
    height: 66px;
    line-height: 1.5;
    padding: 0px;
    outline: none;
    border: none;
    background-color: inherit;
    color: ${({ theme }) => theme.text.primary};
    resize: none;
    overflow: hidden;
    font-weight: bold;
  }
  & > label {
    border: 2px solid ${({ theme }) => theme.button.primary.base};
    width: 100px;
  }
`;

const smoothAppear = keyframes`
    from {
        opacity: 0;
        transform: scale(0.3);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const TagsWrapper = styled.div`
  margin: 12px 5px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  & > input {
    font-size: 1rem;
    width: auto;
    padding: 0px;
    outline: none;
    border: none;
    background-color: inherit;
    color: ${({ theme }) => theme.text.primary};
    font-weight: bold;
  }
  .new-tag {
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.secondary};
    padding: 5px 10px;
    border-radius: 5px;
    cursor: default;
    animation: ${smoothAppear} 0.2s ease-in-out;
  }
`;

export const DateAndLocationWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 24px;
`;

export const DateInput = styled.input`
  border: none;
  font-size: 1rem;
  background-color: inherit;
  outline: none;
`;

export const LocationInput = styled.input`
  border: none;
  font-size: 1rem;
  background-color: inherit;
  outline: none;
`;

export const PostContents = styled.div`
  .bn-editor {
    height: 100%;
    padding-inline: 0px;
    padding-bottom: 65%;
  }
`;
