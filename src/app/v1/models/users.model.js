'use strict';

//* REQUIRE
const { InternalServerError } = require('../../../cores/error.response');
const knexInstance = require('../../../dbs/init.knex').getDatabase();

class UserModels {
  async getInfoUser(fields, returnFields) {
    try {
      const result = await knexInstance('users').where(fields).select(returnFields).first();
      return result;
    } catch (_) {
      throw new InternalServerError();
    }
  }
}

module.exports = new UserModels();
