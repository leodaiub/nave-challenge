/**
 *
 * Auth
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectAuth } from './selectors';
import { authSaga } from './saga';

interface Props {}

export const Auth = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const auth = useSelector(selectAuth);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Auth</title>
        <meta name="description" content="Description of Auth" />
      </Helmet>
      <div>{t('')}</div>
    </>
  );
});
