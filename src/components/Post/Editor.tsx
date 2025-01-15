import { BlockNoteSchema, defaultBlockSpecs } from '@blocknote/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { video, audio, file, codeBlock, ...remainingBlockSpecs } =
  defaultBlockSpecs;
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...remainingBlockSpecs,
  },
});

export const Editor = () => {
  const editor = useCreateBlockNote({
    schema,
  });
  return (
    <>
      <BlockNoteView editor={editor} />
    </>
  );
};
