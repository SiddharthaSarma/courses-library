// webpack.config.js
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const envFile = `.env`;
if (fs.existsSync(envFile)) {
  const envConfig = dotenv.parse(fs.readFileSync(envFile));

  for (var k in envConfig) {
    process.env[k] = envConfig[k];
  }
}
module.exports = {
  entry: './src/index.js',
  env: getEnvList()
};

function getEnvList() {
  let obj = {};
  if (fs.existsSync(envFile)) {
    const envConfig = dotenv.parse(fs.readFileSync(envFile));

    for (var k in envConfig) {
      obj[k] = envConfig[k];
    }
  }
  return obj;
}
