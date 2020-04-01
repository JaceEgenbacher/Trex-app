import Grid from '@material-ui/core/Grid';

import TablesCanvas from '../components/TablesCanvas';
import CupsList from '../components/CupsList';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { startClock } from '../store';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = startClock(dispatch);

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
