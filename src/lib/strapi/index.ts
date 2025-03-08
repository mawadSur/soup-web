import { SectionType } from '@/types';
import qs from 'qs';

const baseUrl = process.env.BASE_URL;

type QueryParams = {
  [key: string]: any;
};

export const buildUrl = (path: string, queryParams: QueryParams): string => {
  const query = qs.stringify(queryParams);
  const url = new URL(path, baseUrl);
  url.search = query;
  return url.href;
};

export const globalQueryParams = {
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

export const landingPageQueryParams = {
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
      },
    },
  },
};
