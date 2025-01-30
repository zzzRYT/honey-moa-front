export interface AccessAuthProps {
  children: React.ReactNode;
  isPrivate: boolean;
}

export interface RouteListType {
  id: string;
  path: string;
  private: boolean;
  element: React.ReactNode;
}
