'use server';

import { getImagePosts, processImagePost } from '@/lib/instagram/services/media-service';
import { InstagramPost } from '@/types';

export async function getInstagramFeed(limit?: number, next?: string): Promise<InstagramPost> {
  try {
    const { data, paging } = await getImagePosts(limit, next);
    const posts = await Promise.all(data.map(processImagePost));

    return {
      posts: posts.flat(),
      next: paging.next || null,
    };
  } catch (error) {
    console.error(error);
    return { posts: [], next: null };
  }
}
