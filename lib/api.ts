import { fetchData } from '@/lib/fetch';
import { SectionType } from '@/types';
import qs from 'qs';

const baseUrl = process.env.BASE_URL;

interface QueryParams {
  [key: string]: any;
}

const buildUrl = (path: string, queryParams: QueryParams): string => {
  const query = qs.stringify(queryParams);
  const url = new URL(path, baseUrl);
  url.search = query;
  return url.href;
};

const globalQueryParams = {
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

const landingPageQueryParams = {
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

export const fetchGlobalData = async () => {
  const path = '/api/global';
  const url = buildUrl(path, globalQueryParams);
  return await fetchData(url);
};

export const fetchLandingPage = async () => {
  const path = '/api/landing-page';
  const url = buildUrl(path, landingPageQueryParams);
  return await fetchData(url);
};
