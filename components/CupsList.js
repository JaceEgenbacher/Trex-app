import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../lib/actionTypes';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { drinkInfo } from '../lib/database';

import _ from 'lodash';

const useStyles = makeStyles({
  table: {},
});

function getDrinkDescription(drinkId) {
  const drink = _.find(drinkInfo, {
    drinkId,
  });

  if (drink) {
    return drink.drinkDescription;
  }

  return [drinkInfo];
}

function updateDrink(tables, cupId, drinkId) {
  const newTables = _.map(tables, (table) => {
    const newTable = { ...table };

    newTable.cups = _.map(table.cups, (cup) => {
      const newCup = { ...cup };

      if (cup.id === cupId) {
        newCup.drinkId = drinkId;
      }

      return newCup;
    });

    return newTable;
  });

  return {
    type: actionTypes.UPDATE_TABLES,
    tables: newTables,
  };
}

const CupsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { tables } = useSelector((state) => ({ tables: state.tables }), []);
  const displayTableID = useSelector((state) => state.displayTableId, null);

  const tableCups = tables.map((table) => {
    const newCups = table.cups.map((cup) => {
      const newCup = { ...cup, tableId: table.id };
      return newCup;
    });

    return newCups;
  });

  const cups = tableCups.flat();
  const selectedCups = cups.filter((cup) => {
    if (cup.tableId === displayTableID) return cup;
  });
  return (
    <TableContainer component={Card}>
      <Table stickyHeader className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Table ID</TableCell>
            <TableCell align="center">Cup ID</TableCell>
            <TableCell align="center">Level</TableCell>
            <TableCell align="center">Drink</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedCups.map((cup) => (
            <TableRow key={cup.id}>
              <TableCell align="center">{cup.tableId}</TableCell>
              <TableCell align="center">{cup.id}</TableCell>
              <TableCell align="center">{cup.level}</TableCell>

              <TableCell>
                <Select
                  value={getDrinkDescription(cup.drinkId)}
                  onChange={(evt, key, payload) =>
                    dispatch(updateDrink(tables, cup.id, key.key))
                  }
                  style={{ minWidth: 120 }}
                >
                  {drinkInfo.map((drink) => (
                    <MenuItem
                      key={drink.drinkId}
                      value={drink.drinkDescription}
                      alignItems="center"
                    >
                      {drink.drinkDescription}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CupsList;
