import { useCreateBlockNote } from '@blocknote/react';
import * as S from './style';
import { BlockNoteView } from '@blocknote/mantine';
import { HoneyType } from './type';
import { Svg } from '@/components/Svg';
import { useTheme } from 'styled-components';

const honeyData: HoneyType = {
  couple: {
    id: 'abei014221-beigej',
    name: '두근세근 커플',
    profileImage: 'images/introImage.jpg',
  },
  id: 'agae129031-3fkkldaj',
  date: '2025-01-14',
  title: '첫 데이트',
  tags: ['데이트', '첫만남'],
  location: '노원역',
  content: [
    {
      id: '1a1410d0-e4c6-4a2b-b15b-a3035bcda01f',
      type: 'heading',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
        level: 2,
      },
      content: [
        {
          type: 'text',
          text: '소 제목',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: 'c71e55ef-97da-43db-a3f7-780072e9f72e',
      type: 'heading',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
        level: 3,
      },
      content: [
        {
          type: 'text',
          text: '소소 제목',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: 'ffa3265e-46e5-44ad-badd-0e4143f25760',
      type: 'paragraph',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [
        {
          type: 'text',
          text: '꾸미기 ',
          styles: {},
        },
        {
          type: 'text',
          text: '하나둘',
          styles: {
            backgroundColor: 'green',
          },
        },
      ],
      children: [],
    },
    {
      id: '838033c4-5203-4ef0-83f8-b56edcc92cee',
      type: 'bulletListItem',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [
        {
          type: 'text',
          text: '리스트',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: 'ff3b7554-28ba-4905-83ba-02df3166ff1d',
      type: 'bulletListItem',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [
        {
          type: 'text',
          text: '1',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: '6c660479-2ed5-423b-8242-dd637426a9a3',
      type: 'bulletListItem',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [
        {
          type: 'text',
          text: '2',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: 'e65557ae-f0f8-4819-bd27-33475f5b5026',
      type: 'bulletListItem',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [
        {
          type: 'text',
          text: '3',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: '33b85ca4-06b2-47db-978c-6cb74bc6e655',
      type: 'paragraph',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [],
      children: [],
    },
  ],
};

export default function BlogContents() {
  const theme = useTheme();
  const editor = useCreateBlockNote({
    initialContent: honeyData.content,
  });

  return (
    <S.HoneyWrapper>
      <S.LeftSideFloatingNavWrapper>
        <div>
          <S.LikeWrapper>
            <Svg.LikeIcon color={theme.button.primary.base} fill={false} />
            {999}
          </S.LikeWrapper>
          <div>
            <Svg.ShareIcon color={theme.button.primary.base} />
          </div>
        </div>
      </S.LeftSideFloatingNavWrapper>
      <S.HoneyContainer>
        <S.HoneyHeader>
          <S.TagsWrapper>
            {honeyData.tags &&
              honeyData.tags.map((tag, idx) => (
                <div key={`${idx}tag`}>#{tag}</div>
              ))}
          </S.TagsWrapper>
          <S.HoneyTitleH1>{honeyData.title}</S.HoneyTitleH1>
          <S.DateAndLocationWrapper>
            <span>{honeyData.date}</span>
            <p>
              <Svg.LocationIcon />
              {honeyData.location}
            </p>
          </S.DateAndLocationWrapper>
          <S.CoupleProfileWrapper>
            <img src={honeyData.couple.profileImage} alt="profile" />
            <div>
              <p>{honeyData.couple.name}</p>
              <p>3년차 커플</p>
            </div>
          </S.CoupleProfileWrapper>
        </S.HoneyHeader>
        <S.BlockNoteWrapper>
          <BlockNoteView editor={editor} editable={false} />
        </S.BlockNoteWrapper>
      </S.HoneyContainer>
    </S.HoneyWrapper>
  );
}
