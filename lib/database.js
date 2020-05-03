import _ from 'lodash';
import axios from 'axios';

async function getDataFromWebservice() {
  const response = await axios.all([
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments'),
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments'),
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments'),
  ]);
  return response;
}

let tables = [];

let drinkInfo = [];

let tableLayoutJson = [];

let cupsJson = [];

function getAllCups(data) {
  console.log(data);

  _.each(cupsJson, (coaster) => {
    let table = _.find(tables, { id: coaster.tableNumber });

    if (!table) {
      const tableLocation = _.find(tableLayoutJson, {
        tableNumber: coaster.tableNumber,
      });
      table = {
        id: coaster.tableNumber,
        x: tableLocation ? tableLocation.x : 0,
        y: tableLocation ? tableLocation.y : 0,
        cups: [],
      };

      tables.push(table);
    }

    table.cups.push({
      id: coaster.coasterId,
      level: coaster.drinkLevel,
      drinkId: coaster.drinkId,
    });

    return table;
  });
}

export default function ApiCall() {
  getDataFromWebservice().then((data) => getAllCups(data));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        tables: tables,
      });
    }, 0);
  });
}

export { drinkInfo };
