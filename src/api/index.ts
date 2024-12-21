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
        [SectionType.MEDIA]: {
          populate: {
            medias: {
              populate: {
                image: {
                  fields: ['name', 'alternativeText', 'width', 'height'],
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
        [SectionType.GALLERY_MASONRY]: {
          populate: {
            gallery: {
              populate: {
                image: {
                  fields: ['name', 'alternativeText', 'width', 'height'],
                },
              },
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
        [SectionType.MERCH]: {
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
        [SectionType.GAZA_SUPPORT]: {
          populate: {
            gazaSupport: {
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

export const fetchGlobalData = async () => {
  const url = buildUrl('global', globalQueryParams);
  return await fetchData(url);
};

export const fetchLandingPage = async () => {
  const url = buildUrl('landing-page', landingPageQueryParams);
  return await fetchData(url);
};

export const fetchDynamicPage = async (slug: string) => {
  const url = buildUrl(slug, landingPageQueryParams);
  return await fetchData(url);
};
