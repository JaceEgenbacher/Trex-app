/*export default function getAllCups() {
  const axios = require('axios');

  axios
    .get('http://teamrefilexpress.epizy.com/ws/coaster/select/star.php')
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
    });
}*/

import _ from 'lodash';

const drinkInfo = [
  {
    drinkId: '1',
    drinkWeightTop: '8.6482',
    drinkWeightMiddle: '2.332',
    drinkWeightBottom: '4.8845',
    drinkDescription: 'Coke',
  },
  {
    drinkId: '2',
    drinkWeightTop: '9.0185',
    drinkWeightMiddle: '6.4073',
    drinkWeightBottom: '3.9682',
    drinkDescription: 'Dr. Pepper',
  },
  {
    drinkId: '3',
    drinkWeightTop: '8.0375',
    drinkWeightMiddle: '7.0165',
    drinkWeightBottom: '3.3165',
    drinkDescription: 'Pepsi',
  },
  {
    drinkId: '4',
    drinkWeightTop: '9.9215',
    drinkWeightMiddle: '7.4139',
    drinkWeightBottom: '2.8754',
    drinkDescription: 'Root Beer',
  },
  {
    drinkId: '5',
    drinkWeightTop: '7.66',
    drinkWeightMiddle: '5.7599',
    drinkWeightBottom: '2.7875',
    drinkDescription: 'Sprite',
  },
  {
    drinkId: '6',
    drinkWeightTop: '8.4772',
    drinkWeightMiddle: '6.3121',
    drinkWeightBottom: '2.9147',
    drinkDescription: 'Cream Soda',
  },
  {
    drinkId: '7',
    drinkWeightTop: '9.515',
    drinkWeightMiddle: '5.3701',
    drinkWeightBottom: '2.7342',
    drinkDescription: 'Tea',
  },
  {
    drinkId: '8',
    drinkWeightTop: '7.7116',
    drinkWeightMiddle: '6.6533',
    drinkWeightBottom: '2.5209',
    drinkDescription: 'Diet Coke',
  },
  {
    drinkId: '9',
    drinkWeightTop: '8.6266',
    drinkWeightMiddle: '6.4678',
    drinkWeightBottom: '3.5161',
    drinkDescription: 'Diet Dr. Pepper',
  },
  {
    drinkId: '10',
    drinkWeightTop: '9.6626',
    drinkWeightMiddle: '6.2472',
    drinkWeightBottom: '2.5547',
    drinkDescription: 'Diet Pepsi',
  },
  {
    drinkId: '11',
    drinkWeightTop: '9.6076',
    drinkWeightMiddle: '6.1783',
    drinkWeightBottom: '4.9087',
    drinkDescription: 'Diet Sprite',
  },
  {
    drinkId: '12',
    drinkWeightTop: '9.2199',
    drinkWeightMiddle: '5.1884',
    drinkWeightBottom: '3.3736',
    drinkDescription: 'Bud Light',
  },
  {
    drinkId: '13',
    drinkWeightTop: '8.0522',
    drinkWeightMiddle: '6.7408',
    drinkWeightBottom: '4.547',
    drinkDescription: 'Budweiser',
  },
  {
    drinkId: '14',
    drinkWeightTop: '9.8958',
    drinkWeightMiddle: '6.6892',
    drinkWeightBottom: '3.3258',
    drinkDescription: 'Michelob Ultra',
  },
  {
    drinkId: '15',
    drinkWeightTop: '9.0065',
    drinkWeightMiddle: '5.0632',
    drinkWeightBottom: '4.5225',
    drinkDescription: 'Red Wine',
  },
  {
    drinkId: '16',
    drinkWeightTop: '9.6186',
    drinkWeightMiddle: '6.3292',
    drinkWeightBottom: '3.3291',
    drinkDescription: 'White Wine ',
  },
  {
    drinkId: '17',
    drinkWeightTop: '9.7066',
    drinkWeightMiddle: '7.2043',
    drinkWeightBottom: '4.3181',
    drinkDescription: 'Rose',
  },
  {
    drinkId: '18',
    drinkWeightTop: '7.7036',
    drinkWeightMiddle: '5.156',
    drinkWeightBottom: '4.6938',
    drinkDescription: 'Margirita',
  },
  {
    drinkId: '19',
    drinkWeightTop: '8.9596',
    drinkWeightMiddle: '6.4667',
    drinkWeightBottom: '4.1978',
    drinkDescription: 'Water',
  },
];

export default function getAllCups() {
  const cupsJson = [
    { coasterId: '19', tableNumber: '16', drinkId: '2', drinkLevel: '0.73' },
    { coasterId: '29', tableNumber: '5', drinkId: '3', drinkLevel: '0.89' },
    { coasterId: '50', tableNumber: '3', drinkId: '3', drinkLevel: '0.1' },
    { coasterId: '58', tableNumber: '4', drinkId: '8', drinkLevel: '0.2' },
    { coasterId: '67', tableNumber: '5', drinkId: '18', drinkLevel: '0.69' },
    { coasterId: '84', tableNumber: '16', drinkId: '4', drinkLevel: '0.55' },
  ];

  const tables = [
    {
      id: 1,
      x: 0,
      y: 0,
      cups: [
        {
          id: 1,
          level: 1,
          drinkId: '1',
        },
        {
          id: 2,
          level: 1,
          drinkId: '1',
        },
        {
          id: 3,
          level: 1,
          drinkId: '1',
        },
        {
          id: 4,
          level: 1,
          drinkId: '1',
        },
      ],
    },
  ];

  _.each(cupsJson, (coaster) => {
    let table = _.find(tables, { id: coaster.tableNumber });

    if (!table) {
      table = {
        id: coaster.tableNumber,
        x: 0,
        y: 0,
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

  return tables;
}

export { drinkInfo };
