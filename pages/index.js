import Grid from '@material-ui/core/Grid';
import TableView from '../components/TableView';
import Table from '../components/Table';

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
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={9}>
        <Table></Table>
      </Grid>
      <Grid item xs={3}>
        <TableView></TableView>
      </Grid>
    </Grid>
  );
};

export default Index;
