import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Alltogether from '../components/Alltogether';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';


function stringToColor(str) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var colour = '#';

  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }

  return colour;
}



const Stats = () => {
  
  
  
  const data = {
    labels: ['Coke', 'Dr. Pepper', 'Pepsi', 'Root Beer', 'Sprite', 'Cream Soda', 'Tea'],
    datasets: [
      {
        data: [10, 10, 7, 13, 6, 9, 3],
        backgroundColor: [
          '#c70000',
          '#fc761d',
          '#fce459',
          '#03d315',
          '#02149c',
          '#f41dfc',
          '#dd0336',
        ],
        hoverBackgroundColor: [
          '#c70000',
          '#fc761d',
          '#fce459',
          '#03d315',
          '#02149c',
          '#f41dfc',
          '#dd0336',
        ],
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
