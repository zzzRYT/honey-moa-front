import { PartialBlock } from '@blocknote/core';

export interface PostContentsType {
  title: string;
  tags: string[];
  date: string;
  location: string;
  contents: PartialBlock[];
}

export type PostContentsPropsType = React.Dispatch<
  React.SetStateAction<PostContentsType>
>;

export interface TagsProps {
  tags: string[];
  setContents: PostContentsPropsType;
}

export interface EditorProps {
  setContents: PostContentsPropsType;
}
