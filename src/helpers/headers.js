const getHeader = (headers, key) => {
  if (headers) {
    return headers[key.toLowerCase()];
  }
  return '';
};

const getInfoHeaders = headers => {
  const params = {};

  if (getHeader(headers, 'authorization')) {
    params.accessToken = getHeader(headers, 'authorization').split(' ')[1];
  }

  if (params) {
    return params;
  }
  console.error('Wrong header!', headers);
  return null;
};

module.exports = { getInfoHeaders };
