import { useRef, useState } from 'react';
import * as S from './style';
import { PopUp } from '..';
import { Svg } from '../Svg';
import { PostContentsType } from './type';

export default function Post() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [contents, setContents] = useState<PostContentsType>({
    title: '',
    tags: [],
    date: new Date(),
    location: '',
    contents: '',
  });

  const contentsStateChangeHandler: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = e => {
    const { id, value } = e.target;
    setContents(prev => ({ ...prev, [id]: value }));
  };

  const TitleChangeHandler = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = '66px';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  const makeNewTagHandler: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      const tagInput = document.querySelector(
        'input[name=tag]'
      ) as HTMLInputElement;
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
  };

  const makeNavigateBarInContents: React.KeyboardEventHandler<
    HTMLTextAreaElement
  > = e => {
    if (e.key === '/') {
      console.log('navigate bar');
    }
  };

  return (
    <>
      <S.PostWrapper>
        <S.PostContainer>
          <S.PostTitleWrapper>
            <textarea
              ref={textareaRef}
              name="blog-title"
              id="title"
              placeholder="제목을 입력하세요"
              onInput={TitleChangeHandler}
              onChange={contentsStateChangeHandler}
            />
            <label></label>
            <S.TagsWrapper>
              <PopUp.Tooltip
                message={`입력하고 'Enter키'를 누르면 새로운 태그가 생성됩니다.\n 태그를 지우고 싶다면 만들어진 태그를 눌러주세요.`}
                direction="bottom"
              >
                <Svg.InfoIcon />
              </PopUp.Tooltip>
              <input
                type="text"
                name="tag"
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
          <div>
            <S.PostContents
              name="blog-content"
              placeholder="내용을 입력하세요"
              onKeyDown={makeNavigateBarInContents}
            ></S.PostContents>
          </div>
        </S.PostContainer>
      </S.PostWrapper>
    </>
  );
}
