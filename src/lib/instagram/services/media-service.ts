import { fetchData } from '@/lib/fetch';
import { InstagramItem } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;
let accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
let tokenExpirationTime: number | null = null;

/**
 * Checks if the error response indicates an expired token
 * @param data The response data to check
 * @returns Boolean indicating if token is expired
 */
function isTokenExpired(data: any): boolean {
  return (
    data && data.error && (data.error.code === 190 || (data.error.message && data.error.message.includes('expired')))
  );
}

/**
 * Refreshes the Instagram access token
 * @returns Promise with the new access token
 */
export async function refreshInstagramToken(): Promise<string> {
  const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`;

  try {
    const data = await fetchData(url);

    if (data && data.access_token) {
      accessToken = data.access_token;
      // Calculate expiration time (convert expires_in from seconds to milliseconds)
      const expiresInMs = data.expires_in * 1000;
      tokenExpirationTime = Date.now() + expiresInMs;

      return data.access_token;
    } else {
      throw new Error('Failed to refresh token: No access_token in response');
    }
  } catch (error) {
    console.error('Error refreshing Instagram token:', error);
    throw error;
  }
}

/**
 * Wrapper function to handle API requests with proactive token refresh
 * @param endpoint The Instagram API endpoint to call
 * @returns Promise with the API response
 */
export async function fetchInstagramData(endpoint: string): Promise<any> {
  const now = Date.now();
  const timeUntilExpiration = tokenExpirationTime ? tokenExpirationTime - now : Infinity;
  const refreshThreshold = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Proactively refresh if token expires within 24 hours
  if (tokenExpirationTime && timeUntilExpiration < refreshThreshold) {
    await refreshInstagramToken();
  }

  const url = `${baseUrl}${endpoint}&access_token=${accessToken}`;
  let data = await fetchData(url);

  // Reactive refresh if token expired during the request
  if (isTokenExpired(data)) {
    const newToken = await refreshInstagramToken();
    const retryUrl = `${baseUrl}${endpoint}&access_token=${newToken}`;
    data = await fetchData(retryUrl);
  }

  return data;
}

export async function getCarouselChildrenImages(imgId: string) {
  const endpoint = `/${imgId}/children?fields=id,media_type,media_url,thumbnail_url`;
  return await fetchInstagramData(endpoint);
}

export async function getImagePosts() {
  const endpoint = `/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp`;
  return await fetchInstagramData(endpoint);
}

export async function processImagePost(post: InstagramItem) {
  if (post.media_type === 'CAROUSEL_ALBUM') {
    const data = await getCarouselChildrenImages(post.id);
    return data.data ? data.data.map((child: InstagramItem) => ({ ...child })) : [];
  }

  return [{ ...post }];
}
