'use server';

import { BLUR_DATA_URL } from '@/constant';
import { fetchData } from '@/lib/fetch';
import { InstagramMediaItem, InstagramPost } from '@/types';
import sharp from 'sharp';

const baseUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

async function processImage(url: string) {
  try {
    const response = await fetch(url);
    const buffer = Buffer.from(await response.arrayBuffer());
    const resizedBuffer = await sharp(buffer).resize(20).toBuffer();
    return {
      placeholder: `data:image/png;base64,${resizedBuffer.toString('base64')}`,
    };
  } catch {
    return { placeholder: BLUR_DATA_URL };
  }
}

async function fetchChildren(imgId: string) {
  const url = `${baseUrl}/${imgId}/children?fields=id,media_type,media_url,thumbnail_url&access_token=${accessToken}`;
  return await fetchData(url);
}

async function fetchPosts(limit = 6, next = '') {
  const url =
    next ||
    `${baseUrl}/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=${limit}`;
  return await fetchData(url);
}

async function processPost(post: InstagramMediaItem) {
  if (post.media_type === 'CAROUSEL_ALBUM') {
    const children = await fetchChildren(post.id);
    return await Promise.all(
      children.data.map(async (child: InstagramMediaItem) => ({
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

export async function getInstagramFeed(limit?: number, next?: string): Promise<InstagramPost> {
  try {
    const { data, paging } = await fetchPosts(limit, next);
    const posts = await Promise.all(data.map(processPost));

    return {
      posts: posts.flat(),
      next: paging.next || null,
    };
  } catch (error) {
    console.error(error);
    return { posts: [], next: null };
  }
}
