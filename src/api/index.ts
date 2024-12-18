import qs from 'qs';
import { fetchData } from '@/lib/fetch';

const baseUrl = process.env.BASE_URL;

export const fetchNavbar = async () => {
  const path = '/api/global';

  const query = qs.stringify({
    populate: {
      navbar: {
        populate: {
          LogoLink: {
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

export const fetchLandingPage = async () => {
  const path = '/api/landing-page';

  const query = qs.stringify({
    populate: {
      sections: {
        on: {
          'section.top-hero': {
            populate: {
              image: {
                fields: ['name', 'alternativeText', 'width', 'height'],
              },
              boxesButton: {
                populate: '*',
              },
              servedOver: '*',
            },
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
