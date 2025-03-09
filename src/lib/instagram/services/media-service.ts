import { fetchData } from '@/lib/fetch';
import { InstagramItem } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export async function getCarouselChildrenImages(imgId: string) {
  const url = `${baseUrl}/${imgId}/children?fields=id,media_type,media_url,thumbnail_url&access_token=${accessToken}`;

  return await fetchData(url);
}

export async function getImagePosts() {
  const url = `${baseUrl}/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`;

  return await fetchData(url);
}

export async function processImagePost(post: InstagramItem) {
  if (post.media_type === 'CAROUSEL_ALBUM') {
    const { data } = await getCarouselChildrenImages(post.id);
    return data.map((child: InstagramItem) => ({ ...child }));
  }

  return [{ ...post }];
}
