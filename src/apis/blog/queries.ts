import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BlogEndpoint } from '.';
import { toast } from 'react-toastify';
import { createBlogErrorhandler } from './error';
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
