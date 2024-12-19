import qs from 'qs';
import { fetchData } from '@/lib/fetch';
import { SectionType } from '@/types';

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
  });

  const url = new URL(path, baseUrl);
  url.search = query;

  const data = await fetchData(url.href);

  return data;
};
