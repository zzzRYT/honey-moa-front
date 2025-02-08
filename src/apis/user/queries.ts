import { useQuery } from '@tanstack/react-query';
import { UserEndPoint } from '.';
import { toast } from 'react-toastify';
import { MyInfoErrorHandler } from './error';
import { AxiosError } from 'axios';

export function GetMyInfoQuery() {
  const { data, isError, error } = useQuery({
    queryKey: ['users-me'],
    queryFn: UserEndPoint.getMyInfo,
    enabled: !!localStorage.getItem('accessToken'),
    refetchOnWindowFocus: false,
  });
  if (isError) {
    toast.error(MyInfoErrorHandler(error as AxiosError));
    return;
  }
  return data;
}
