const { faker } = require('@faker-js/faker');

const electricVehicleTypes = [
  0, // Vinfast VF e34
  1, // Tesla Model S
  2, //Kia Soul EV
  3, //'MG ZS EV',
  4, //'Volkswagen ID.3',
  5, //'Hyundai Kona Electric',
  6, //'Honda E',
  7, //'Nissan Leaf',
  8, //'Peugeot E-208',
  9, //'Polestar 2',
  10, //'Tesla Model 3',
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

function getRandomCoordinate() {
  const latitude = getRandomFloat(12.230138, 12.278786, 6);
  const longitude = getRandomFloat(109.102135, 109.177322, 6);
  return { latitude, longitude };
}

function getRandomStatus() {
  const statuses = [1, 2, 3, 4]; // 1: Free, 2: Đã có khách, 3: Hết pin, 4: Hỏng
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function getRandomBatteryStatus() {
  return getRandomInt(0, 100);
}

function getRandomCustomer() {
  const customers = [
    'Nguyen Van A',
    'Le Thi B',
    'Tran Van C',
    'Pham Thi D',
    'Do Van E',
    'Hoang Thi F',
    'Nguyen Tuan G',
    'Pham Van H',
    'Bui Thi I',
    'Doan Van J',
  ];
  return customers[Math.floor(Math.random() * customers.length)];
}

function getRandomPrice(hours) {
  // Adjust price based on hours
  return hours * getRandomInt(8000, 12000); // Adjust min and max price per hour as needed
}

function getRandomDuration() {
  const hours = getRandomInt(1, 24);
  return `${hours} hour${hours > 1 ? 's' : ''}`;
}

function generateRandomVehicle(id) {
  const { latitude, longitude } = getRandomCoordinate();
  const status = getRandomStatus();
  let customer_name = null;
  let unit_price = null;
  let total_price = null;
  let rental_duration = null;

  if (status === 2 || status === 3) {
    // Đã có khách or Hết pin
    customer_name = getRandomCustomer();
    if (status === 3) {
      // Hết pin: Generate price and rental duration
      unit_price = getRandomPrice(getRandomInt(1, 24)); // Random price for random hours
      total_price = unit_price * getRandomInt(1, 6);
      rental_duration = getRandomDuration();
    }
  }

  return {
    device_id: `pink_app_${id}`,
    status,
    battery_status: getRandomBatteryStatus(),
    customer_name,
    unit_price,
    total_price,
    vehicle_type: faker.helpers.arrayElement(electricVehicleTypes),
    rental_duration,
    latitude,
    longitude,
  };
}

function generateVehicleData(count) {
  const vehicles = [];
  for (let i = 1; i <= count; i++) {
    vehicles.push(generateRandomVehicle(i));
  }
  return vehicles;
}

module.exports = generateVehicleData;
