'use strict';

//* REQUIRE
const { Ok } = require('../../../cores/success.response');
const OrderService = require('../services/order.service');

class OrderControllers {
  async getListOrder(_, res, __) {
    new Ok({
      metadata: await OrderService.listOrders(),
    }).send(res);
  }
}

module.exports = new OrderControllers();
