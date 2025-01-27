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
  contents: ConnectionListContent[];
}

export interface ConnectionListContent {
  id: string;
  createdAt: string;
  updatedAt: string;
  requester: {
    id: string;
    createdAt: string;
    updatedAt: string;
    nickname: string;
  };
  requesterId: string;
  requested: {
    id: string;
    createdAt: string;
    updatedAt: string;
    nickname: string;
  };
  requestedId: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'DISCONNECTED' | 'CANCELED';
  blog: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
  };
  chatRoom: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
  };
}

export interface ErrorResponse {
  code: string;
}
