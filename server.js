//* REQUIRE
const app = require('./src/app');
const {
  app: { port: PORT },
} = require('./src/configs/app.config');

app.listen(PORT, () => {
  console.info(`Api backend start with http://localhost:${PORT}`);
});
