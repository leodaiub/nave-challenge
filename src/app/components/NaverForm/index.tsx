/**
 *
 * NaverForm
 *
 */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Button,
  Container,
  Box,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

import { ArrowBackIosSharp } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import { Naver } from 'app/containers/Navers/types';
interface Props {
  handleSubmit: any;
  title: string;
  naver?: Naver;
  showNaver?: any;
  loading?: boolean;
}

export const NaverForm = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '' as any,
    birthdate: '' as any,
    admission_date: '' as any,
    job_role: '' as any,
    project: '' as any,
    url: '' as any,
  });

  useEffect(() => {
    id && props.showNaver(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    id === props.naver?.id &&
      setFormData({
        name: props.naver?.name,
        birthdate: props.naver?.birthdate as any,
        admission_date: props.naver?.admission_date as any,
        job_role: props.naver?.job_role,
        project: props.naver?.project,
        url: props.naver?.url,
      });
  }, [id, props.naver]);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Container
        maxWidth="sm"
        component="form"
        onSubmit={e => {
          e.preventDefault();
          props.handleSubmit({ data: formData, id: props.naver?.id });
        }}
      >
        <Box marginY={5} width="100%">
          <Link
            to="/navers"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ArrowBackIosSharp color="primary" />
            <Typography variant="h5" color="primary">
              {props.title === 'Edit' ? t('Edit Naver') : t('Add Naver')}
            </Typography>
          </Link>
        </Box>
        {props.loading ? (
          <Box
            width="100%"
            height="30vh"
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        ) : (
          <Grid container wrap="wrap" justify="center" spacing={4}>
            <Grid item sm={6} xs={5}>
              <TextField
                value={formData.name}
                type="text"
                margin="dense"
                variant="outlined"
                label={t('Name')}
                placeholder={t('Name')}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item sm={6} xs={5}>
              <TextField
                value={formData.job_role}
                type="text"
                color="primary"
                margin="dense"
                variant="outlined"
                label={t('Role')}
                placeholder={t('Role')}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e =>
                  setFormData({ ...formData, job_role: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item sm={6} xs={5}>
              <DatePicker
                color="primary"
                margin="dense"
                label={t('Age')}
                placeholder={t('Age')}
                format="D/M/yyyy"
                inputVariant="outlined"
                value={formData.birthdate || null}
                helperText={t('Birth date')}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={date =>
                  setFormData({
                    ...formData,
                    birthdate: moment(date).format('D/M/yyyy'),
                  })
                }
                required
              />
            </Grid>
            <Grid item sm={6} xs={5}>
              <DatePicker
                color="primary"
                margin="dense"
                inputVariant="outlined"
                label={t('Age')}
                format="D/M/yyyy"
                placeholder={t('Age')}
                value={formData.admission_date || null}
                helperText={t('Admission date')}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={date =>
                  setFormData({
                    ...formData,
                    admission_date: moment(date).format('D/M/yyyy'),
                  })
                }
                required
              />
            </Grid>
            <Grid item sm={6} xs={5}>
              <TextField
                value={formData.project}
                type="text"
                color="primary"
                margin="dense"
                variant="outlined"
                label={t('Participated Projects')}
                placeholder={t('Participated Projects')}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e =>
                  setFormData({ ...formData, project: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item sm={6} xs={5}>
              <TextField
                value={formData.url}
                type="text"
                color="primary"
                margin="dense"
                variant="outlined"
                label={t('Naver photo URL')}
                placeholder={t('Naver photo URL')}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e =>
                  setFormData({ ...formData, url: e.target.value })
                }
                required
              />
            </Grid>
            <Grid container justify="flex-end" item sm={12} xs={12}>
              <Grid item sm={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  {t('Save')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </MuiPickersUtilsProvider>
  );
};
