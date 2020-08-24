/**
 *
 * AuthForm
 *
 */
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Container, Box } from '@material-ui/core';
import { ReactComponent as Logo } from '../Logo/logo.svg';

interface Props {
  handleSubmit: any;
  auth: object;
}

export const AuthForm = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  return (
    <Container maxWidth="sm">
      <Box
        height="100vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        component="form"
        onSubmit={e => {
          e.preventDefault();
          props.handleSubmit(formData);
        }}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          border={1}
          borderColor="primary"
          paddingX={6}
          paddingY={7}
        >
          <Box width="50%" marginBottom={4} clone color="primary">
            <Logo />
          </Box>

          <Box width="100%" marginBottom={4}>
            <TextField
              type="email"
              margin="dense"
              variant="outlined"
              label="E-mail"
              placeholder="E-mail"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </Box>
          <Box width="100%" marginBottom={4}>
            <TextField
              type="password"
              color="primary"
              margin="dense"
              variant="outlined"
              label={t('Password')}
              placeholder={t('Password')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={e =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </Box>

          <Button variant="contained" color="primary" fullWidth type="submit">
            {t('Login')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
});
