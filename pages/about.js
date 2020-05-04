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
        <h1>What we are:</h1> <br></br> T-ReX is a coaster that is designed to ease the experience
        of dinning and working at restaurants. The coaster will weigh any drink
        that is placed onto it. The coaster works by having a small plate made
        of a hard plastic attached to a load sensor. All the customer must do is
        place a drink onto it and it'll work its magic. The employees will only
        be alerted by the system once a drink is below the minimum weight
        defined by the server. The system is meant to be mostly autonomous and
        require the least amount of human input as possible while still
        fulfilling its designed function.  <br></br> <br></br>
        How To Use:
        <br></br>
        1. Click on a table to view the drinks 
        <br></br>
        2. Click and drag table to edit the table layout 

      </Grid>
    </Container>
  );
};

export default About;
