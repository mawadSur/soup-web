import qs from 'qs';
import { fetchData } from '@/lib/fetch';

export const fetchNavbar = async () => {
  const path = '/api/global';
  const baseUrl = process.env.BASE_URL;

  const query = qs.stringify({
    populate: {
      navbar: {
        populate: {
          logoLink: {
            populate: {
              image: {
                fields: ['name', 'alternativeText'],
              },
            },
          },
          link: {
            populate: true,
          },
        },
      },
      footer: {
        populate: {
          link: {
            populate: true,
          },
          social: {
            populate: true,
          },
        },
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;

  const data = await fetchData(url.href);

  return data;
};
