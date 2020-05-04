function randomFloat(min, max) {
  const randomNum = _.random(min, max, true);
  const randomNumRounded = _.round(randomNum, 2);
  return randomNumRounded;
}

export default function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        tables: [
          {
            id: 1,
            x: 0,
            y: 0,
            cups: [
              {
                id: 1,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 2,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 3,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 4,
                level: randomFloat(0.0, 1.0),
              },
            ],
          },
          {
            id: 2,
            x: 250,
            y: 0,
            cups: [
              {
                id: 5,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 6,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 7,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 8,
                level: randomFloat(0.0, 1.0),
              },
            ],
          },
          {
            id: 3,
            x: 500,
            y: 0,
            cups: [
              {
                id: 9,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 10,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 11,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 12,
                level: randomFloat(0.0, 1.0),
              },
              {
                id: 13,
                level: randomFloat(0.0, 1.0),
              },
            ],
          },
        ],
      });
    }, 0);
  });
}
