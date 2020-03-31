import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TableView from '../src/components/TableView';
import { Button } from '@material-ui/core';
import { useState } from 'react';

function Trex({ initialCups }) {
  const [cups, setCups] = useState(initialCups);

  function refresh() {
    setCups([
      { tableid: 1, cupid: 1, level: 1 },
      { tableid: 1, cupid: 2, level: 1 },
      { tableid: 12, cupid: 1, level: 1 },
      { tableid: 23, cupid: 1, level: 1 },
    ]);
  }
  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom align="center">
        Trex
      </Typography>
      <TableView cups={cups} />

      <div align="center">
        <Button color="primary" onClick={refresh}>
          Refresh
        </Button>
      </div>
    </div>
  );
}

Trex.propTypes = { initialCups: PropTypes.array };

//this will be getServerProps
export async function getStaticProps(context) {
  return {
    props: {
      initialCups: [
        { tableid: 1, cupid: 1, level: 0.2 },
        { tableid: 1, cupid: 2, level: 0.2 },
        { tableid: 12, cupid: 1, level: 0.2 },
        { tableid: 23, cupid: 1, level: 0.2 },
      ],
    },
  };
}

export default Trex;
