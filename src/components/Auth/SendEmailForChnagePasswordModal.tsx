import { useState } from 'react';
import { Svg } from '../Svg';
import * as S from './style';
import { onChangeTextInfo } from './utils';
import { EmailForChangePwType, ModalProps } from './type';
import { AuthQueries } from '@/apis/auth';

export default function SendEmailForChangePasswordModal({
  setStep,
}: ModalProps) {
  const [forChangePw, setForChangePw] = useState<EmailForChangePwType>({
    email: '',
  });

  const mutationSendEmail = AuthQueries.SendEmailForChangePwQuery();

  const onChangeEmailForChangePw = onChangeTextInfo<EmailForChangePwType>({
    setState: setForChangePw,
  });
  const onSubmitEmailForChangePw: React.FormEventHandler<
    HTMLFormElement
  > = e => {
    e.preventDefault();
    if (forChangePw.email) {
      mutationSendEmail.mutate(
        {
          email: forChangePw.email,
        },
        { onSuccess: () => alert('이메일을 확인해주세요.') }
      );
    }
  };

  return (
    <S.ModalWrapper>
      <S.ChangePasswordHeader>
        <S.KeyIconContainer>
          <Svg.KeyIcon size={24} />
        </S.KeyIconContainer>
        <h3>비밀번호 찾기</h3>
        <S.SendToEmailP>
          가입하신 이메일 주소를 입력해 주세요. 비밀번호 재설정 링크를
          보내드립니다.
        </S.SendToEmailP>
      </S.ChangePasswordHeader>
      <form onSubmit={onSubmitEmailForChangePw}>
        <S.EmailInputForChangePasswordContainer>
          <label>이메일 주소</label>
          <input
            type="email"
            id="email"
            required
            value={forChangePw.email}
            onChange={onChangeEmailForChangePw}
          />
        </S.EmailInputForChangePasswordContainer>
        <S.SendEmailBottom>
          <button type="submit">비밀번호 변경 이메일 받기</button>
          <button type="button" onClick={() => setStep('로그인')}>
            취소
          </button>
        </S.SendEmailBottom>
      </form>
    </S.ModalWrapper>
  );
}
