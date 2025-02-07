export interface CreateBlogParams {
  name: string;
}

export interface CreateBlogReturn {
  id: string;
}

export interface BlogSingleParamsType {
  id: string;
}

export interface BlogSingleInfoReturn {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  createdBy: number; //블로그 생성 유저
  connectionId: number;
  members?: {
    id: string;
    createdAt: string;
    updatedAt: string;
    nickname: string;
  }[];
}
