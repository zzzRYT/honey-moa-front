import { Svg } from '@/components/Svg';

export default function ChatPage() {
  return (
    <div>
      <div>
        <Svg.PrevIcon /> <h3>우리의 대화</h3>
        <div>
          <div>사진</div>
          <div>정보</div>
        </div>
        <div>
          <div>공유된 미디어</div>
        </div>
      </div>
      <div>
        <div>채팅창 헤더</div>
        <div>바디</div>
        <div>
          <input />
          <Svg.SendIcon />
        </div>
      </div>
    </div>
  );
}
