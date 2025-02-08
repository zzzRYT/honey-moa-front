import { instanceToken } from '../axiosInstance';
import {
  BlogSingleInfoReturn,
  BlogSingleParamsType,
  CreateBlogParams,
  CreateBlogReturn,
} from './type';

export async function postCreateBlog({
  name,
}: CreateBlogParams): Promise<CreateBlogReturn> {
  const response = await instanceToken.post('/blogs', {
    name,
  });
  return response.data;
}

export async function getSingleBlog({
  id,
}: BlogSingleParamsType): Promise<BlogSingleInfoReturn> {
  const response = await instanceToken.get(`/users/${id}/blog`);
  return response.data;
}
