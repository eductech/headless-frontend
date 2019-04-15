import Hero from './Hero';

import {
  hero
} from '../models';

const components = {
  hero: {
    component: Hero,
    props: hero
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