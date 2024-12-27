import { processImage } from '@/lib/BlurImage';
import { fetchData } from '@/lib/fetch';
import { InstagramItem } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export async function getCarouselChildrenImages(imgId: string) {
  const url = `${baseUrl}/${imgId}/children?fields=id,media_type,media_url,thumbnail_url&access_token=${accessToken}`;
  return await fetchData(url);
}

export async function processImagePost(post: InstagramItem) {
  if (post.media_type === 'CAROUSEL_ALBUM') {
    const children = await getCarouselChildrenImages(post.id);
    return await Promise.all(
      children.data.map(async (child: InstagramItem) => ({
        ...child,
        ...(await processImage(child.media_url)),
      })),
    );
  }
  return [
    {
      ...post,
      ...(await processImage(post.media_url)),
    },
  ];
}
