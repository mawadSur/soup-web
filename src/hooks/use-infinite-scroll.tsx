import { getInstagramFeed } from '@/actions/instagram';
import { DEFAULT_FETCH_LIMIT, INTERSECTION_THRESHOLD } from '@/constant';
import { debounce } from '@/lib/utils';
import { InstagramPost } from '@/types';
import React from 'react';

export function useInfiniteScroll(data: any, delay: number = 500) {
  const loaderRef = React.useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = React.useTransition();
  const [{ posts, next }, setState] = React.useState(data);

  const fetchPosts = async () => {
    try {
      const newPosts = await getInstagramFeed(DEFAULT_FETCH_LIMIT, next);
      setState((prevState: InstagramPost) => ({
        posts: [...prevState.posts, ...newPosts.posts],
        next: newPosts.next,
      }));
    } catch (error) {
      console.error('Error fetching more posts:', error);
    }
  };

  const debounced = debounce(() => {
    startTransition(() => {
      fetchPosts();
    });
  }, delay);

  React.useEffect(() => {
    const currentLoader = loaderRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && !isPending && next) {
          debounced();
        }
      },
      { threshold: INTERSECTION_THRESHOLD },
    );

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [debounced, isPending, next]);

  return { loaderRef, isPending, posts };
}
