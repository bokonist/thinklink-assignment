/* eslint-disable import/no-dynamic-require */
const wineData = [
  {
    id: 1,
    product: 'Stagin Family Vineyard',
    avgRating: 'RP 95 +3',
    vintage: '1950',
    qty: '04',
    volume: 'Standard(750 ml)',
    cost: '$56.95',
    price: '$59.95',
    region: 'France',
    ratings: [
      {
        name: "James Suckling's",
        rating: 'JS 95',
      },
      {
        name: 'Robert Parker',
        rating: 'RP 80',
      },
      {
        name: 'Wine Spectator Tasting',
        rating: 'WS 79',
      },
      {
        name: "Antonio Galloni's",
        rating: '---',
      },
    ],
    stocks: [
      { name: 'Possimus', quantity: 43 },
      { name: 'DowntownCondo', quantity: 95 },
    ],
    // eslint-disable-next-line global-require
    imageData: require('../assets/wines/staglin1.png'),
  },
  {
    id: 2,
    product: 'Bibi Graetz Testamatta',
    avgRating: 'RP 95 +3',
    vintage: '2015',
    qty: '32',
    volume: 'Magnum (1500 mL)',
    cost: '$71.95',
    price: '$72.95',
    region: 'Chianti · Blends and Other',
    ratings: [
      {
        name: "James Suckling's",
        rating: 'JS 95',
      },
      {
        name: 'Robert Parker',
        rating: 'RP 80',
      },
      {
        name: 'Wine Spectator Tasting',
        rating: 'WS 79',
      },
      {
        name: "Antonio Galloni's",
        rating: '---',
      },
    ],
    stocks: [
      { name: 'Possimus', quantity: 43 },
      { name: 'DowntownCondo', quantity: 95 },
    ],
    // eslint-disable-next-line global-require
    imageData: require('../assets/wines/bibi1.png'),
  },
  {
    id: 3,
    product: 'Cayuse Syrah en Chamber',
    avgRating: 'RP 95 +3',
    vintage: '2012',
    qty: '12',
    volume: 'Standard (750 mL)',
    cost: '$139.95',
    price: '$150.95',
    region: 'United States · California · Blends',
    ratings: [
      {
        name: "James Suckling's",
        rating: 'JS 95',
      },
      {
        name: 'Robert Parker',
        rating: 'RP 80',
      },
      {
        name: 'Wine Spectator Tasting',
        rating: 'WS 79',
      },
      {
        name: "Antonio Galloni's",
        rating: '---',
      },
    ],
    stocks: [
      { name: 'Possimus', quantity: 43 },
      { name: 'DowntownCondo', quantity: 95 },
    ],
    // eslint-disable-next-line global-require
    imageData: require('../assets/wines/cayuse1.png'),
  },
];
export default wineData;
