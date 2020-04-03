import Grid from '@material-ui/core/Grid';
import TablesCanvas from '../components/TablesCanvas';
import CupsList from '../components/CupsList';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { startClock } from '../store';

import fakeApiCall from '../lib/fakeApi';
import actionTypes from '../lib/actionTypes';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fakeApiCall().then(({ tables }) => {
      dispatch({ type: actionTypes.UPDATE_TABLES, tables });
    });

    let timer = setInterval(async () => {
      try {
        const { tables } = await fakeApiCall();
        dispatch({ type: actionTypes.UPDATE_TABLES, tables });
      } catch (err) {
        console.error(err);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Grid container spacing={0}>
      <Grid item xs={9}>
        <TablesCanvas />
      </Grid>
      <Grid item xs={3}>
        <CupsList />
      </Grid>
    </Grid>
  );
};

export default Index;
