import { instanceToken } from '../axiosInstance';
import { CreateBlogParams, CreateBlogReturn } from './type';

export async function postCreateBlog({
  name,
}: CreateBlogParams): Promise<CreateBlogReturn> {
  const response = await instanceToken.post('/blogs', {
    name,
  });
  return response.data;
}
