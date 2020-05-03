import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Alltogether from '../components/Alltogether';
import { Pie } from 'react-chartjs-2';

const Stats = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [20, 45, 7],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  return (
    <Container maxWidth={false} disableGutters={false}>
      <Grid container item xs={12}>
        <Alltogether />
      </Grid>
      <Grid container item xs={12}>
        <Pie data={data} />
      </Grid>
    </Container>
  );
};

export default Stats;
