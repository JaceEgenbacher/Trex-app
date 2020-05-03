import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Alltogether from '../components/Alltogether';

const About = () => {
  return (
    <Container maxWidth={false} disableGutters={false}>
      <Grid container item xs={12}>
        <Alltogether />
      </Grid>
      <Grid container item xs={12}>
        Hello world about
      </Grid>
    </Container>
  );
};

export default About;
