/**
 *
 * Asynchronously loads the component for Navers
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Navers = lazyLoad(
  () => import('./index'),
  module => module.Navers,
);
