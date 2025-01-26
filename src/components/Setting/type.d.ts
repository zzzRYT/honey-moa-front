export interface settingListType {
  title: string;
  contents: {
    color?: string;
    name: string;
    event?: () => void;
  }[];
}
