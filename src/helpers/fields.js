//* LIB
const _ = require('lodash');

const filterFields = inputData => {
  const fieldsToUpdate = _.pickBy(inputData, _.identity);
  return fieldsToUpdate;
};
module.exports = {
  filterFields,
};
