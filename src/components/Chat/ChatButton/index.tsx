import { Svg } from '@/components/Svg';
import * as S from './style';
import { ChatButtonProps } from '../type';

export default function ChatButton({ setIsOpen }: ChatButtonProps) {
  return (
    <S.ButtonWrapper onClick={() => setIsOpen(prev => !prev)}>
      <Svg.ChatIcon size={39} />
    </S.ButtonWrapper>
  );
}
