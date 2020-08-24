/**
 *
 * Asynchronously loads the component for AuthForm
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AuthForm = lazyLoad(
  () => import('./index'),
  module => module.AuthForm,
);
