import { useRef, useState } from 'react';
import * as S from './style';
import { Svg } from '../Svg';
import { PostContentsType } from './type';
import { Editor } from './Editor';
import Tags from './Tags';
import { changeInfo } from '@/utils';
import { Header } from '../Layouts';

export default function Post() {
  const titleTextRef = useRef<HTMLTextAreaElement>(null);

  const [contents, setContents] = useState<PostContentsType>({
    title: '',
    tags: [],
    date: '',
    location: '',
    contents: [],
  });

  const contentsStateChangeHandler = changeInfo.text<PostContentsType>({
    setState: setContents,
  });

  const TitleChangeHandler = () => {
    const textarea = titleTextRef.current;
    if (textarea) {
      textarea.style.height = '66px';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  return (
    <>
      <S.PostWrapper>
        <Header.PostHeader {...contents} />
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
            <Tags tags={contents.tags} setContents={setContents} />
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
            <Editor setContents={setContents} />
          </S.PostContents>
        </S.PostContainer>
      </S.PostWrapper>
    </>
  );
}
