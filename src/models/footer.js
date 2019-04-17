import { getLink } from '../utils';

export default function footer({description, links}) {
  return {
    description,
    links: links.map(({link}) => getLink(link))
  };
}