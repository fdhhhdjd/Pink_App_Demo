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
  const customers = ['Nguyen Van A', 'Le Thi B', 'Tran Van C', 'Pham Thi D', 'Do Van E'];
  return customers[Math.floor(Math.random() * customers.length)];
}

function getRandomPrice() {
  return getRandomInt(10000, 100000);
}

function getRandomDuration() {
  const durations = ['1 hour', '2 hours', '4 hours', '6 hours'];
  return durations[Math.floor(Math.random() * durations.length)];
}

function generateRandomVehicle(id) {
  const { latitude, longitude } = getRandomCoordinate();
  const status = getRandomStatus();
  const customer_name = getRandomCustomer();
  const unit_price = getRandomPrice();
  const total_price = unit_price * getRandomInt(1, 6);
  const rental_duration = getRandomDuration();

  return {
    device_id: `pink_app_${id}`,
    status,
    battery_status: getRandomBatteryStatus(),
    customer_name,
    unit_price,
    total_price,
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
