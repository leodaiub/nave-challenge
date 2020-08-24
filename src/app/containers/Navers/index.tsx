/**
 *
 * Navers
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectNavers } from './selectors';
import { naversSaga } from './saga';
import { Grid, Container, Box } from '@material-ui/core';
import { Header } from 'app/components/Header';
import { Naver } from 'app/components/Naver';
import { selectAuth } from '../Auth/selectors';
import { actions as authActions } from '../Auth/slice';
import { NaversHeader } from 'app/components/NaversHeader';
import { show } from 'redux-modal';
import DeleteDialog from 'app/components/DeleteDialog';
import InfoDialog from 'app/components/InfoDialog';
import NaverModal from 'app/components/NaverModal';
import Pagination from '@material-ui/lab/Pagination';
import { NaverForm } from 'app/components/NaverForm';
import { useLocation } from 'react-router-dom';

interface Props {}

export const Navers = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: naversSaga });
  const navers = useSelector(selectNavers);
  const auth = useSelector(selectAuth);
  const [page, setPage] = React.useState(1);
  const PER_PAGE = 4;
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(actions.getNavers());
  }, [dispatch]);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleOpen = (name: string, props: any) => {
    dispatch(show(name, props));
  };

  return (
    <>
      <Helmet>
        <title>Navers</title>
        <meta name="description" content="Description of Navers" />
      </Helmet>
      <Header
        authenticated={auth.authenticated}
        logout={() => dispatch(authActions.logout())}
      />
      {pathname.includes('create') ? (
        <NaverForm
          title="Create"
          handleSubmit={data => dispatch(actions.createNaver(data))}
        />
      ) : pathname.includes('edit') ? (
        <NaverForm
          title="Edit"
          showNaver={id => dispatch(actions.showNaver(id))}
          naver={navers.naver}
          loading={navers.loading}
          handleSubmit={data => dispatch(actions.updateNaver(data))}
        />
      ) : (
        <>
          <NaversHeader />
          <Container maxWidth="xl">
            <Grid container spacing={2} wrap="wrap" justify="center">
              {navers.navers
                .slice((page - 1) * PER_PAGE, page * PER_PAGE)
                .map(naver => (
                  <Grid item sm={3}>
                    <Naver naver={naver} handleModal={handleOpen} />
                  </Grid>
                ))}
            </Grid>
            <Box width="100%" display="flex" justifyContent="center">
              <Pagination
                color="primary"
                count={Math.ceil(navers.navers.length / PER_PAGE)}
                page={page}
                onChange={handleChange}
              />
            </Box>
          </Container>
        </>
      )}

      <InfoDialog />
      <DeleteDialog handleDelete={id => dispatch(actions.deleteNaver(id))} />
      <NaverModal
        loading={navers.loading}
        showNaver={id => dispatch(actions.showNaver(id))}
        naver={navers.naver}
        handleModal={handleOpen}
      />
    </>
  );
});
