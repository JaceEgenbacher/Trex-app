import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const TableView = ({cups}) => {

    const classes = useStyles();

    return (
        <TableContainer  component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">TableID</TableCell>
                <TableCell align="right">CupID</TableCell>
                <TableCell align="right">Level</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cups.map((cup) => (
                <TableRow key={cup.tableid}>
                   <TableCell component="th" scope="row" align = "right"> {cup.tableid} </TableCell>
                  <TableCell align="right">{cup.cupid}</TableCell>
                  <TableCell align="right">{cup.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
};

export default TableView;