import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TablesCanvas from '../components/TablesCanvas';
import CupsList from '../components/CupsList';
import TableDetails from '../components/TableDetails';

import { useEffect } from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startClock } from '../store';

import fakeApiCall from '../lib/fakeApi';
import actionTypes from '../lib/actionTypes';
import getAllCups from '../lib/database';

const Index = () => {
  const dispatch = useDispatch();
  const tables = getAllCups();
  useEffect(() => {
    /*
    fakeApiCall().then(({ tables }) => {
      dispatch({ type: actionTypes.UPDATE_TABLES, tables });
    });  */

    dispatch({ type: actionTypes.UPDATE_TABLES, tables });

    /*
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
    }; */
  });

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <TablesCanvas />
        </Grid>
        <Grid item xs={3}>
          <CupsList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
