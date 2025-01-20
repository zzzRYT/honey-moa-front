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

export interface ErrorResponse {
  code: number;
}
