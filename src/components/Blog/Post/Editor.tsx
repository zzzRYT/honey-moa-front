import { BlockNoteSchema, defaultBlockSpecs, locales } from '@blocknote/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { video, audio, file, codeBlock, ...remainingBlockSpecs } =
  defaultBlockSpecs;
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { EditorProps } from './type';
import useLocalStorage from '@/hook/useLocalStorage';

export const lightTheme = {
  colors: {
    editor: {
      text: '#212121',
      background: '#FFFFFF',
    },
    menu: {
      text: '#757575',
      background: '#FFF3E0',
    },
    tooltip: {
      text: '#FFFFFF',
      background: '#212121',
    },
    hovered: {
      text: '#FF5722',
      background: '#FF7043',
    },
    selected: {
      text: '#FFFFFF',
      background: '#FFB300',
    },
    disabled: {
      text: '#B0B0B0',
      background: '#E5E3C3',
    },
    shadow: '#D3D3D3',
    border: '#E5E3C3',
    sideMenu: '#FFF3E0',
    highlights: {
      gray: {
        text: '#757575',
        background: '#f3f4f6',
      },
      // 다른 색상들 추가 가능
    },
  },
} as const;

export const darkTheme = {
  colors: {
    editor: {
      text: '#FFFFFF',
      background: '#212121',
    },
    menu: {
      text: '#FFFFFF',
      background: '#1E1E1E',
    },
    tooltip: {
      text: '#FFFFFF',
      background: '#424242',
    },
    hovered: {
      text: '#FFB300',
      background: '#FF9800',
    },
    selected: {
      text: '#FFFFFF',
      background: '#FFB300',
    },
    disabled: {
      text: '#FFFFFF',
      background: '#424242',
    },
    shadow: '#000000',
    border: '#424242',
    sideMenu: '#757575',
    highlights: {
      gray: {
        text: '#FFFFFF',
        background: '#2C2C2C',
      },
      // 다른 색상들 추가 가능
    },
  },
} as const;

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...remainingBlockSpecs,
  },
});

const locale = locales['ko'];

export const Editor = ({ setContents }: EditorProps) => {
  const { value: theme } = useLocalStorage('theme');

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
      <BlockNoteView
        editor={editor}
        onChange={onChangeBlockNoteHandler}
        theme={theme === 'dark' ? darkTheme : lightTheme}
      />
    </>
  );
};
