import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ConnectionEndPoint } from '.';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import {
  GetConnectionDetailErrorHandler,
  GetConnectionListErrorHandler,
} from './error';
import {
  ConnectionPaginationParams,
  ConnectionStatus,
  ConnectionUserType,
  GetConnectionReturn,
} from './type';

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

// 연결 리스트 페이지네이션
export function GetConnectionListPaginationQuery(
  params: Partial<ConnectionPaginationParams> & { isOpen?: boolean }
) {
  const { data, isError, error } = useQuery({
    queryKey: ['me', 'connections', params],
    queryFn: () => ConnectionEndPoint.getConnectionListPagination(params),
  });
  if (isError && axios.isAxiosError(error)) {
    toast.error(GetConnectionListErrorHandler(error));
    return;
  }
  return data as GetConnectionReturn;
}

// 연결 상세 조회 쿼리
export function GetConnectionDetailQuery(id: string) {
  const { isError, error } = useQuery({
    queryKey: ['me', 'connections', id],
    queryFn: () => ConnectionEndPoint.getConnectionDetail(id),
  });
  if (isError && axios.isAxiosError(error)) {
    toast.error(GetConnectionDetailErrorHandler(error));
    return;
  }
}

//연결 수락 / 거절 / 취소
export function PutConnectionQuery(
  params: Pick<ConnectionUserType, 'id'> & { status: ConnectionStatus }
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => ConnectionEndPoint.putConnection(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['me', 'connections'],
      });
    },
    onError: (error: AxiosError) => error,
  });
}
