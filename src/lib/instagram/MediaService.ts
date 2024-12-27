import { fetchData } from '@/lib/fetch';

const baseUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export async function getImagePosts(limit = 6, next = '') {
  const url =
    next ||
    `${baseUrl}/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=${limit}`;
  return await fetchData(url);
}
