'use server';

import { getImagePosts, processImagePost } from '@/lib/instagram/services/media-service';
import { InstagramPost } from '@/types';

export async function getInstagramFeed(): Promise<InstagramPost> {
  try {
    const { data } = await getImagePosts();
    const posts = await Promise.all(data.map(processImagePost));

    return { posts: posts.flat() };
  } catch (error) {
    console.error(error);
    return { posts: [] };
  }
}
