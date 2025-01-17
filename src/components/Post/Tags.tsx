import { PopUp } from '..';
import { Svg } from '../Svg';
import * as S from './style';
import { TagsProps } from './type';

export default function Tags({ tags, setContents }: TagsProps) {
  const makeNewTagHandler: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      const tagInput = document.querySelector('#tag') as HTMLInputElement;
      const tag = tagInput.value;
      if (!tag) return;
      if (tags.includes(tag)) {
        tagInput.value = '';
        return;
      }

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
      const tagInput = document.querySelector('#tag') as HTMLInputElement;
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
