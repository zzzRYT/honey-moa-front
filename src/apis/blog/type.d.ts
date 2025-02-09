export interface CreateBlogParams {
  name: string;
  description: string;
  dDayStartDate: string;
}

export interface CreateBlogReturn {
  id: string;
}

export interface BlogSingleParamsType {
  id?: string;
}

export interface BlogSingleInfoReturn {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  createdBy: number; //블로그 생성 유저
  connectionId: number;
  members: {
    id: string;
    createdAt: string;
    updatedAt: string;
    nickname: string;
    profileImageUrl: string;
  }[];
}

export interface CreateNewBLogPostParams {
  id: string;
  title: string;
  contents: object[];
  date: string;
  location: string;
  isPublic?: boolean;
  tagNames?: string[];
  fileUrls?: string[];
}

export interface CreateNewBlogPostReturn {
  id: string;
}
