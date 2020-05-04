import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TablesCanvas from '../components/TablesCanvas';
import CupsList from '../components/CupsList';
import TableDetails from '../components/TableDetails';
import Container from '@material-ui/core/Container';

import { useEffect } from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startClock } from '../store';

import fakeApiCall from '../lib/fakeApi';
import actionTypes from '../lib/actionTypes';
import ApiCall from '../lib/database';
import Alltogether from '../components/Alltogether';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    ApiCall().then(({ tables }) => {
      dispatch({ type: actionTypes.UPDATE_TABLES, tables });
    });

    let timer = setInterval(async () => {
      try {
        const { tables } = await ApiCall();
        dispatch({ type: actionTypes.UPDATE_TABLES, tables });
      } catch (err) {
        console.error(err);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <Container maxWidth={false} disableGutters={false}>
        <Grid container item xs={12}>
          <Alltogether />
        </Grid>
        <Grid container item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={8}>
              <TablesCanvas />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CupsList />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
