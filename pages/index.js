import Grid from '@material-ui/core/Grid';
import TableView from '../components/TableView';
import Table from '../components/Table';

const Index = () => {
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
