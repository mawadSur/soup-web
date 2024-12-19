import qs from 'qs';
import { fetchData } from '@/lib/fetch';
import { SectionType } from '@/types';

const baseUrl = process.env.BASE_URL;

const buildUrl = (path: string, queryParams: object): string => {
  const query = qs.stringify(queryParams);
  const url = new URL(path, baseUrl);
  url.search = query;
  return url.href;
};

export const fetchGlobalData = async () => {
  const path = '/api/global';
  const queryParams = {
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
  };

  const url = buildUrl(path, queryParams);
  const data = await fetchData(url);
  return data;
};

export const fetchLandingPage = async () => {
  const path = '/api/landing-page';
  const queryParams = {
    populate: {
      sections: {
        on: {
          [SectionType.TOP_HERO]: {
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
          [SectionType.GET_INVOLVED]: {
            populate: '*',
          },
          [SectionType.HERO]: {
            populate: {
              hero: {
                populate: {
                  image: {
                    fields: ['name', 'alternativeText', 'width', 'height'],
                  },
                  button: {
                    populate: '*',
                  },
                },
              },
            },
          },
          [SectionType.ABOUT]: {
            populate: {
              about: {
                populate: {
                  image: {
                    fields: ['name', 'alternativeText', 'width', 'height'],
                  },
                  button: {
                    populate: '*',
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  const url = buildUrl(path, queryParams);
  const data = await fetchData(url);
  return data;
};
