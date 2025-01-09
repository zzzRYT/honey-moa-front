import * as S from './style';
import { TooltipProps } from './type';

/**
 * Tooltip 컴포넌트
 *
 * @description 특정 버튼 부모 요소로 감쌌을 때, 사용 가능한, tooltip 컴포넌트
 *
 * @param children 툴팁을 사용할 컴포넌트에 감싸기
 * @param message 툴팁에 표시할 메시지
 * @param direction 툴팁이 표시될 방향
 *
 * @returns Tooltip 컴포넌트
 *
 * @example
 *  <Tooltip message="툴팁 메시지" direction="top">
 *    <button>버튼</button>
 *  </Tooltip>
 */
export default function Tooltip({
  children,
  message,
  direction = 'top',
}: TooltipProps) {
  return (
    <S.TooltipWrapper>
      {children}
      <S.TooltipTextDiv $direction={direction} className="tooltipText">
        {message}
      </S.TooltipTextDiv>
    </S.TooltipWrapper>
  );
}
