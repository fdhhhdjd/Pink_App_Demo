const { v4: uuidv4 } = require('uuid');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePhoneNumber() {
  const prefixes = ['090', '091', '092', '093', '094', '095', '096', '097', '098', '099'];
  const prefix = prefixes[getRandomInt(0, prefixes.length - 1)];
  const suffix = getRandomInt(1000000, 9999999);
  return `${prefix}${suffix}`;
}

function removeVietnameseTones(str) {
  const accents = 'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ';
  const accentsOut = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd';
  return str
    .split('')
    .map((char, __) => {
      const accentIndex = accents.indexOf(char);
      return accentIndex !== -1 ? accentsOut[accentIndex] : char;
    })
    .join('');
}

function generateEmail(name) {
  const domain = ['gmail.com', 'yahoo.com', 'outlook.com'];
  const cleanName = removeVietnameseTones(name);
  const emailName = cleanName.toLowerCase().replace(/\s+/g, '.');
  const emailDomain = domain[getRandomInt(0, domain.length - 1)];
  return `${emailName}@${emailDomain}`;
}

function generateFullname() {
  const surnames = [
    'Nguyễn',
    'Trần',
    'Lê',
    'Phạm',
    'Hoàng',
    'Phan',
    'Vũ',
    'Đặng',
    'Bùi',
    'Đỗ',
    'Hồ',
    'Ngô',
    'Dương',
    'Lý',
  ];
  const middleNames = [
    'Thị',
    'Văn',
    'Minh',
    'Hữu',
    'Quang',
    'Ngọc',
    'Công',
    'Khắc',
    'Bảo',
    'Anh',
    'Duy',
    'Hoài',
    'Tuấn',
    'Kỳ',
  ];
  const names = [
    'Hoa',
    'Lan',
    'Cường',
    'Đức',
    'Phương',
    'Thu',
    'Hằng',
    'Hùng',
    'Khoa',
    'Linh',
    'Nga',
    'Nam',
    'Trang',
    'Yến',
    'Tài',
  ];

  const surname = surnames[Math.floor(Math.random() * surnames.length)];
  const middleName = middleNames[Math.floor(Math.random() * middleNames.length)];
  const name = names[Math.floor(Math.random() * names.length)];

  return {
    full: `${surname} ${middleName} ${name}`,
    name: removeVietnameseTones(name),
  };
}

function generateAvatar(name) {
  const avatarUrl = `https://ui-avatars.com/api/?background=0D8ABC&size=350&color=fff&name=${encodeURIComponent(name)}`;
  return avatarUrl;
}

function generateAddress() {
  const addresses = [
    'Hà Nội, Việt Nam',
    'TP Hồ Chí Minh, Việt Nam',
    'Đà Nẵng, Việt Nam',
    'Cần Thơ, Việt Nam',
    'Nha Trang, Việt Nam',
    'Khánh Hòa, Việt Nam',
    'Bình định, Việt Nam',
  ];
  return addresses[getRandomInt(0, addresses.length - 1)];
}

function generateRegistrationDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toLocaleDateString('vi-VN');
}

function getListUser(count = 30) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const { full, name } = generateFullname();
    const user = {
      id: `pink_app_${uuidv4().split('-')[0]}`,
      customer_name: full,
      phone_number: generatePhoneNumber(),
      email: generateEmail(name),
      avatar: generateAvatar(name),
      address: generateAddress(),
      registration_date: generateRegistrationDate(),
    };
    users.push(user);
  }
  return users;
}

module.exports = { getListUser };
