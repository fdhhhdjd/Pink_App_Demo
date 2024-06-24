'use strict';

//* REQUIRE
const { TABLES } = require('../../../commons/constants');
const { InternalServerError } = require('../../../cores/error.response');
const knexInstance = require('../../../dbs/init.knex').getDatabase();

class UserModels {
  async getInfoUser({ email }, returnFields) {
    try {
      const result = await knexInstance(TABLES.USERS)
        .where(builder => {
          if (email) builder.orWhere('email', email);
        })
        .andWhere('is_deleted', false)
        .select(returnFields)
        .first();
      return result;
    } catch (_) {
      throw new InternalServerError();
    }
  }
}

module.exports = new UserModels();
