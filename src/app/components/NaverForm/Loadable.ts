/**
 *
 * Asynchronously loads the component for NaverForm
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NaverForm = lazyLoad(
  () => import('./index'),
  module => module.NaverForm,
);
