export interface GetMyInfoReturn {
  id: string;
  createdAt: string;
  updatedAt: string;
  nickname: string;
  email: string;
  loginType: string;
  mbti: string;
  isEmailVerified: false;
  acceptedConnection: ConnectionInfo;
}

export interface ConnectionInfo {
  id: string;
  createdAt: string;
  updatedAt: string;
  requesterId: string;
  requestedId: string;
  status: 'ACCEPTED';
}
