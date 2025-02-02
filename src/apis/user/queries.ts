import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserEndPoint } from '.';
import { AxiosError } from 'axios';

// 내 정보 조회 쿼리
export function GetMyInfoQuery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserEndPoint.getMyInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['my-info'],
      });
    },
    onError: (error: AxiosError) => error,
  });
}
