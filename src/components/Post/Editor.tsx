import { BlockNoteSchema, defaultBlockSpecs, locales } from '@blocknote/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { video, audio, file, codeBlock, ...remainingBlockSpecs } =
  defaultBlockSpecs;
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { EditorProps } from './type';

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...remainingBlockSpecs,
  },
});

const locale = locales['ko'];

export const Editor = ({ setContents }: EditorProps) => {
  const editor = useCreateBlockNote({
    schema,
    dictionary: {
      ...locale,
    },
  });

  const onChangeBlockNoteHandler = () => {
    setContents(prev => {
      return {
        ...prev,
        contents: editor.document,
      };
    });
  };

  return (
    <>
      <BlockNoteView editor={editor} onChange={onChangeBlockNoteHandler} />
    </>
  );
};
