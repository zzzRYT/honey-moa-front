export interface GetAllUsersReturn {
  totalCount: number;
  limit: number;
  contents: Array<EachUserInfo>;
  //   nextCursor: {
  //     id: string;
  //     createdAt: string;
  //     updatedAt: string;
  //   };
}

export interface PostConnectionReturn {
  id: string;
}

export interface EachUserInfo {
  id: string;
  createdAt: string;
  updatedAt: string;
  nickname: string;
  email: string;
  loginType: string;
  mbti: string;
  isEmailVerified: boolean;
}
export interface GetConnectionReturn {
  totalCount: number;
  limit: number;
  currentPage: number1;
  nextPage: number;
  hasNext: boolean;
  lastPage: number;
  contents: [];
}

export interface putConnectionReturn {}
export interface ErrorResponse {
  code: string;
}
