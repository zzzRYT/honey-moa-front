import { useRef, useState } from 'react';
import * as S from './style';
import { PopUp } from '..';
import { Svg } from '../Svg';
import { PostContentsType } from './type';
import { Editor } from './Editor';
import { useTheme } from 'styled-components';

export default function Post() {
  const titleTextRef = useRef<HTMLTextAreaElement>(null);
  const [contents, setContents] = useState<PostContentsType>({
    title: '',
    tags: [],
    date: new Date(),
    location: '',
  });
  const theme = useTheme();

  const contentsStateChangeHandler: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = e => {
    const { id, value } = e.target;
    setContents(prev => ({ ...prev, [id]: value }));
  };

  const TitleChangeHandler = () => {
    const textarea = titleTextRef.current;
    if (textarea) {
      textarea.style.height = '66px';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  const makeNewTagHandler: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      const tagInput = document.querySelector('#tag') as HTMLInputElement;
      const tag = tagInput.value;
      if (!tag) return;
      setContents(prev => ({ ...prev, tags: [...prev.tags, tag] }));

      const newTag = document.createElement('div');
      newTag.textContent = tag;
      newTag.className = 'new-tag';
      tagInput.value = '';
      tagInput.before(newTag);
      newTag.addEventListener('click', () => {
        newTag.remove();
        setContents(prev => ({
          ...prev,
          tags: prev.tags.filter(target => target !== tag),
        }));
      });
    }
    if (e.key === 'Backspace') {
      const tagInput = document.querySelector(
        'input[name=tag]'
      ) as HTMLInputElement;
      if (tagInput.value === '') {
        const tags = document.querySelectorAll('.new-tag');
        const lastTag = tags[tags.length - 1];
        lastTag.remove();
        setContents(prev => ({
          ...prev,
          tags: prev.tags.slice(0, -1),
        }));
      }
    }
  };

  return (
    <>
      <S.PostWrapper>
        <S.PostHeaderWrapper>
          <S.PostHeader>
            <S.ActionButton
              bgColor={theme.bg.primary}
              color={theme.text.primary}
              hoverColor={theme.button.tertiary.hover}
            >
              <Svg.PrevIcon />
              나가기
            </S.ActionButton>
            <div>
              <S.ActionButton
                bgColor={theme.bg.primary}
                color={theme.text.primary}
                hoverColor={theme.button.tertiary.hover}
              >
                임시 저장
              </S.ActionButton>
              <S.ActionButton
                bgColor={theme.button.primary.base}
                color={theme.text.secondary}
                hoverColor={theme.button.primary.hover}
              >
                게시하기
              </S.ActionButton>
            </div>
          </S.PostHeader>
        </S.PostHeaderWrapper>
        <S.PostContainer>
          <S.PostTitleWrapper>
            <textarea
              ref={titleTextRef}
              name="blog-title"
              id="title"
              placeholder="제목을 입력하세요"
              onInput={TitleChangeHandler}
              onChange={contentsStateChangeHandler}
            />
            <label></label>
            <S.TagsWrapper>
              <PopUp.Tooltip
                message={`입력하고 'Enter키'를 누르면 새로운 태그가 생성됩니다.\n 태그를 지우고 싶다면 만들어진 태그를 누르거나, "Backspace키"를 누르세요.`}
                direction="bottom"
              >
                <Svg.InfoIcon />
              </PopUp.Tooltip>
              <input
                type="text"
                name="tag"
                id="tag"
                placeholder="태그를 입력하세요"
                onKeyDown={makeNewTagHandler}
              />
            </S.TagsWrapper>
          </S.PostTitleWrapper>
          <S.DateAndLocationWrapper>
            <S.DateInput
              type="date"
              id="date"
              onChange={contentsStateChangeHandler}
            />
            <div>
              <Svg.LocationIcon size={18} />
              <S.LocationInput
                type="text"
                placeholder="장소를 입력하세요"
                id="location"
                onChange={contentsStateChangeHandler}
              />
            </div>
          </S.DateAndLocationWrapper>
          <S.PostContents>
            <Editor />
          </S.PostContents>
        </S.PostContainer>
      </S.PostWrapper>
    </>
  );
}
