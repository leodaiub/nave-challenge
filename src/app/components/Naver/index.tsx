/**
 *
 * Naver
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Naver as NaverType } from 'app/containers/Navers/types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { EditSharp, DeleteSharp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface Props {
  naver: NaverType;
  handleModal: any;
}

export function Naver(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Box
      key={props.naver.id}
      maxWidth="100%"
      display="flex"
      flexDirection="column"
      onClick={e => {
        e.stopPropagation();
        props.handleModal('naverModal', { naverId: props.naver.id });
      }}
    >
      <img src={props.naver.url} alt="naver" height="300" width="300" />
      <Box fontWeight={900} clone>
        <Typography variant="inherit">{props.naver.name}</Typography>
      </Box>
      <Box fontWeight="200" clone>
        <Typography variant="inherit">{props.naver.job_role}</Typography>
      </Box>

      <Box marginRight={-3}>
        <IconButton
          edge="start"
          onClick={e => {
            e.stopPropagation();
            props.handleModal('deleteDialog', { naverId: props.naver.id });
          }}
        >
          <DeleteSharp color="primary" />
        </IconButton>
        <Link
          to={'navers/edit/' + props.naver.id}
          onClick={e => e.stopPropagation()}
        >
          <IconButton edge="start">
            <EditSharp color="primary" />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
