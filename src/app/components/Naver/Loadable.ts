/**
 *
 * Asynchronously loads the component for Naver
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Naver = lazyLoad(
  () => import('./index'),
  module => module.Naver,
);
