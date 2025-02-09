import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BlogEndpoint } from '.';
import { toast } from 'react-toastify';
import { createBlogErrorhandler, getSingleBlogErrorHandler } from './error';
import { AxiosError } from 'axios';

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

export const GetSingleBlogQuery = (id?: string) => {
  const { data, isError, error } = useQuery({
    queryKey: ['single-blog'],
    queryFn: () => BlogEndpoint.getSingleBlog({ id }),
    enabled: !!id,
    retry: false,
  });
  if (isError) {
    toast.error(getSingleBlogErrorHandler(error as AxiosError));
    return;
  }
  return data;
};
