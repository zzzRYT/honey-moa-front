import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BlogEndpoint } from '.';
import { toast } from 'react-toastify';
import { createBlogErrorhandler, getSingleBlogErrorHandler } from './error';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../type';

export const CreateBlogMutate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: BlogEndpoint.postCreateBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['create-blog'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(createBlogErrorhandler(error));
    },
  });
};

export const GetSingleBlogQuery = (id: string) => {
  const { data, isError, error } = useQuery({
    queryKey: ['single-blog'],
    queryFn: () => BlogEndpoint.getSingleBlog({ id }),
    enabled: !!id,
    retry: false,
  });
  if (isError) {
    const temp = error as AxiosError;
    const responseData = temp.response?.data as ErrorResponse;
    const code = responseData?.code;
    if (code === 'RESOURCE_NOT_FOUND') {
      return null;
    }
    toast.error(getSingleBlogErrorHandler(error as AxiosError));
    return;
  }
  return data;
};
