import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Auth } from './containers/Auth';
import { PrivateRoute } from './components/PrivateRoute';
import { Navers } from './containers/Navers/Loadable';
import { actions as authActions } from './containers/Auth/slice';
import { useDispatch, useSelector } from 'react-redux';
import { reducer, sliceKey } from './containers/Auth/slice';
import { authSaga } from './containers/Auth/saga';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { selectAuth } from './containers/Auth/selectors';
import { reducer as modal } from 'redux-modal';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import 'moment/locale/pt-br';
import 'moment/locale/es';

export function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectReducer({ key: 'modal', reducer: modal });
  useInjectSaga({ key: sliceKey, saga: authSaga });
  const auth = useSelector(selectAuth);
  React.useEffect(() => {
    dispatch(authActions.checkAuth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  moment.locale(i18n.language);
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Nave.rs Challenge" defaultTitle="">
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={Auth} />
        <PrivateRoute exact path="/navers/create" component={Navers} />
        <PrivateRoute exact path="/navers/edit/:id" component={Navers} />
        <PrivateRoute exact path="/navers" component={Navers} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
