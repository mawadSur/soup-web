import { fetchData } from '@/lib/fetch';
import { SectionType } from '@/types';
import qs from 'qs';

const baseUrl = process.env.BASE_URL;

const buildUrl = (path: string, queryParams: object): string => {
  const query = qs.stringify(queryParams);
  const url = new URL(path, baseUrl);
  url.search = query;
  return url.href;
};

export const fetchGlobalData = async () => {
  const path = '/api/global';
  const query = {
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
            populate: '*',
          },
        },
      },
      footer: {
        populate: {
          link: {
            populate: '*',
          },
          social: {
            populate: '*',
          },
        },
      },
    },
  };

  const url = buildUrl(path, query);
  const data = await fetchData(url);
  return data;
};

export const fetchLandingPage = async () => {
  const path = '/api/landing-page';

  const query = {
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
          [SectionType.BLUR_BACKGROUND]: {
            populate: {
              backgroundImage: {
                populate: {
                  image: {
                    fields: ['name', 'alternativeText', 'width', 'height'],
                  },
                },
              },
            },
          },
          [SectionType.HELP]: {
            populate: {
              help: {
                populate: {
                  image: {
                    fields: ['name', 'alternativeText', 'width', 'height'],
                  },
                },
              },
            },
          },
          [SectionType.GALLERY]: {
            populate: {
              gallery: {
                fields: ['name', 'alternativeText', 'width', 'height'],
              },
            },
          },
          [SectionType.EVENT]: {
            populate: {
              events: {
                populate: {
                  image: {
                    fields: ['name', 'alternativeText', 'width', 'height'],
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  const url = buildUrl(path, query);
  const data = await fetchData(url);
  return data;
};
