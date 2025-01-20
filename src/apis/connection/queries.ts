import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ConnectionEndPoint } from '.';
import { AxiosError } from 'axios';

// 이메일 검색 쿼리
export function SearchQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ConnectionEndPoint.getUserEmail,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['search-users'],
      });
    },
    onError: (error: AxiosError) => error,
  });
}

// 연결 요청 쿼리
export function PostConnectionQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ConnectionEndPoint.postConnection,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['post-connection'],
      });
    },
    onError: (error: AxiosError) => error,
  });
}
