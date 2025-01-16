import { BlockNoteView } from '@blocknote/mantine';
import * as S from './style';
import { HoneyCardProps } from './type';
import { useCreateBlockNote } from '@blocknote/react';

export default function HoneyCard({
  date,
  location,
  tags,
  title,
  content,
  couple,
  titleImage,
}: HoneyCardProps) {
  const editor = useCreateBlockNote({
    initialContent: content,
  });

  return (
    <S.HoneyCardContainer>
      <S.HoneyCardHeader>
        <div>
          <img src={couple.profileImage} alt="profile" />
        </div>
        <span>{couple.name}</span>
        <p>{location}</p>
      </S.HoneyCardHeader>
      <S.HoneyCardImageContainer>
        <img src={titleImage} alt="profile" />
      </S.HoneyCardImageContainer>
      <div>
        <S.HoneyCardTitleAndDateContainer>
          <h4>{title}</h4>
          <span>{date}</span>
        </S.HoneyCardTitleAndDateContainer>
        <S.HoneyCardSummary>
          <BlockNoteView editor={editor} editable={false} />
        </S.HoneyCardSummary>
        <S.TagWrapper>
          {tags &&
            tags.map((tag, idx) => {
              return <div key={`${idx}-tag`}>#{tag}</div>;
            })}
        </S.TagWrapper>
      </div>
    </S.HoneyCardContainer>
  );
}
