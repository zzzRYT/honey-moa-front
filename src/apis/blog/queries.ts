import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BlogEndpoint } from '.';
import { toast } from 'react-toastify';
import {
  createBlogErrorhandler,
  createNewBlogPostErrorHandler,
  getSingleBlogErrorHandler,
} from './error';
import { AxiosError } from 'axios';

//블로그 생성 mutation
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

//블로그 단일 조회 query
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

//블로그 게시글 생성 mutation
export const CreateNewBlogPostMutate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: BlogEndpoint.CreateNewBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['create-blog-post'],
      });
    },
    onError: (error: AxiosError) => {
      toast.error(createNewBlogPostErrorHandler(error));
    },
  });
};
