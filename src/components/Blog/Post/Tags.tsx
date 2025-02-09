import { PopUp } from '@/components';
import { Svg } from '@/components/Svg';
import * as S from './style';
import { TagsProps } from './type';
import { toast } from 'react-toastify';

export default function Tags({ tags, setContents }: TagsProps) {
  const makeNewTagHandler: React.KeyboardEventHandler<HTMLInputElement> = e => {
    //Enter시 태그 생성
    if (e.key === 'Enter') {
      const tagInput = document.querySelector('#tag') as HTMLInputElement;
      const tag = tagInput.value;
      if (tag.length > 20) {
        toast.error('태그는 20자 이하로 입력해주세요.');
        return;
      }
      if (!tag) return;
      if (tags.includes(tag)) {
        tagInput.value = '';
        return;
      }

      setContents(prev => ({ ...prev, tagNames: [...prev.tagNames, tag] }));

      const newTag = document.createElement('div');
      newTag.textContent = tag;
      newTag.className = 'new-tag';
      tagInput.value = '';
      tagInput.before(newTag);
      newTag.addEventListener('click', () => {
        newTag.remove();
        setContents(prev => ({
          ...prev,
          tags: prev.tagNames.filter(target => target !== tag),
        }));
      });
    }
    //backspace시 태그 삭제
    if (e.key === 'Backspace') {
      const tagInput = document.querySelector('#tag') as HTMLInputElement;
      if (tagInput.value === '') {
        const tags = document.querySelectorAll('.new-tag');
        const lastTag = tags[tags.length - 1];
        lastTag.remove();
        setContents(prev => ({
          ...prev,
          tags: prev.tagNames.slice(0, -1),
        }));
      }
    }
  };
  return (
    <>
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
    </>
  );
}
