import Prismic from 'prismic-javascript';

import { structure } from './fetchLinks';

const API_ENDPOINT = 'https://frontend-spring.cdn.prismic.io/api/v2';

function getApi () {
  return Prismic.getApi(API_ENDPOINT);
}

export default async function fetchPage() {
  const api = await getApi();

  const { data } = await api.getByUID('pag', 'home', { 
    'fetchLinks': [...structure]
  });
  
  return data;
}
