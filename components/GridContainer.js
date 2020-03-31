import React from 'react';
import Grid from '@material-ui/core/Grid';
import TableView from './TableView';
import Table from './Table';

import { useSelector } from 'react-redux';

const GridContainer = () => {
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

export default GridContainer;
