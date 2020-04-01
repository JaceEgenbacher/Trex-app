import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {},
});

const CupsList = () => {
  const classes = useStyles();

  const { tables } = useSelector((state) => ({ tables: state.tables }), []);

  const tableCups = tables.map((table) => {
    const newCups = table.cups.map((cup) => {
      const newCup = { ...cup, tableId: table.id };
      return newCup;
    });

    return newCups;
  });

  const cups = tableCups.flat();

  return (
    <TableContainer component={Card}>
      <Table stickyHeader className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Table ID</TableCell>
            <TableCell align="center">Cup ID</TableCell>
            <TableCell align="center">Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cups.map((cup) => (
            <TableRow key={cup.id}>
              <TableCell align="center">{cup.tableId}</TableCell>
              <TableCell align="center">{cup.id}</TableCell>
              <TableCell align="center">{cup.level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CupsList;
