import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

import {
  header,
  hero,
  footer
} from '../models';

const components = {
  header: {
    component: Header,
    props: header
  },
  hero: {
    component: Hero,
    props: hero
  },
  footer: {
    component: Footer,
    props: footer
  }
}

export const componentsList = Object.keys(components);

export function findComponent ({ data, type}) {
  const key = componentsList.find(c => c === type);
  const spec = components[key];
  if (!spec) {
    return {};
  }
  return { 
    key, 
    Component: spec.component,
    props: spec.props(data)
  };
}

export default components;