'use strict';

const generateRandomOrders = require('../../../helpers/randomOrder');

class OrderService {
  static async listOrders() {
    return generateRandomOrders(25);
  }
}

module.exports = OrderService;
