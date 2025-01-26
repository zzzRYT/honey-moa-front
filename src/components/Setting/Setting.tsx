import { useTheme } from 'styled-components';
import { Header } from '../Layouts';
import * as S from './style';
import { settingListType } from './type';
import { Svg } from '../Svg';
import { useState } from 'react';
import useFunnel from '@/hook/useFunnel';
import VerificationEmailModal from '../Auth/VerificationEmailModal';
import Modal from '../Modal';
import SendEmailForChangePasswordModal from '../Auth/SendEmailForChnagePasswordModal';

export default function Setting() {
  const theme = useTheme();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { Funnel, setStep } = useFunnel<'이메일 인증' | '비밀번호 변경'>(
    '이메일 인증'
  );

  const settingList: settingListType[] = [
    {
      title: '계정',
      contents: [
        {
          name: '계정 정보',
          event: () => console.log('이메일 변경'),
        },
        {
          name: '커플 프로필 관리',
          event: () => console.log('비밀번호 변경'),
        },
        {
          name: '이메일 인증',
          event: () => {
            setStep('이메일 인증');
            setIsOpenModal(prev => !prev);
          },
        },
        {
          name: '비밀번호 변경',
          event: () => {
            setStep('비밀번호 변경');
            setIsOpenModal(prev => !prev);
          },
        },
        { name: '로그아웃', color: theme.accent },
        { name: '회원탈퇴', color: theme.accent },
      ],
    },
    {
      title: '알림',
      contents: [
        {
          name: '알림 설정',
        },
      ],
    },
    {
      title: '앱 설정',
      contents: [
        {
          name: '테마 설정',
        },
      ],
    },
    {
      title: '지원',
      contents: [
        {
          name: '고객지원',
        },
      ],
    },
  ];
  return (
    <>
      <Modal isOpen={isOpenModal}>
        <Funnel>
          <Funnel.Step name="이메일 인증">
            <VerificationEmailModal />
          </Funnel.Step>
          <Funnel.Step name="비밀번호 변경">
            <SendEmailForChangePasswordModal setStep={setStep} />
          </Funnel.Step>
        </Funnel>
      </Modal>
      <Header.SettingHeader titleText="설정" />
      <S.SettingWrapper>
        <S.SettingListWrapper>
          {settingList.map(item => {
            return (
              <S.SettingItem key={item.title}>
                <S.SettingItemTitle>{item.title}</S.SettingItemTitle>
                <S.SettingItemContents>
                  {item.contents.map(content => {
                    return (
                      <S.SettingItemContentWrapper onClick={content.event}>
                        <S.SettingItemContent
                          key={content.name}
                          color={content.color}
                        >
                          {content.name}
                        </S.SettingItemContent>
                        <Svg.NextIcon />
                      </S.SettingItemContentWrapper>
                    );
                  })}
                </S.SettingItemContents>
              </S.SettingItem>
            );
          })}
        </S.SettingListWrapper>
      </S.SettingWrapper>
    </>
  );
}
