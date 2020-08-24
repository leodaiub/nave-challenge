/**
 *
 * DeleteDialog
 *
 */
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connectModal } from 'redux-modal';
import {
  Box,
  Typography,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import { InjectedProps } from 'redux-modal';
import { EditSharp, DeleteSharp, CloseSharp } from '@material-ui/icons';
import { Naver } from 'app/containers/Navers/types';
import moment from 'moment';
import { Link } from 'react-router-dom';

interface Props extends InjectedProps {
  show: boolean;
  handleHide: any;
  handleModal: any;
  naver: Naver;
  naverId: string;
  showNaver: any;
  loading: boolean;
}

function NaverModal(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  useEffect(() => {
    props.naverId && props.showNaver(props.naverId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.naverId]);

  return (
    <div>
      <Dialog
        maxWidth="md"
        open={props.show}
        onClose={props.handleHide}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {props.loading ? (
          <Box
            width="75"
            height="80vh"
            justifyContent="center"
            display="flex"
            alignItems="center"
            clone
          >
            <DialogContent>
              <CircularProgress />
            </DialogContent>
          </Box>
        ) : (
          <Box height="80vh" display="flex">
            <Box height="100%" width="50%" clone>
              <img src={props.naver?.url} alt="naver" />
            </Box>

            <Box height="80vh" width="50%" justifyContent="center">
              <DialogTitle id="alert-dialog-title">
                <Box
                  display="flex"
                  width="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="inherit">{props.naver?.name}</Typography>

                  <IconButton onClick={props.handleHide}>
                    <CloseSharp />
                  </IconButton>
                </Box>
              </DialogTitle>{' '}
              <DialogContent style={{ height: '80%' }}>
                {' '}
                <Box
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  height="100%"
                  justifyContent="space-between"
                >
                  <Box width="100%" fontWeight="200" clone>
                    <Typography variant="inherit">
                      {props.naver?.job_role}
                    </Typography>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Box width="100%" fontWeight={900} clone>
                      <Typography variant="inherit">{t('Age')}</Typography>
                    </Box>
                    <Box width="100%" fontWeight="200" clone>
                      <Typography variant="inherit">
                        {moment(props.naver?.birthdate).fromNow(true)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    {' '}
                    <Box width="100%" fontWeight={900} clone>
                      <Typography variant="inherit">
                        {t('Time in the company')}
                      </Typography>
                    </Box>
                    <Box width="100%" fontWeight="200" clone>
                      <Typography variant="inherit">
                        {moment(props.naver?.admission_date).fromNow(true)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" width="100%">
                    <Box width="100%" fontWeight={900} clone>
                      <Typography variant="inherit">
                        {t('Participated projects')}
                      </Typography>
                    </Box>
                    <Box width="100%" fontWeight="200" clone>
                      <Typography variant="inherit">
                        {props.naver?.project}
                      </Typography>
                    </Box>
                  </Box>

                  <Box marginRight={-3}>
                    <IconButton
                      edge="start"
                      onClick={() =>
                        props.handleModal('deleteDialog', {
                          naverId: props.naverId,
                        })
                      }
                    >
                      <DeleteSharp color="primary" />
                    </IconButton>
                    <Link
                      to={'navers/edit/' + props.naverId}
                      onClick={() => props.handleHide('naverModal')}
                    >
                      <IconButton edge="start">
                        <EditSharp color="primary" />
                      </IconButton>
                    </Link>
                  </Box>
                </Box>
              </DialogContent>
            </Box>
          </Box>
        )}
      </Dialog>
    </div>
  );
}
export default connectModal({ name: 'naverModal' })(NaverModal);
