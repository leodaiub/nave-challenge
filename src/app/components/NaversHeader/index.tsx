/**
 *
 * NaversHeader
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { ReactComponent as Logo } from '../Logo/Navers.svg';
import { Link } from 'react-router-dom';

interface Props {}

export const NaversHeader = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Box boxShadow={0} clone marginY={3}>
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box color="primary" clone>
              <Logo width="140" height="50" />
            </Box>

            <Box padding={4} clone>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/navers/create"
              >
                {t('Add Naver')}
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
