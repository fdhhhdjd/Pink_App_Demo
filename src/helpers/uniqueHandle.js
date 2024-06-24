//* REQUIRE
const { getCurrentTimestamp, convertDateToTimestamp } = require('./timeHandle');
const { ConflictError, InternalServerError } = require('../../cores/error.response');

const handleUniqueConstraintError = error => {
  switch (error?.code) {
    case '23505':
      throw new ConflictError(`${error?.constraint}_unique`);
    default:
      throw new InternalServerError(error);
  }
};

const handleDeleteUnique = ({ dataUnique }) => {
  const prefix = 'deleted';
  const formattedDate = convertDateToTimestamp({ dateString: getCurrentTimestamp() });

  return `${prefix}-${formattedDate}-${dataUnique}`;
};

module.exports = {
  handleUniqueConstraintError,
  handleDeleteUnique,
};
