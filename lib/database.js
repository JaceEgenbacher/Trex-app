import _ from 'lodash';
import axios from 'axios';

async function getDataFromWebservice() {
  const response = await axios.all([
    axios.get('http://192.168.0.32/ws/coaster/select/star.php'),
    axios.get('http://192.168.0.32/ws/drinkInfo/select/star.php'),
    axios.get('http://192.168.0.32/ws/tableLayout/select/star.php'),
  ]);
  return response;
}

let tables = [];

let drinkInfo = [
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
    drinkDescription: 'Budwiser',
  },
  {
    drinkId: '14',
    drinkWeightTop: '9.8958',
    drinkWeightMiddle: '6.6892',
    drinkWeightBottom: '3.3258',
    drinkDescription: 'Micholob Ultra',
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

let tableLayoutJson = [];

let cupsJson = [
  { coasterId: '1', tableNumber: '2', drinkId: '3', drinkLevel: '0.5' },
  { coasterId: '2', tableNumber: '7', drinkId: '6', drinkLevel: '0.85' },
  { coasterId: '3', tableNumber: '16', drinkId: '10', drinkLevel: '0.25' },
  { coasterId: '4', tableNumber: '11', drinkId: '18', drinkLevel: '0.63' },
  { coasterId: '5', tableNumber: '17', drinkId: '19', drinkLevel: '0.96' },
  { coasterId: '6', tableNumber: '8', drinkId: '5', drinkLevel: '0.33' },
  { coasterId: '7', tableNumber: '1', drinkId: '4', drinkLevel: '0.76' },
  { coasterId: '8', tableNumber: '8', drinkId: '6', drinkLevel: '0.83' },
  { coasterId: '9', tableNumber: '7', drinkId: '7', drinkLevel: '0.34' },
  { coasterId: '10', tableNumber: '28', drinkId: '5', drinkLevel: '0.66' },
  { coasterId: '11', tableNumber: '14', drinkId: '17', drinkLevel: '0.07' },
  { coasterId: '12', tableNumber: '3', drinkId: '6', drinkLevel: '0.81' },
  { coasterId: '13', tableNumber: '3', drinkId: '1', drinkLevel: '0.9' },
  { coasterId: '14', tableNumber: '1', drinkId: '2', drinkLevel: '0.17' },
  { coasterId: '15', tableNumber: '2', drinkId: '6', drinkLevel: '0.75' },
  { coasterId: '16', tableNumber: '18', drinkId: '18', drinkLevel: '0.13' },
  { coasterId: '17', tableNumber: '24', drinkId: '17', drinkLevel: '0.36' },
  { coasterId: '18', tableNumber: '19', drinkId: '13', drinkLevel: '0.69' },
  { coasterId: '19', tableNumber: '18', drinkId: '9', drinkLevel: '0.77' },
  { coasterId: '20', tableNumber: '21', drinkId: '17', drinkLevel: '0.37' },
  { coasterId: '21', tableNumber: '25', drinkId: '16', drinkLevel: '0.05' },
  { coasterId: '22', tableNumber: '10', drinkId: '15', drinkLevel: '0.12' },
  { coasterId: '23', tableNumber: '5', drinkId: '15', drinkLevel: '0.82' },
  { coasterId: '85', tableNumber: '26', drinkId: '14', drinkLevel: '0.78' },
  { coasterId: '86', tableNumber: '16', drinkId: '7', drinkLevel: '0.34' },
  { coasterId: '87', tableNumber: '5', drinkId: '7', drinkLevel: '0.1' },
  { coasterId: '88', tableNumber: '9', drinkId: '16', drinkLevel: '0.03' },
  { coasterId: '89', tableNumber: '5', drinkId: '18', drinkLevel: '0.4' },
  { coasterId: '90', tableNumber: '12', drinkId: '12', drinkLevel: '0.53' },
  { coasterId: '91', tableNumber: '2', drinkId: '16', drinkLevel: '0.55' },
  { coasterId: '92', tableNumber: '3', drinkId: '7', drinkLevel: '0.88' },
  { coasterId: '93', tableNumber: '17', drinkId: '8', drinkLevel: '0.78' },
  { coasterId: '94', tableNumber: '6', drinkId: '8', drinkLevel: '0.27' },
  { coasterId: '95', tableNumber: '10', drinkId: '4', drinkLevel: '0.66' },
  { coasterId: '96', tableNumber: '27', drinkId: '14', drinkLevel: '0.42' },
  { coasterId: '97', tableNumber: '21', drinkId: '6', drinkLevel: '0.27' },
  { coasterId: '98', tableNumber: '5', drinkId: '9', drinkLevel: '0.21' },
  { coasterId: '99', tableNumber: '16', drinkId: '6', drinkLevel: '0.32' },
];

function getAllCups(data) {
  tables = [];
  //console.log(data);
  
  cupsJson = data[0].data;
  
  drinkInfo = data[1].data;
  
  tableLayoutJson = data[2].data;
  
  

  _.each(cupsJson, (coaster) => {
    let table = _.find(tables, { id: coaster.tableNumber });

    if (!table) {
      const tableLocation = _.find(tableLayoutJson, {
        tableNumber: coaster.tableNumber,
      });
      table = {
        id: coaster.tableNumber,
        x: tableLocation ? parseInt(tableLocation.xCordinate) : 30,
        y: tableLocation ? parseInt(tableLocation.yCordinate) : 30,
        cups: [],
      };

      tables.push(table);
    }

    table.cups.push({
      id: coaster.coasterId,
      level: coaster.drinkLevel,
      drinkId: coaster.drinkId,
    });
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
