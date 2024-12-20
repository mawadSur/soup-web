import { REVALIDATE_TIME } from '@/constant';

export async function fetchData(url: string) {
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, { next: { revalidate: REVALIDATE_TIME }, ...headers });

    if (!response.ok) return [];

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
