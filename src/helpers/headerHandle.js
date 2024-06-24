const getHeader = (headers, key) => {
  if (headers) {
    return headers[key.toLowerCase()];
  }
  return '';
};

// Get info headers
const getInfoHeaders = headers => {
  const params = {
    device_id: getHeader(headers, 'X-DEVICE-ID'),
    firebase_device_id: getHeader(headers, 'X-FIREBASE-DEVICE-ID'),
  };

  if (getHeader(headers, 'authorization')) {
    params.accessToken = getHeader(headers, 'authorization').split(' ')[1];
  }

  if (getHeader(headers, 'X-USER-UID')) {
    params.uid = getHeader(headers, 'X-USER-UID');
  }

  if (params) {
    return params;
  }

  console.error('Wrong header!', headers);
  return null;
};

module.exports = {
  getInfoHeaders,
};
