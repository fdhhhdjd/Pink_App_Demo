const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

// Danh sách các loại xe điện
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

function generateRandomOrder() {
  const device_id = `pink_app_${uuidv4().split('-')[0]}`;
  const customer_name = faker.name.fullName(); // Tạo tên người Việt Nam

  const unit_price = getRandomInt(10000, 100000); // Đơn giá ngẫu nhiên từ 10,000 đến 100,000 VND

  const rental_start = faker.date.past(1); // Ngày bắt đầu thuê trong vòng 1 năm trở lại
  const rental_duration_hours = getRandomInt(1, 24); // Thời gian thuê từ 1 đến 24 giờ
  const rental_end = new Date(rental_start.getTime() + rental_duration_hours * 60 * 60 * 1000);

  const total_price = unit_price * rental_duration_hours; // Tổng tiền dựa trên giờ thuê

  const order_status = faker.helpers.arrayElement([
    10, // pending
    20, // confirmed
    30, // completed
    40, // cancelled
  ]);

  const vehicle_type = faker.helpers.arrayElement(electricVehicleTypes); // Chọn ngẫu nhiên một loại xe từ danh sách

  return {
    device_id: device_id,
    customer_name: customer_name,
    unit_price: unit_price,
    total_price: total_price, // Tổng tiền là số nguyên
    rental_duration_hours: rental_duration_hours, // Thêm số giờ thuê
    order_status: order_status,
    rental_start: rental_start.toISOString().replace('T', ' ').substring(0, 19),
    rental_end: rental_end.toISOString().replace('T', ' ').substring(0, 19),
    vehicle_type: vehicle_type, // Thêm loại xe vào đơn hàng
  };
}

function generateRandomOrders(n) {
  const orders = [];
  for (let i = 0; i < n; i++) {
    orders.push(generateRandomOrder());
  }
  return orders;
}

module.exports = generateRandomOrders;
