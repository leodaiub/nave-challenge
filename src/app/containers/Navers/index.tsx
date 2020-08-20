/**
 *
 * Navers
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectNavers } from './selectors';
import { naversSaga } from './saga';

interface Props {}

export const Navers = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: naversSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navers = useSelector(selectNavers);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Navers</title>
        <meta name="description" content="Description of Navers" />
      </Helmet>
      <div>{t('')}</div>
    </>
  );
});
