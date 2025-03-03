import { fetchData } from '@/lib/fetch';
import { buildUrl, globalQueryParams, landingPageQueryParams } from '@/lib/strapi';

export const getGlobalData = async () => {
  const url = buildUrl('global', globalQueryParams);
  return await fetchData(url);
};

export const getLandingPage = async () => {
  const url = buildUrl('landing-page', landingPageQueryParams);
  return await fetchData(url);
};

export const getDynamicPage = async (slug: string) => {
  const url = buildUrl(slug, landingPageQueryParams);
  return await fetchData(url);
};
