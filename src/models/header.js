import { getLink } from '../utils';

export default function hero({ title, links }) {
  return {
    title,
    links: links.map(({link}) => getLink(link))
  }
}