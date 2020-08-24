/**
 *
 * Auth
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './slice';
import { selectAuth } from './selectors';
import { AuthForm } from 'app/components/AuthForm';
import { Redirect } from 'react-router-dom';

interface Props {}

export const Auth = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const auth = useSelector(selectAuth);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Auth" />
      </Helmet>
      {auth.authenticated && <Redirect to="/navers" />}
      <AuthForm handleSubmit={e => dispatch(actions.login(e))} auth={auth} />
    </>
  );
});
